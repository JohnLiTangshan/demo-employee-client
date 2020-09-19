import { Stack, SecretValue, Construct, StackProps } from '@aws-cdk/core';
import * as codepipeline from '@aws-cdk/aws-codepipeline';
import * as codepipeline_actions from '@aws-cdk/aws-codepipeline-actions';
import * as codebuild from '@aws-cdk/aws-codebuild';
import { CdkPipeline, SimpleSynthAction } from '@aws-cdk/pipelines';
import { Bucket } from '@aws-cdk/aws-s3';
import { CodeBuildAction } from '@aws-cdk/aws-codepipeline-actions';

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const OWNER = this.node.tryGetContext("repoOwner");
    const REPO = this.node.tryGetContext("repo");
    const webSiteBucketName = this.node.tryGetContext('websiteBucketName');

    const sourceArtifact = new codepipeline.Artifact();
    const cloudAssemblyArtifact = new codepipeline.Artifact();

    const webSiteBucket = new Bucket(this, 'WebsiteBucket', {
        bucketName: webSiteBucketName,
        websiteIndexDocument: 'index.html',
        websiteErrorDocument: 'index.html',
        publicReadAccess: true
    });


    const pipeline = new CdkPipeline(this, 'Pipeline', {
      pipelineName: 'DemoEmployeeClientPipeline',
      cloudAssemblyArtifact,

      sourceAction: new codepipeline_actions.GitHubSourceAction({
        actionName: 'GitHub',
        output: sourceArtifact,
        oauthToken: SecretValue.secretsManager('githubToken'),
        trigger: codepipeline_actions.GitHubTrigger.WEBHOOK,
        owner: OWNER,
        repo: REPO,
      }),
      synthAction: SimpleSynthAction.standardNpmSynth({
        sourceArtifact,
        cloudAssemblyArtifact,
        buildCommand: 'npm run build',
      })
    });

    // Unit Test
    const unitTestStage = pipeline.addStage('UnitTest');
    
    const unitTestProject = new codebuild.PipelineProject(this, 'UnitTestProject', {
      buildSpec: codebuild.BuildSpec.fromSourceFilename('buildspec-unittest.json'),
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_3_0
      },
      projectName: 'DemoEmployeeClientUnitTest'
    });

    const unitTestAction: CodeBuildAction = new codepipeline_actions.CodeBuildAction({
      actionName: 'Unit Test',
      input: sourceArtifact,
      project: unitTestProject
    });

    unitTestStage.addActions(unitTestAction);

    // E2E Test
    const e2eTestStage = pipeline.addStage('E2ETest');
    const e2eTestProject = new codebuild.PipelineProject(this, 'E2ETestProject', {
      buildSpec: codebuild.BuildSpec.fromSourceFilename('buildspec-e2etest.json'),
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_3_0
      },
      projectName: 'DemoEmployeeClientE2ETest'
    });
    const e2eTestAction: CodeBuildAction = new codepipeline_actions.CodeBuildAction({
      actionName: 'E2E Test',
      input: sourceArtifact,
      project: e2eTestProject
    });
    e2eTestStage.addActions(e2eTestAction);

    // Deploy
    const deployStage = pipeline.addStage('Deploy');
    const deployProject = new codebuild.PipelineProject(this, 'Deploy', {
      buildSpec: codebuild.BuildSpec.fromSourceFilename('buildspec-deploy.json'),
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_3_0
      },
      projectName: 'DemoEmployeeClientDeploy'
    });

    const deployArtifact = new codepipeline.Artifact();
    const deployAction: CodeBuildAction = new codepipeline_actions.CodeBuildAction({
      actionName: 'Deploy',
      input: sourceArtifact,
      outputs: [deployArtifact],
      project: deployProject,
      environmentVariables: {
        WEBSITE_BUCKET: {value: webSiteBucket.bucketName}
      },
    });
    deployStage.addActions(deployAction);



    
  }
}

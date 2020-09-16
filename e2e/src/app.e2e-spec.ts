import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { Employee } from './employee';

function sampleEmployee(): Employee {
  const employee = new Employee();
  employee.email = 'test@test.com',
  employee.firstName = 'test1';
  employee.lastName = 'test2';
  employee.department = 'Test';
  employee.location = 'test';
  employee.phone = '12345';
  employee.title = 'Manager';
  return employee;
}

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to Employee Information System');
  });

  it('should go to add employee page after click Add Employee button', () => {
    page.navigateTo();
    page.toAddEmployee();
    expect(page.addEmployeeBtn().isDisplayed()).toBe(true);
  });
  
  it('should disable Add employee button when email is not correct format', () => {

    page.navigateTo();
    page.toAddEmployee();
    const employee = sampleEmployee();
    employee.email = "test";
    page.enterNewEmployeeInfo(employee);
    expect(page.addEmployeeBtn().isEnabled()).toBe(false);
  });

  it('should enable Add employee button when employee info is correct', () => {

    page.navigateTo();
    page.toAddEmployee();
    const employee = sampleEmployee();
    page.enterNewEmployeeInfo(employee);
    expect(page.addEmployeeBtn().isEnabled()).toBe(true);
  });

  function deleteEmployee(email: string) {
    page.getDeleteEmployeeButton(email).click();
  }

  it('should be able to add one employee and delete', () => {
    page.navigateTo();
    page.toAddEmployee();
    const employee = sampleEmployee();
    page.enterNewEmployeeInfo(employee);
    page.addEmployeeBtn().click();
    expect(page.getEmailInTable(employee.email).isDisplayed()).toBe(true);
    deleteEmployee(employee.email);
    expect(page.getEmailInTable(employee.email).isPresent()).toBe(false);
  });

  it('should be able to update one employee', () => {
    page.navigateTo();
    page.toAddEmployee();
    const employee = sampleEmployee();
    page.enterNewEmployeeInfo(employee);
    page.addEmployeeBtn().click();

    page.getEditEmployeeButton(employee.email).click();

    employee.firstName = "DEMO";
    page.updateEmployeeInfo(employee);

    page.getUpdateEmployeeButton().click();

    expect(page.getFirstNameInTable(employee.email).getText()).toBe("DEMO");
    deleteEmployee(employee.email);
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

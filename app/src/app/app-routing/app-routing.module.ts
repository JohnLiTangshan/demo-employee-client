import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';


const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      component: DashboardComponent
  },
  {
      path: 'add-employee',
      component: AddEmployeeComponent,
  },
  {
    path: 'edit/:email',
    component: EditEmployeeComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

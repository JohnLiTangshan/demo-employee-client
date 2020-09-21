import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

/**
 * Component to list all employees
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees: Employee[] = [];
  displayedColumns: string[] = ['email', 'firstName', 'lastName', 'info', 'action'];

  constructor(public employeeService: EmployeeService) {

   }

  ngOnInit(): void {
    this.refreshEmployees();
  }

  refreshEmployees(): void {
    this.employeeService.getEmployees().subscribe(res => {
      if(res.isSuccess) {
        this.employees = [ ...res.result];
      }
    });
  }

  delete(email: string): void {
    this.employeeService.deleteEmployee(email).subscribe(e => {
      this.employees.splice(this.findIndex(email), 1);
      this.employees = [...this.employees];
    });
  }

  findIndex(email: string) {
    return this.employees.findIndex(e => e.email === email);
  }

}

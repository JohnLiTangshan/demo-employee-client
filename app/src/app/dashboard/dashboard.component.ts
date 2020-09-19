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

  employees: Employee[];
  displayedColumns: string[] = ['email', 'firstName', 'lastName', 'department', 'phone', 'title', 'location', 'action'];

  constructor(public employeeService: EmployeeService) {

   }

  ngOnInit(): void {
    this.refreshEmployees();
  }

  refreshEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = [ ...employees];
    });
  }

  delete(email: string): void {
    this.employeeService.deleteEmployee(email).subscribe(e => {
      this.refreshEmployees();
    });
  }

}

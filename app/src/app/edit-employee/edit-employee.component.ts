import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee;
  errorMessage: string;

  constructor(public activatedRoute: ActivatedRoute, public employeeService: EmployeeService,
      public router: Router) { }

  ngOnInit(): void {
    
    const email = this.activatedRoute.snapshot.paramMap.get('email');
    this.employeeService.getEmployee(email).subscribe(employee => {
      this.employee = { ...employee }
    }, err => {
      this.errorMessage = "No employee with Email: " + email;
    })
  }

  onSubmit(): void {
    this.employeeService.updateEmployee(this.employee).subscribe(e => {
      this.router.navigate(['/']);
    })
  }

}

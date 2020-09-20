import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

/**
 * Edit employee component
 */
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
    this.employeeService.getEmployee(email).subscribe(res => {
      if(res.isSuccess) {
        this.employee = { ...res.result }
      } else {
        this.errorMessage = "No employee with Email: " + email;
      }
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

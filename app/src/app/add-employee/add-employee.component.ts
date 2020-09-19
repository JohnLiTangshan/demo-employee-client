import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';



/**
 * Component to add employee
 */
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee;

  
  constructor(public employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employee = new Employee();
  }

  onSubmit(): void {
    this.employeeService.addEmployee(this.employee).subscribe(e => {
      this.router.navigate(['/']);
    });
  }
}

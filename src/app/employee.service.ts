import { Injectable } from '@angular/core';
import { Employee } from './model/employee';
import { Observable, of, throwError, Subject } from 'rxjs';

const employees = [{
  email: "john@demo.com",
  firstName: 'John',
  lastName: 'Li',
  department: 'PI', 
  phone: '12345', 
  title: 'Full Stack Engineer', 
  location: 'Dalian' 
},
{
  email: "victor@demo.com",
  firstName: 'Victor',
  lastName: 'Lu',
  department: 'PI', 
  phone: '23456', 
  title: 'Architect', 
  location: 'Dalian' 
}
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor() {}


  /**
   * Get all employees
   */
  getEmployees(): Observable<Employee[]> {
    return of(employees);
  }

  /**
   * Add a new employee
   * @param employee 
   */
  addEmployee(employee: Employee): Observable<Employee> {

    employees.push(employee);
    return of(employee);
  }
  /**
   * Get employee by email
   * @return employee: Employee
   */

   getEmployee(email: string): Observable<Employee> {

    const results = employees.filter(e => e.email === email);
    if(results.length === 0) {
      return throwError(new Error('No employee found with ' + email));
    }
    return of(results[0]);

   }
   /**
    * Update employee information
    */
   updateEmployee(employee: Employee): Observable<Employee> {

    const index = this.getEmployeeIndex(employee.email);
    employees[index] = employee;
    return of(employee);

   }

   /**
    * Find employee index in the employees array with email
    * @param email 
    */
   getEmployeeIndex(email: string): number {
     for(let i = 0; i < employees.length; i++) {
       if(employees[i].email === email) {
         return i;
       }
     }
     return -1;
   }
   /**
    * Delete a employee by email
    * @param email
    */
   deleteEmployee(email: string): Observable<Employee> {
     const index = this.getEmployeeIndex(email);
     const employee = employees[index];
     if(index != -1) {
       employees.splice(index, 1);
     }
     return of(employee);
   }
}

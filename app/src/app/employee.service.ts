import { Injectable } from '@angular/core';
import { Employee, GetEmployeesResult, EmployeeResult } from './model/employee';
import { Observable, of, throwError, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

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


  constructor(private http: HttpClient) {}


  /**
   * Get all employees
   */
  getEmployees(): Observable<GetEmployeesResult> {
    const baseUrl = environment.apiUrl;
    return this.http.get<GetEmployeesResult>(baseUrl + '/employees', {
      responseType: 'json'
    });
  }

  /**
   * Add a new employee
   * @param employee 
   */
  addEmployee(employee: Employee): Observable<EmployeeResult> {

    const baseUrl = environment.apiUrl;
    return this.http.post<EmployeeResult>(baseUrl + '/employees', employee);
    
  }
  /**
   * Get employee by email
   * @return employee: Employee
   */

   getEmployee(email: string): Observable<EmployeeResult> {
    const baseUrl = environment.apiUrl;
    return this.http.get<EmployeeResult>(`${baseUrl}/employees/${email}`)
    
   }
   /**
    * Update employee information
    */
   updateEmployee(employee: Employee): Observable<EmployeeResult> {
    return this.http.put<EmployeeResult>(`${environment.apiUrl}/employees`, employee);
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
   deleteEmployee(email: string): Observable<EmployeeResult> {

    return this.http.delete<EmployeeResult>(`${environment.apiUrl}/employees/${email}`)
     
   }
}

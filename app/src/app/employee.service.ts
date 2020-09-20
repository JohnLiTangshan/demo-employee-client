import { Injectable } from '@angular/core';
import { Employee, GetEmployeesResult, EmployeeResult } from './model/employee';
import { Observable, of, throwError, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

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
    * Delete a employee by email
    * @param email
    */
   deleteEmployee(email: string): Observable<EmployeeResult> {

    return this.http.delete<EmployeeResult>(`${environment.apiUrl}/employees/${email}`)
     
   }
}

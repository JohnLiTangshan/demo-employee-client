import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { environment } from '../environments/environment';
import { Employee } from './model/employee';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EmployeeService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get employees', () => {
    const testData = {
      isSuccess: true,
      result: [],
      errorMessage: ''
    };
    service.getEmployees().subscribe(result => {
      expect(result).toEqual(testData);
    });
    const req = httpTestingController.expectOne(environment.apiUrl + '/employees');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });

  function sampleEmployee(): Employee {
    const employee = new Employee();
    employee.email = 'test@test.com',
    employee.firstName = 'test1';
    employee.lastName = 'test2';
    employee.location = 'test';
    employee.phone = '12345';
    employee.title = 'Manager';
    return employee;
  }
  
  it('should add employee', () => {
    const testData = {
      isSuccess: true,
      result: sampleEmployee(),
      errorMessage: ''
    };
    service.addEmployee(sampleEmployee()).subscribe(result => {
      expect(result).toEqual(testData);
    });
    const req = httpTestingController.expectOne(environment.apiUrl + '/employees');
    expect(req.request.method).toEqual('POST');
    req.flush(testData);
    httpTestingController.verify();
  });

  it('should be able to get employee', () => {
    const testData = {
      isSuccess: true,
      result: sampleEmployee(),
      errorMessage: ''
    };
    service.getEmployee('test@test.com').subscribe(result => {
      expect(result).toEqual(testData);
    });
    const req = httpTestingController.expectOne(environment.apiUrl + '/employees/test@test.com');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });
  it('should update employee', () => {
    const testData = {
      isSuccess: true,
      result: sampleEmployee(),
      errorMessage: ''
    };
    service.updateEmployee(sampleEmployee()).subscribe(result => {
      expect(result).toEqual(testData);
    });
    const req = httpTestingController.expectOne(environment.apiUrl + '/employees');
    expect(req.request.method).toEqual('PUT');
    req.flush(testData);
    httpTestingController.verify();
  });
  it('should delete employee', () => {
    const testData = {
      isSuccess: true,
      result: sampleEmployee(),
      errorMessage: ''
    };
    service.deleteEmployee('test@test.com').subscribe(result => {
      expect(result).toEqual(testData);
    });
    const req = httpTestingController.expectOne(environment.apiUrl + '/employees/test@test.com');
    expect(req.request.method).toEqual('DELETE');
    req.flush(testData);
    httpTestingController.verify();
  });
});

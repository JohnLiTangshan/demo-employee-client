import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from "@angular/common";
import { EditEmployeeComponent } from './edit-employee.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EmployeeService } from '../employee.service';
import { Observable, of, throwError } from 'rxjs';
import { Employee, EmployeeResult } from '../model/employee';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EditEmployeeComponent', () => {
  let component: EditEmployeeComponent;
  let fixture: ComponentFixture<EditEmployeeComponent>;
  let location: Location;
  let route: ActivatedRoute;
  let employeeService;
  beforeEach(async () => {

    employeeService = {
      getEmployee: function (email: string): Observable<EmployeeResult> {
        let employee = sampleEmployee();
        return of({
          isSuccess: true,
          result: employee,
          errorMessage: ''
        });
      },
      updateEmployee: function(employee: Employee): Observable<EmployeeResult> {
        return of({
          isSuccess: true,
          errorMessage: '',
          result: employee
        });
      }
    };
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeComponent ],
      imports: [
        RouterTestingModule.withRoutes([{
          path: '', pathMatch: 'full', component: DashboardComponent
        }]),
        FormsModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        {
          provide: EmployeeService,
          useValue: employeeService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location); 
    route = TestBed.get(ActivatedRoute);
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
  it('should get employee when employee service could get employee', () => {
    // GIVEN
    const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    spyRoute.and.returnValue('test@test.com');
    const spyService = spyOn(employeeService, 'getEmployee');
    const employee = sampleEmployee();
    // WHEN
    spyService.and.returnValue(of({
      isSuccess: true,
      result: employee,
      errorMessage: ''
    }));
    fixture.detectChanges();

    // THEN
    expect(component.employee).toBeTruthy();
    expect(component.errorMessage).toBeFalsy();
    expect(component.employee.firstName).toBe(employee.firstName);
    expect(component.employee.lastName).toBe(employee.lastName);
    expect(component.employee.location).toBe(employee.location);
    expect(component.employee.phone).toBe(employee.phone);
    expect(component.employee.title).toBe(employee.title);
    expect(component.employee.email).toBe(employee.email);
  });

  it('should show error message when get error from service', () => {
    // GIVEN
    const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    spyRoute.and.returnValue('test@test.com');
    const spyService = spyOn(employeeService, 'getEmployee');

    // WHEN
    spyService.and.returnValue(of({
      isSuccess: false,
      result: null,
      errorMessage: 'Fail'
    }));
    fixture.detectChanges();
    expect(component.errorMessage).toBe('No employee with Email: test@test.com');
    expect(component.employee).toBeFalsy();
  });

  it('should show error message when employee service fail to get employee', () => {
    // GIVEN
    const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    spyRoute.and.returnValue('test@test.com');
    const spyService = spyOn(employeeService, 'getEmployee');

    // WHEN
    spyService.and.returnValue(throwError(new Error('no employee')));
    fixture.detectChanges();
    expect(component.errorMessage).toBe('No employee with Email: test@test.com');
    expect(component.employee).toBeFalsy();
  });

  it('should go to home page after update employee', () => {
    // GIVEN
    const spyService = spyOn(employeeService, 'updateEmployee');
    const employee = sampleEmployee();
    spyService.and.returnValue(of({
      isSuccess: true,
      result: employee,
      errorMessage: ''
    }));
    
    // WHEN
    component.onSubmit();
    expect(location.path()).toBe('');
  });
  
});

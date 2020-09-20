import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee, GetEmployeesResult } from '../model/employee';
import { EmployeeService } from '../employee.service';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  function sampleEmployees(): Employee[] {
    const employees = [];
    const employee = new Employee();
    employee.email = 'test@test.com',
    employee.firstName = 'test1';
    employee.lastName = 'test2';
    employee.location = 'test';
    employee.phone = '12345';
    employee.title = 'Manager';

    employees.push(employee);
    return employees;
  }

  let employeService;
  beforeEach(async () => {
    employeService = {
      getEmployees: function (): Observable<GetEmployeesResult> {
        return of({
            isSuccess: true,
            result: sampleEmployees(),
            errorMessage: ''
          });
      },
      deleteEmployee: function(email: string): Observable<Employee> {
        return of(null);
      }
    };
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        MatTableModule,
        MatMenuModule
      ],
      providers: [
        {
          provide: EmployeeService,
          useValue: employeService
        }
      ] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have employees', () => {
    fixture.detectChanges();
    expect(component.employees.length).toBe(1);
  });
  it('should get no employees when service fail', () => {
      // GIVEN
      const spyService = spyOn(employeService, 'getEmployees');
      spyService.and.returnValue(of({
        isSuccess: false,
        result: null,
        errorMessage: 'Fail'
      }));
      fixture.detectChanges();
      expect(component.employees.length).toBe(0);
  })

  it('should be able to delete employees', () => {
    fixture.detectChanges();
    // GIVEN
    const spyService = spyOn(employeService, 'deleteEmployee');

    const employees = sampleEmployees();
    spyService.and.returnValue(of(employees[0]));

    // WHEN 
    component.delete('test@test.com');

    // THEN

    expect(spyService).toHaveBeenCalled();
  });
});

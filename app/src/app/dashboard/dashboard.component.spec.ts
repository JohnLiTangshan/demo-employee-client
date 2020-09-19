import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../model/employee';
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

  let employeService = {
    getEmployees: function (): Observable<Employee[]> {
      return of(sampleEmployees());
    },
    deleteEmployee: function(email: string): Observable<Employee> {
      return of(null);
    }
  };
  beforeEach(async () => {
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have employees', () => {
    expect(component.employees.length).toBe(1);
  });

  it('should be able to delete employees', () => {
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

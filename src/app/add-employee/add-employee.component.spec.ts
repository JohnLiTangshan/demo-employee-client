import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddEmployeeComponent } from './add-employee.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;
  let location: Location;
  let employeService = {
    
    addEmployee: function(employee: Employee): Observable<Employee> {
      return of(employee);
    }
  };

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          {path: '', pathMatch: 'full', component: DashboardComponent}
        ]),
        FormsModule
      ],
      providers: [
        {
          provide: EmployeeService,
          useValue: employeService
        }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    location = TestBed.get(Location); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an employee instance', () => {
    expect(component.employee).toBeTruthy();
  });

  it('should call add employee service when submit', () => {
    // GIVEN
    const spyService = spyOn(employeService, 'addEmployee');
    const employee = sampleEmployee();
    spyService.and.returnValue(of(employee));

    // WHEN
    component.onSubmit();

    // THEN
    expect(spyService).toHaveBeenCalled();
    expect(location.path()).toBe('');

  })
});

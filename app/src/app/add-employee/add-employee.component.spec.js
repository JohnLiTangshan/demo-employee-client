"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/router/testing");
const add_employee_component_1 = require("./add-employee.component");
const dashboard_component_1 = require("../dashboard/dashboard.component");
const forms_1 = require("@angular/forms");
const core_1 = require("@angular/core");
const employee_1 = require("../model/employee");
const rxjs_1 = require("rxjs");
const employee_service_1 = require("../employee.service");
const common_1 = require("@angular/common");
describe('AddEmployeeComponent', () => {
    let component;
    let fixture;
    let location;
    let employeService = {
        addEmployee: function (employee) {
            return rxjs_1.of(employee);
        }
    };
    function sampleEmployee() {
        const employee = new employee_1.Employee();
        employee.email = 'test@test.com',
            employee.firstName = 'test1';
        employee.lastName = 'test2';
        employee.location = 'test';
        employee.phone = '12345';
        employee.title = 'Manager';
        return employee;
    }
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [add_employee_component_1.AddEmployeeComponent],
            imports: [
                testing_2.RouterTestingModule.withRoutes([
                    { path: '', pathMatch: 'full', component: dashboard_component_1.DashboardComponent }
                ]),
                forms_1.FormsModule
            ],
            providers: [
                {
                    provide: employee_service_1.EmployeeService,
                    useValue: employeService
                }
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(add_employee_component_1.AddEmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        location = testing_1.TestBed.get(common_1.Location);
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
        spyService.and.returnValue(rxjs_1.of(employee));
        // WHEN
        component.onSubmit();
        // THEN
        expect(spyService).toHaveBeenCalled();
        expect(location.path()).toBe('');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVtcGxveWVlLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWVtcGxveWVlLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWtFO0FBQ2xFLHFEQUE4RDtBQUM5RCxxRUFBZ0U7QUFDaEUsMEVBQXNFO0FBQ3RFLDBDQUE2QztBQUM3Qyx3Q0FBdUQ7QUFDdkQsZ0RBQTZDO0FBQzdDLCtCQUFzQztBQUN0QywwREFBc0Q7QUFDdEQsNENBQTJDO0FBRTNDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7SUFDcEMsSUFBSSxTQUErQixDQUFDO0lBQ3BDLElBQUksT0FBK0MsQ0FBQztJQUNwRCxJQUFJLFFBQWtCLENBQUM7SUFDdkIsSUFBSSxjQUFjLEdBQUc7UUFFbkIsV0FBVyxFQUFFLFVBQVMsUUFBa0I7WUFDdEMsT0FBTyxTQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsQ0FBQztLQUNGLENBQUM7SUFFRixTQUFTLGNBQWM7UUFDckIsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDaEMsUUFBUSxDQUFDLEtBQUssR0FBRyxlQUFlO1lBQ2hDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQzNCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDcEIsTUFBTSxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFlBQVksRUFBRSxDQUFFLDZDQUFvQixDQUFFO1lBQ3RDLE9BQU8sRUFBRTtnQkFDUCw2QkFBbUIsQ0FBQyxVQUFVLENBQUM7b0JBQzdCLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBQztpQkFDN0QsQ0FBQztnQkFDRixtQkFBVzthQUNaO1lBQ0QsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxrQ0FBZTtvQkFDeEIsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsQ0FBRSw2QkFBc0IsQ0FBRTtTQUNwQyxDQUFDO2FBQ0QsaUJBQWlCLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsNkNBQW9CLENBQUMsQ0FBQztRQUN4RCxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixRQUFRLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsaUJBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFDdkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsRUFBRTtRQUM1QyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhDQUE4QyxFQUFFLEdBQUcsRUFBRTtRQUN0RCxRQUFRO1FBQ1IsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4RCxNQUFNLFFBQVEsR0FBRyxjQUFjLEVBQUUsQ0FBQztRQUNsQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUV6QyxPQUFPO1FBQ1AsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXJCLE9BQU87UUFDUCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRW5DLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IFJvdXRlclRlc3RpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvdGVzdGluZyc7XG5pbXBvcnQgeyBBZGRFbXBsb3llZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkLWVtcGxveWVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVtcGxveWVlIH0gZnJvbSAnLi4vbW9kZWwvZW1wbG95ZWUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEVtcGxveWVlU2VydmljZSB9IGZyb20gJy4uL2VtcGxveWVlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5kZXNjcmliZSgnQWRkRW1wbG95ZWVDb21wb25lbnQnLCAoKSA9PiB7XG4gIGxldCBjb21wb25lbnQ6IEFkZEVtcGxveWVlQ29tcG9uZW50O1xuICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxBZGRFbXBsb3llZUNvbXBvbmVudD47XG4gIGxldCBsb2NhdGlvbjogTG9jYXRpb247XG4gIGxldCBlbXBsb3llU2VydmljZSA9IHtcbiAgICBcbiAgICBhZGRFbXBsb3llZTogZnVuY3Rpb24oZW1wbG95ZWU6IEVtcGxveWVlKTogT2JzZXJ2YWJsZTxFbXBsb3llZT4ge1xuICAgICAgcmV0dXJuIG9mKGVtcGxveWVlKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gc2FtcGxlRW1wbG95ZWUoKTogRW1wbG95ZWUge1xuICAgIGNvbnN0IGVtcGxveWVlID0gbmV3IEVtcGxveWVlKCk7XG4gICAgZW1wbG95ZWUuZW1haWwgPSAndGVzdEB0ZXN0LmNvbScsXG4gICAgZW1wbG95ZWUuZmlyc3ROYW1lID0gJ3Rlc3QxJztcbiAgICBlbXBsb3llZS5sYXN0TmFtZSA9ICd0ZXN0Mic7XG4gICAgZW1wbG95ZWUubG9jYXRpb24gPSAndGVzdCc7XG4gICAgZW1wbG95ZWUucGhvbmUgPSAnMTIzNDUnO1xuICAgIGVtcGxveWVlLnRpdGxlID0gJ01hbmFnZXInO1xuICAgIHJldHVybiBlbXBsb3llZTtcbiAgfVxuXG4gIGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICBkZWNsYXJhdGlvbnM6IFsgQWRkRW1wbG95ZWVDb21wb25lbnQgXSxcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgUm91dGVyVGVzdGluZ01vZHVsZS53aXRoUm91dGVzKFtcbiAgICAgICAgICB7cGF0aDogJycsIHBhdGhNYXRjaDogJ2Z1bGwnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudH1cbiAgICAgICAgXSksXG4gICAgICAgIEZvcm1zTW9kdWxlXG4gICAgICBdLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBFbXBsb3llZVNlcnZpY2UsXG4gICAgICAgICAgdXNlVmFsdWU6IGVtcGxveWVTZXJ2aWNlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXSxcbiAgICB9KVxuICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuICB9KTtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQWRkRW1wbG95ZWVDb21wb25lbnQpO1xuICAgIGNvbXBvbmVudCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgbG9jYXRpb24gPSBUZXN0QmVkLmdldChMb2NhdGlvbik7IFxuICB9KTtcblxuICBpdCgnc2hvdWxkIGNyZWF0ZScsICgpID0+IHtcbiAgICBleHBlY3QoY29tcG9uZW50KS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgY3JlYXRlIGFuIGVtcGxveWVlIGluc3RhbmNlJywgKCkgPT4ge1xuICAgIGV4cGVjdChjb21wb25lbnQuZW1wbG95ZWUpLnRvQmVUcnV0aHkoKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBjYWxsIGFkZCBlbXBsb3llZSBzZXJ2aWNlIHdoZW4gc3VibWl0JywgKCkgPT4ge1xuICAgIC8vIEdJVkVOXG4gICAgY29uc3Qgc3B5U2VydmljZSA9IHNweU9uKGVtcGxveWVTZXJ2aWNlLCAnYWRkRW1wbG95ZWUnKTtcbiAgICBjb25zdCBlbXBsb3llZSA9IHNhbXBsZUVtcGxveWVlKCk7XG4gICAgc3B5U2VydmljZS5hbmQucmV0dXJuVmFsdWUob2YoZW1wbG95ZWUpKTtcblxuICAgIC8vIFdIRU5cbiAgICBjb21wb25lbnQub25TdWJtaXQoKTtcblxuICAgIC8vIFRIRU5cbiAgICBleHBlY3Qoc3B5U2VydmljZSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgIGV4cGVjdChsb2NhdGlvbi5wYXRoKCkpLnRvQmUoJycpO1xuXG4gIH0pXG59KTtcbiJdfQ==
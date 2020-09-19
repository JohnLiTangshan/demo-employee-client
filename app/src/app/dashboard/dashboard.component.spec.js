"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const dashboard_component_1 = require("./dashboard.component");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const employee_1 = require("../model/employee");
const employee_service_1 = require("../employee.service");
const table_1 = require("@angular/material/table");
const menu_1 = require("@angular/material/menu");
describe('DashboardComponent', () => {
    let component;
    let fixture;
    function sampleEmployees() {
        const employees = [];
        const employee = new employee_1.Employee();
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
        getEmployees: function () {
            return rxjs_1.of(sampleEmployees());
        },
        deleteEmployee: function (email) {
            return rxjs_1.of(null);
        }
    };
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [dashboard_component_1.DashboardComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            imports: [
                table_1.MatTableModule,
                menu_1.MatMenuModule
            ],
            providers: [
                {
                    provide: employee_service_1.EmployeeService,
                    useValue: employeService
                }
            ]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(dashboard_component_1.DashboardComponent);
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
        spyService.and.returnValue(rxjs_1.of(employees[0]));
        // WHEN 
        component.delete('test@test.com');
        // THEN
        expect(spyService).toHaveBeenCalled();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGFzaGJvYXJkLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWtFO0FBRWxFLCtEQUEyRDtBQUMzRCx3Q0FBdUQ7QUFDdkQsK0JBQXNDO0FBQ3RDLGdEQUE2QztBQUM3QywwREFBc0Q7QUFDdEQsbURBQXlEO0FBQ3pELGlEQUF1RDtBQUV2RCxRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBQ2xDLElBQUksU0FBNkIsQ0FBQztJQUNsQyxJQUFJLE9BQTZDLENBQUM7SUFFbEQsU0FBUyxlQUFlO1FBQ3RCLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQixNQUFNLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUNoQyxRQUFRLENBQUMsS0FBSyxHQUFHLGVBQWU7WUFDaEMsUUFBUSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDN0IsUUFBUSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDNUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDM0IsUUFBUSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDekIsUUFBUSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFFM0IsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSSxjQUFjLEdBQUc7UUFDbkIsWUFBWSxFQUFFO1lBQ1osT0FBTyxTQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0QsY0FBYyxFQUFFLFVBQVMsS0FBYTtZQUNwQyxPQUFPLFNBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDO0tBQ0YsQ0FBQztJQUNGLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNwQixNQUFNLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsWUFBWSxFQUFFLENBQUUsd0NBQWtCLENBQUU7WUFDcEMsT0FBTyxFQUFFLENBQUUsNkJBQXNCLENBQUU7WUFDbkMsT0FBTyxFQUFFO2dCQUNQLHNCQUFjO2dCQUNkLG9CQUFhO2FBQ2Q7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGtDQUFlO29CQUN4QixRQUFRLEVBQUUsY0FBYztpQkFDekI7YUFDRjtTQUNGLENBQUM7YUFDRCxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyx3Q0FBa0IsQ0FBQyxDQUFDO1FBQ3RELFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdEMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFDdkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtRQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxFQUFFO1FBQzVDLFFBQVE7UUFDUixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFM0QsTUFBTSxTQUFTLEdBQUcsZUFBZSxFQUFFLENBQUM7UUFDcEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0MsUUFBUTtRQUNSLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFbEMsT0FBTztRQUVQLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFbXBsb3llZSB9IGZyb20gJy4uL21vZGVsL2VtcGxveWVlJztcbmltcG9ydCB7IEVtcGxveWVlU2VydmljZSB9IGZyb20gJy4uL2VtcGxveWVlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5cbmRlc2NyaWJlKCdEYXNoYm9hcmRDb21wb25lbnQnLCAoKSA9PiB7XG4gIGxldCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudDtcbiAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8RGFzaGJvYXJkQ29tcG9uZW50PjtcblxuICBmdW5jdGlvbiBzYW1wbGVFbXBsb3llZXMoKTogRW1wbG95ZWVbXSB7XG4gICAgY29uc3QgZW1wbG95ZWVzID0gW107XG4gICAgY29uc3QgZW1wbG95ZWUgPSBuZXcgRW1wbG95ZWUoKTtcbiAgICBlbXBsb3llZS5lbWFpbCA9ICd0ZXN0QHRlc3QuY29tJyxcbiAgICBlbXBsb3llZS5maXJzdE5hbWUgPSAndGVzdDEnO1xuICAgIGVtcGxveWVlLmxhc3ROYW1lID0gJ3Rlc3QyJztcbiAgICBlbXBsb3llZS5sb2NhdGlvbiA9ICd0ZXN0JztcbiAgICBlbXBsb3llZS5waG9uZSA9ICcxMjM0NSc7XG4gICAgZW1wbG95ZWUudGl0bGUgPSAnTWFuYWdlcic7XG5cbiAgICBlbXBsb3llZXMucHVzaChlbXBsb3llZSk7XG4gICAgcmV0dXJuIGVtcGxveWVlcztcbiAgfVxuXG4gIGxldCBlbXBsb3llU2VydmljZSA9IHtcbiAgICBnZXRFbXBsb3llZXM6IGZ1bmN0aW9uICgpOiBPYnNlcnZhYmxlPEVtcGxveWVlW10+IHtcbiAgICAgIHJldHVybiBvZihzYW1wbGVFbXBsb3llZXMoKSk7XG4gICAgfSxcbiAgICBkZWxldGVFbXBsb3llZTogZnVuY3Rpb24oZW1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8RW1wbG95ZWU+IHtcbiAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICB9XG4gIH07XG4gIGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICBkZWNsYXJhdGlvbnM6IFsgRGFzaGJvYXJkQ29tcG9uZW50IF0sXG4gICAgICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXSxcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXG4gICAgICAgIE1hdE1lbnVNb2R1bGVcbiAgICAgIF0sXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEVtcGxveWVlU2VydmljZSxcbiAgICAgICAgICB1c2VWYWx1ZTogZW1wbG95ZVNlcnZpY2VcbiAgICAgICAgfVxuICAgICAgXSBcbiAgICB9KVxuICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuICB9KTtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoRGFzaGJvYXJkQ29tcG9uZW50KTtcbiAgICBjb21wb25lbnQgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGNyZWF0ZScsICgpID0+IHtcbiAgICBleHBlY3QoY29tcG9uZW50KS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgaGF2ZSBlbXBsb3llZXMnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGNvbXBvbmVudC5lbXBsb3llZXMubGVuZ3RoKS50b0JlKDEpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gZGVsZXRlIGVtcGxveWVlcycsICgpID0+IHtcbiAgICAvLyBHSVZFTlxuICAgIGNvbnN0IHNweVNlcnZpY2UgPSBzcHlPbihlbXBsb3llU2VydmljZSwgJ2RlbGV0ZUVtcGxveWVlJyk7XG5cbiAgICBjb25zdCBlbXBsb3llZXMgPSBzYW1wbGVFbXBsb3llZXMoKTtcbiAgICBzcHlTZXJ2aWNlLmFuZC5yZXR1cm5WYWx1ZShvZihlbXBsb3llZXNbMF0pKTtcblxuICAgIC8vIFdIRU4gXG4gICAgY29tcG9uZW50LmRlbGV0ZSgndGVzdEB0ZXN0LmNvbScpO1xuXG4gICAgLy8gVEhFTlxuXG4gICAgZXhwZWN0KHNweVNlcnZpY2UpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgfSk7XG59KTtcbiJdfQ==
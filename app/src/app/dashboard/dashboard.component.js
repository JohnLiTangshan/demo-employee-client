"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
/**
 * Component to list all employees
 */
let DashboardComponent = class DashboardComponent {
    constructor(employeeService) {
        this.employeeService = employeeService;
        this.displayedColumns = ['email', 'firstName', 'lastName', 'department', 'phone', 'title', 'location', 'action'];
    }
    ngOnInit() {
        this.refreshEmployees();
    }
    refreshEmployees() {
        this.employeeService.getEmployees().subscribe(employees => {
            this.employees = [...employees];
        });
    }
    delete(email) {
        this.employeeService.deleteEmployee(email).subscribe(e => {
            this.refreshEmployees();
        });
    }
};
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0FBa0Q7QUFJbEQ7O0dBRUc7QUFNSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUs3QixZQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFGbkQscUJBQWdCLEdBQWEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFJckgsQ0FBQztJQUVGLFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFFLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGLENBQUE7QUF6Qlksa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO0tBQ3pDLENBQUM7R0FDVyxrQkFBa0IsQ0F5QjlCO0FBekJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbXBsb3llZVNlcnZpY2UgfSBmcm9tICcuLi9lbXBsb3llZS5zZXJ2aWNlJztcbmltcG9ydCB7IEVtcGxveWVlIH0gZnJvbSAnLi4vbW9kZWwvZW1wbG95ZWUnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBsaXN0IGFsbCBlbXBsb3llZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRhc2hib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZW1wbG95ZWVzOiBFbXBsb3llZVtdO1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnZW1haWwnLCAnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ2RlcGFydG1lbnQnLCAncGhvbmUnLCAndGl0bGUnLCAnbG9jYXRpb24nLCAnYWN0aW9uJ107XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVtcGxveWVlU2VydmljZTogRW1wbG95ZWVTZXJ2aWNlKSB7XG5cbiAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hFbXBsb3llZXMoKTtcbiAgfVxuXG4gIHJlZnJlc2hFbXBsb3llZXMoKTogdm9pZCB7XG4gICAgdGhpcy5lbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWVzKCkuc3Vic2NyaWJlKGVtcGxveWVlcyA9PiB7XG4gICAgICB0aGlzLmVtcGxveWVlcyA9IFsgLi4uZW1wbG95ZWVzXTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZShlbWFpbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5lbXBsb3llZVNlcnZpY2UuZGVsZXRlRW1wbG95ZWUoZW1haWwpLnN1YnNjcmliZShlID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaEVtcGxveWVlcygpO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==
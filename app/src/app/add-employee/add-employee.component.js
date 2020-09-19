"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const employee_1 = require("../model/employee");
/**
 * Component to add employee
 */
let AddEmployeeComponent = class AddEmployeeComponent {
    constructor(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
    }
    ngOnInit() {
        this.employee = new employee_1.Employee();
    }
    onSubmit() {
        this.employeeService.addEmployee(this.employee).subscribe(e => {
            this.router.navigate(['/']);
        });
    }
};
AddEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'app-add-employee',
        templateUrl: './add-employee.component.html',
        styleUrls: ['./add-employee.component.css']
    })
], AddEmployeeComponent);
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVtcGxveWVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC1lbXBsb3llZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0FBa0Q7QUFDbEQsZ0RBQTZDO0FBTzdDOztHQUVHO0FBTUgsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFLL0IsWUFBbUIsZUFBZ0MsRUFBVSxNQUFjO1FBQXhELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBSSxDQUFDO0lBRWhGLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQWhCWSxvQkFBb0I7SUFMaEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsV0FBVyxFQUFFLCtCQUErQjtRQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztLQUM1QyxDQUFDO0dBQ1csb0JBQW9CLENBZ0JoQztBQWhCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tICcuLi9tb2RlbC9lbXBsb3llZSc7XG5pbXBvcnQgeyBFbXBsb3llZVNlcnZpY2UgfSBmcm9tICcuLi9lbXBsb3llZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gYWRkIGVtcGxveWVlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hZGQtZW1wbG95ZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLWVtcGxveWVlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWVtcGxveWVlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRFbXBsb3llZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZW1wbG95ZWU6IEVtcGxveWVlO1xuXG4gIFxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZW1wbG95ZWVTZXJ2aWNlOiBFbXBsb3llZVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZW1wbG95ZWUgPSBuZXcgRW1wbG95ZWUoKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuZW1wbG95ZWVTZXJ2aWNlLmFkZEVtcGxveWVlKHRoaXMuZW1wbG95ZWUpLnN1YnNjcmliZShlID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICB9KTtcbiAgfVxufVxuIl19
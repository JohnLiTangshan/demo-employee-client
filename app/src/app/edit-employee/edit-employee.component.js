"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let EditEmployeeComponent = class EditEmployeeComponent {
    constructor(activatedRoute, employeeService, router) {
        this.activatedRoute = activatedRoute;
        this.employeeService = employeeService;
        this.router = router;
    }
    ngOnInit() {
        const email = this.activatedRoute.snapshot.paramMap.get('email');
        this.employeeService.getEmployee(email).subscribe(employee => {
            this.employee = { ...employee };
        }, err => {
            this.errorMessage = "No employee with Email: " + email;
        });
    }
    onSubmit() {
        this.employeeService.updateEmployee(this.employee).subscribe(e => {
            this.router.navigate(['/']);
        });
    }
};
EditEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-employee',
        templateUrl: './edit-employee.component.html',
        styleUrls: ['./edit-employee.component.css']
    })
], EditEmployeeComponent);
exports.EditEmployeeComponent = EditEmployeeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1lbXBsb3llZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGl0LWVtcGxveWVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdDQUFrRDtBQVVsRCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQUtoQyxZQUFtQixjQUE4QixFQUFTLGVBQWdDLEVBQy9FLE1BQWM7UUFETixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0UsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFOUIsUUFBUTtRQUVOLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLFFBQVEsRUFBRSxDQUFBO1FBQ2pDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNQLElBQUksQ0FBQyxZQUFZLEdBQUcsMEJBQTBCLEdBQUcsS0FBSyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FFRixDQUFBO0FBeEJZLHFCQUFxQjtJQUxqQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO0tBQzdDLENBQUM7R0FDVyxxQkFBcUIsQ0F3QmpDO0FBeEJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEVtcGxveWVlU2VydmljZSB9IGZyb20gJy4uL2VtcGxveWVlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tICcuLi9tb2RlbC9lbXBsb3llZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1lZGl0LWVtcGxveWVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQtZW1wbG95ZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lZGl0LWVtcGxveWVlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFZGl0RW1wbG95ZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGVtcGxveWVlOiBFbXBsb3llZTtcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHVibGljIGVtcGxveWVlU2VydmljZTogRW1wbG95ZWVTZXJ2aWNlLFxuICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBcbiAgICBjb25zdCBlbWFpbCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdlbWFpbCcpO1xuICAgIHRoaXMuZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlKGVtYWlsKS5zdWJzY3JpYmUoZW1wbG95ZWUgPT4ge1xuICAgICAgdGhpcy5lbXBsb3llZSA9IHsgLi4uZW1wbG95ZWUgfVxuICAgIH0sIGVyciA9PiB7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiTm8gZW1wbG95ZWUgd2l0aCBFbWFpbDogXCIgKyBlbWFpbDtcbiAgICB9KVxuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbXBsb3llZVNlcnZpY2UudXBkYXRlRW1wbG95ZWUodGhpcy5lbXBsb3llZSkuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgIH0pXG4gIH1cblxufVxuIl19
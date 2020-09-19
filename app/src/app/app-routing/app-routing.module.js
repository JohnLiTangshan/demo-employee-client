"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const dashboard_component_1 = require("../dashboard/dashboard.component");
const add_employee_component_1 = require("../add-employee/add-employee.component");
const edit_employee_component_1 = require("../edit-employee/edit-employee.component");
const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'add-employee',
        component: add_employee_component_1.AddEmployeeComponent,
    },
    {
        path: 'edit/:email',
        component: edit_employee_component_1.EditEmployeeComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        declarations: [],
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBQXlDO0FBQ3pDLDRDQUF1RDtBQUN2RCwwRUFBcUU7QUFDckUsbUZBQThFO0FBQzlFLHNGQUFpRjtBQUdqRixNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLE1BQU07UUFDakIsU0FBUyxFQUFFLHdDQUFrQjtLQUNoQztJQUNEO1FBQ0ksSUFBSSxFQUFFLGNBQWM7UUFDcEIsU0FBUyxFQUFFLDZDQUFvQjtLQUNsQztJQUNEO1FBQ0UsSUFBSSxFQUFFLGFBQWE7UUFDbkIsU0FBUyxFQUFFLCtDQUFxQjtLQUNqQztDQUNGLENBQUM7QUFZRixJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFJLENBQUE7QUFBcEIsZ0JBQWdCO0lBVDVCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxFQUFFO1FBQ2hCLE9BQU8sRUFBRTtZQUNQLHFCQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUM3QjtRQUNELE9BQU8sRUFBRTtZQUNQLHFCQUFZO1NBQ2I7S0FDRixDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4uL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50J1xuaW1wb3J0IHsgQWRkRW1wbG95ZWVDb21wb25lbnQgfSBmcm9tICcuLi9hZGQtZW1wbG95ZWUvYWRkLWVtcGxveWVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFZGl0RW1wbG95ZWVDb21wb25lbnQgfSBmcm9tICcuLi9lZGl0LWVtcGxveWVlL2VkaXQtZW1wbG95ZWUuY29tcG9uZW50JztcblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBwYXRoTWF0Y2g6ICdmdWxsJyxcbiAgICAgIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICAgIHBhdGg6ICdhZGQtZW1wbG95ZWUnLFxuICAgICAgY29tcG9uZW50OiBBZGRFbXBsb3llZUNvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdlZGl0LzplbWFpbCcsXG4gICAgY29tcG9uZW50OiBFZGl0RW1wbG95ZWVDb21wb25lbnRcbiAgfVxuXTtcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==
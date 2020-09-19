"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const flex_layout_1 = require("@angular/flex-layout");
const app_component_1 = require("./app.component");
const animations_1 = require("@angular/platform-browser/animations");
const dashboard_component_1 = require("./dashboard/dashboard.component");
const app_routing_module_1 = require("./app-routing/app-routing.module");
const button_1 = require("@angular/material/button");
const divider_1 = require("@angular/material/divider");
const table_1 = require("@angular/material/table");
const input_1 = require("@angular/material/input");
const form_field_1 = require("@angular/material/form-field");
const menu_1 = require("@angular/material/menu");
const icon_1 = require("@angular/material/icon");
const add_employee_component_1 = require("./add-employee/add-employee.component");
const forms_1 = require("@angular/forms");
const edit_employee_component_1 = require("./edit-employee/edit-employee.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            add_employee_component_1.AddEmployeeComponent,
            edit_employee_component_1.EditEmployeeComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            flex_layout_1.FlexLayoutModule,
            animations_1.BrowserAnimationsModule,
            button_1.MatButtonModule,
            divider_1.MatDividerModule,
            input_1.MatInputModule,
            form_field_1.MatFormFieldModule,
            menu_1.MatMenuModule,
            table_1.MatTableModule,
            icon_1.MatIconModule,
            app_routing_module_1.AppRoutingModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxnRUFBMEQ7QUFDMUQsd0NBQXlDO0FBQ3pDLHNEQUF3RDtBQUV4RCxtREFBK0M7QUFDL0MscUVBQStFO0FBQy9FLHlFQUFxRTtBQUNyRSx5RUFBb0U7QUFFcEUscURBQXlEO0FBQ3pELHVEQUEyRDtBQUMzRCxtREFBdUQ7QUFDdkQsbURBQXVEO0FBQ3ZELDZEQUFnRTtBQUNoRSxpREFBcUQ7QUFDckQsaURBQXFEO0FBQ3JELGtGQUE2RTtBQUM3RSwwQ0FBNkM7QUFDN0MscUZBQWdGO0FBMEJoRixJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0NBQUksQ0FBQTtBQUFiLFNBQVM7SUF4QnJCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osd0NBQWtCO1lBQ2xCLDZDQUFvQjtZQUNwQiwrQ0FBcUI7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxnQ0FBYTtZQUNiLG1CQUFXO1lBQ1gsOEJBQWdCO1lBQ2hCLG9DQUF1QjtZQUN2Qix3QkFBZTtZQUNmLDBCQUFnQjtZQUNoQixzQkFBYztZQUNkLCtCQUFrQjtZQUNsQixvQkFBYTtZQUNiLHNCQUFjO1lBQ2Qsb0JBQWE7WUFDYixxQ0FBZ0I7U0FDakI7UUFDRCxTQUFTLEVBQUUsRUFBRTtRQUNiLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FDMUIsQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXREaXZpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgQWRkRW1wbG95ZWVDb21wb25lbnQgfSBmcm9tICcuL2FkZC1lbXBsb3llZS9hZGQtZW1wbG95ZWUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRWRpdEVtcGxveWVlQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LWVtcGxveWVlL2VkaXQtZW1wbG95ZWUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIERhc2hib2FyZENvbXBvbmVudCxcbiAgICBBZGRFbXBsb3llZUNvbXBvbmVudCxcbiAgICBFZGl0RW1wbG95ZWVDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRmxleExheW91dE1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=
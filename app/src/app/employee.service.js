"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const employees = [{
        email: "john@demo.com",
        firstName: 'John',
        lastName: 'Li',
        department: 'PI',
        phone: '12345',
        title: 'Full Stack Engineer',
        location: 'Dalian'
    },
    {
        email: "victor@demo.com",
        firstName: 'Victor',
        lastName: 'Lu',
        department: 'PI',
        phone: '23456',
        title: 'Architect',
        location: 'Dalian'
    }
];
let EmployeeService = class EmployeeService {
    constructor() { }
    /**
     * Get all employees
     */
    getEmployees() {
        return rxjs_1.of(employees);
    }
    /**
     * Add a new employee
     * @param employee
     */
    addEmployee(employee) {
        employees.push(employee);
        return rxjs_1.of(employee);
    }
    /**
     * Get employee by email
     * @return employee: Employee
     */
    getEmployee(email) {
        const results = employees.filter(e => e.email === email);
        if (results.length === 0) {
            return rxjs_1.throwError(new Error('No employee found with ' + email));
        }
        return rxjs_1.of(results[0]);
    }
    /**
     * Update employee information
     */
    updateEmployee(employee) {
        const index = this.getEmployeeIndex(employee.email);
        employees[index] = employee;
        return rxjs_1.of(employee);
    }
    /**
     * Find employee index in the employees array with email
     * @param email
     */
    getEmployeeIndex(email) {
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].email === email) {
                return i;
            }
        }
        return -1;
    }
    /**
     * Delete a employee by email
     * @param email
     */
    deleteEmployee(email) {
        const index = this.getEmployeeIndex(email);
        const employee = employees[index];
        if (index != -1) {
            employees.splice(index, 1);
        }
        return rxjs_1.of(employee);
    }
};
EmployeeService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVtcGxveWVlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0FBMkM7QUFFM0MsK0JBQTJEO0FBRTNELE1BQU0sU0FBUyxHQUFHLENBQUM7UUFDakIsS0FBSyxFQUFFLGVBQWU7UUFDdEIsU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLElBQUk7UUFDZCxVQUFVLEVBQUUsSUFBSTtRQUNoQixLQUFLLEVBQUUsT0FBTztRQUNkLEtBQUssRUFBRSxxQkFBcUI7UUFDNUIsUUFBUSxFQUFFLFFBQVE7S0FDbkI7SUFDRDtRQUNFLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLElBQUk7UUFDZCxVQUFVLEVBQUUsSUFBSTtRQUNoQixLQUFLLEVBQUUsT0FBTztRQUNkLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0NBQ0EsQ0FBQztBQUtGLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFHMUIsZ0JBQWUsQ0FBQztJQUdoQjs7T0FFRztJQUNILFlBQVk7UUFDVixPQUFPLFNBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLFFBQWtCO1FBRTVCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsT0FBTyxTQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNEOzs7T0FHRztJQUVGLFdBQVcsQ0FBQyxLQUFhO1FBRXhCLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQ3pELElBQUcsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxpQkFBVSxDQUFDLElBQUksS0FBSyxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDakU7UUFDRCxPQUFPLFNBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2QixDQUFDO0lBQ0Q7O09BRUc7SUFDSCxjQUFjLENBQUMsUUFBa0I7UUFFaEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzVCLE9BQU8sU0FBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXJCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0IsQ0FBQyxLQUFhO1FBQzVCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLEtBQWE7UUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNkLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxTQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUNILENBQUE7QUF2RVksZUFBZTtJQUgzQixpQkFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGVBQWUsQ0F1RTNCO0FBdkVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tICcuL21vZGVsL2VtcGxveWVlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IGVtcGxveWVlcyA9IFt7XG4gIGVtYWlsOiBcImpvaG5AZGVtby5jb21cIixcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnTGknLFxuICBkZXBhcnRtZW50OiAnUEknLCBcbiAgcGhvbmU6ICcxMjM0NScsIFxuICB0aXRsZTogJ0Z1bGwgU3RhY2sgRW5naW5lZXInLCBcbiAgbG9jYXRpb246ICdEYWxpYW4nIFxufSxcbntcbiAgZW1haWw6IFwidmljdG9yQGRlbW8uY29tXCIsXG4gIGZpcnN0TmFtZTogJ1ZpY3RvcicsXG4gIGxhc3ROYW1lOiAnTHUnLFxuICBkZXBhcnRtZW50OiAnUEknLCBcbiAgcGhvbmU6ICcyMzQ1NicsIFxuICB0aXRsZTogJ0FyY2hpdGVjdCcsIFxuICBsb2NhdGlvbjogJ0RhbGlhbicgXG59XG5dO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFbXBsb3llZVNlcnZpY2Uge1xuXG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG5cbiAgLyoqXG4gICAqIEdldCBhbGwgZW1wbG95ZWVzXG4gICAqL1xuICBnZXRFbXBsb3llZXMoKTogT2JzZXJ2YWJsZTxFbXBsb3llZVtdPiB7XG4gICAgcmV0dXJuIG9mKGVtcGxveWVlcyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGVtcGxveWVlXG4gICAqIEBwYXJhbSBlbXBsb3llZSBcbiAgICovXG4gIGFkZEVtcGxveWVlKGVtcGxveWVlOiBFbXBsb3llZSk6IE9ic2VydmFibGU8RW1wbG95ZWU+IHtcblxuICAgIGVtcGxveWVlcy5wdXNoKGVtcGxveWVlKTtcbiAgICByZXR1cm4gb2YoZW1wbG95ZWUpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgZW1wbG95ZWUgYnkgZW1haWxcbiAgICogQHJldHVybiBlbXBsb3llZTogRW1wbG95ZWVcbiAgICovXG5cbiAgIGdldEVtcGxveWVlKGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEVtcGxveWVlPiB7XG5cbiAgICBjb25zdCByZXN1bHRzID0gZW1wbG95ZWVzLmZpbHRlcihlID0+IGUuZW1haWwgPT09IGVtYWlsKTtcbiAgICBpZihyZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IobmV3IEVycm9yKCdObyBlbXBsb3llZSBmb3VuZCB3aXRoICcgKyBlbWFpbCkpO1xuICAgIH1cbiAgICByZXR1cm4gb2YocmVzdWx0c1swXSk7XG5cbiAgIH1cbiAgIC8qKlxuICAgICogVXBkYXRlIGVtcGxveWVlIGluZm9ybWF0aW9uXG4gICAgKi9cbiAgIHVwZGF0ZUVtcGxveWVlKGVtcGxveWVlOiBFbXBsb3llZSk6IE9ic2VydmFibGU8RW1wbG95ZWU+IHtcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRFbXBsb3llZUluZGV4KGVtcGxveWVlLmVtYWlsKTtcbiAgICBlbXBsb3llZXNbaW5kZXhdID0gZW1wbG95ZWU7XG4gICAgcmV0dXJuIG9mKGVtcGxveWVlKTtcblxuICAgfVxuXG4gICAvKipcbiAgICAqIEZpbmQgZW1wbG95ZWUgaW5kZXggaW4gdGhlIGVtcGxveWVlcyBhcnJheSB3aXRoIGVtYWlsXG4gICAgKiBAcGFyYW0gZW1haWwgXG4gICAgKi9cbiAgIGdldEVtcGxveWVlSW5kZXgoZW1haWw6IHN0cmluZyk6IG51bWJlciB7XG4gICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbXBsb3llZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICBpZihlbXBsb3llZXNbaV0uZW1haWwgPT09IGVtYWlsKSB7XG4gICAgICAgICByZXR1cm4gaTtcbiAgICAgICB9XG4gICAgIH1cbiAgICAgcmV0dXJuIC0xO1xuICAgfVxuICAgLyoqXG4gICAgKiBEZWxldGUgYSBlbXBsb3llZSBieSBlbWFpbFxuICAgICogQHBhcmFtIGVtYWlsXG4gICAgKi9cbiAgIGRlbGV0ZUVtcGxveWVlKGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEVtcGxveWVlPiB7XG4gICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRFbXBsb3llZUluZGV4KGVtYWlsKTtcbiAgICAgY29uc3QgZW1wbG95ZWUgPSBlbXBsb3llZXNbaW5kZXhdO1xuICAgICBpZihpbmRleCAhPSAtMSkge1xuICAgICAgIGVtcGxveWVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICB9XG4gICAgIHJldHVybiBvZihlbXBsb3llZSk7XG4gICB9XG59XG4iXX0=
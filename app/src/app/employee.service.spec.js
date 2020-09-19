"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const employee_service_1 = require("./employee.service");
describe('EmployeeService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(employee_service_1.EmployeeService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUuc2VydmljZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW1wbG95ZWUuc2VydmljZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWdEO0FBRWhELHlEQUFxRDtBQUVyRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLElBQUksT0FBd0IsQ0FBQztJQUU3QixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsa0NBQWUsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtRQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBFbXBsb3llZVNlcnZpY2UgfSBmcm9tICcuL2VtcGxveWVlLnNlcnZpY2UnO1xuXG5kZXNjcmliZSgnRW1wbG95ZWVTZXJ2aWNlJywgKCkgPT4ge1xuICBsZXQgc2VydmljZTogRW1wbG95ZWVTZXJ2aWNlO1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7fSk7XG4gICAgc2VydmljZSA9IFRlc3RCZWQuaW5qZWN0KEVtcGxveWVlU2VydmljZSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgYmUgY3JlYXRlZCcsICgpID0+IHtcbiAgICBleHBlY3Qoc2VydmljZSkudG9CZVRydXRoeSgpO1xuICB9KTtcbn0pO1xuIl19
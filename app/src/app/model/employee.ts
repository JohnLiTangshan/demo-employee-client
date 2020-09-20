export class Employee {
    email: string
    firstName: string
    lastName: string
    department: string 
    phone: string 
    title: string 
    location: string 
}
class BaseResult {
    isSuccess: boolean
    errorMessage: string
}
export class GetEmployeesResult extends BaseResult {
    result: Employee[]
}

export class EmployeeResult extends BaseResult {
    result: Employee 
}

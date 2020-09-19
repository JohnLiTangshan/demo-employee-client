import { browser, by, element, ElementFinder } from 'protractor';
import { Employee } from './employee';

export class AppPage {
  navigateTo(): Promise<unknown> {
    
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('.container h1')).getText() as Promise<string>;
  }

  toAddEmployee(): Promise<void> {
    return element(by.id('addEmployee')).click() as Promise<void> ;
  }

  addEmployeeBtn(): ElementFinder {
    return element(by.id('addEmployeeBtn'));
  }

  enterNewEmployeeInfo(employee: Employee) {
    const email = element(by.css('.add-employee .email'));
    const firstName = element(by.css('.add-employee .first-name'));
    const lastName = element(by.css('.add-employee .last-name'));
    const department = element(by.css('.add-employee .department'));
    const phone = element(by.css('.add-employee .phone'));
    const title = element(by.css('.add-employee .title'));
    const location = element(by.css('.add-employee .location'));

    email.sendKeys(employee.email);
    firstName.sendKeys(employee.firstName);
    lastName.sendKeys(employee.lastName);
    department.sendKeys(employee.department);
    phone.sendKeys(employee.phone);
    title.sendKeys(employee.title);
    location.sendKeys(employee.location);
  }

  updateEmployeeInfo(employee: Employee) {
    const firstName = element(by.css('.edit-employee .first-name'));
    const lastName = element(by.css('.edit-employee .last-name'));
    const department = element(by.css('.edit-employee .department'));
    const phone = element(by.css('.edit-employee .phone'));
    const title = element(by.css('.edit-employee .title'));
    const location = element(by.css('.edit-employee .location'));

    firstName.clear();
    lastName.clear();
    department.clear();
    phone.clear();
    title.clear();
    location.clear();

    firstName.sendKeys(employee.firstName);
    lastName.sendKeys(employee.lastName);
    department.sendKeys(employee.department);
    phone.sendKeys(employee.phone);
    title.sendKeys(employee.title);
    location.sendKeys(employee.location);
  }

  getUpdateEmployeeButton(): ElementFinder {
    return element(by.css('.edit-employee .update'));
  }

  getEmailInTable(email: string): ElementFinder {
    return element(by.id(email));
  }

  getFirstNameInTable(email: string): ElementFinder {
    return element(by.id(email + '-firstname'));
  }
  getDeleteEmployeeButton(email: string): ElementFinder {
    element(by.id(email + '-delete-menu')).click();
    return element(by.id(email + '-delete'));
  }

  getEditEmployeeButton(email: string): ElementFinder {
    return element(by.id(email + '-edit'));
  }

  
}

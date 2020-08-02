const Employee = require("../lib/Employee.js");
//const { exportAllDeclaration } = require("@babel/types");

test("Checks employee properties", () => {
    const employee = new Employee("Dave", "22", "dave@company.com")
    expect(employee.name).toEqual("Dave");
    expect(employee.id).toEqual("22");
    expect(employee.email).toEqual("dave@company.com");
})

test("checks employee methods .getName, .getId, .getEmail, and .getRole", ()=> {
    const employee = new Employee("Dave", "22", "dave@company.com")
    expect(employee.getName()).toEqual("Dave");
    expect(employee.getId()).toEqual("22");
    expect(employee.getEmail()).toEqual("dave@company.com");
    expect(employee.getRole()).toEqual("Employee");
})
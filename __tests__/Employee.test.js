const Employee = require("../lib/Employee.js");
//const { exportAllDeclaration } = require("@babel/types");

test("Checks to see if creating an employee works", () => {
    const employee = new Employee("Dave", "22", "dave@company.com")
    expect(employee.name).toEqual("Dave");
    expect(employee.id).toEqual("22");
    expect(employee.email).toEqual("dave@company.com");
})
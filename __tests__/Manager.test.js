const Manager = require("../lib/Manager.js");

test("Checks manager properties", () => {
    const manager = new Manager("Dave", "22", "dave@company.com", 21)
    expect(manager.name).toEqual("Dave");
    expect(manager.id).toEqual("22");
    expect(manager.email).toEqual("dave@company.com");
    expect(manager.officeNumber).toEqual(21);
})

test("checks manager methods .getName, .getId, .getEmail, and .getRole", () => {
    const manager = new Manager("Dave", "22", "dave@company.com", 21)
    expect(manager.getName()).toEqual("Dave");
    expect(manager.getId()).toEqual("22");
    expect(manager.getEmail()).toEqual("dave@company.com");
    expect(manager.getRole()).toEqual("Manager");
})
const Intern = require("../lib/Intern.js");

test("Checks intern properties", () => {
    const intern = new Intern("Dave", "22", "dave@company.com", "The U")
    expect(intern.name).toEqual("Dave");
    expect(intern.id).toEqual("22");
    expect(intern.email).toEqual("dave@company.com");
    expect(intern.school).toEqual("The U");
})

test("checks intern methods .getName, .getId, .getEmail, .getSchool, and .getRole", () => {
    const intern = new Intern("Dave", "22", "dave@company.com", "The U")
    expect(intern.getName()).toEqual("Dave");
    expect(intern.getId()).toEqual("22");
    expect(intern.getEmail()).toEqual("dave@company.com");
    expect(intern.getSchool()).toEqual("The U");
    expect(intern.getRole()).toEqual("Intern");
})
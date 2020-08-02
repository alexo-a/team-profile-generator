const Engineer = require("../lib/Engineer.js");

test("Checks engineer properties", () => {
    const engineer = new Engineer("Dave", "22", "dave@company.com", "larry-boy")
    expect(engineer.name).toEqual("Dave");
    expect(engineer.id).toEqual("22");
    expect(engineer.email).toEqual("dave@company.com");
    expect(engineer.github).toEqual("larry-boy");
})

test("checks engineer methods .getName, .getId, .getEmail, and .getRole", () => {
    const engineer = new Engineer("Dave", "22", "dave@company.com", "larry-boy")
    expect(engineer.getName()).toEqual("Dave");
    expect(engineer.getId()).toEqual("22");
    expect(engineer.getEmail()).toEqual("dave@company.com");
    expect(engineer.getGitHub()).toEqual("larry-boy");
    expect(engineer.getRole()).toEqual("Engineer");
})
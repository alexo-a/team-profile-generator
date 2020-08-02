const Employee = require("./Employee.js");
function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Engineer"
    this.github = github;
}

Engineer.prototype = Object.create(Employee.prototype);

Engineer.prototype.getGitHub = function () {
    return this.github;
}

Engineer.prototype.getRole = function () {
    return "Engineer";
}

module.exports = Engineer;
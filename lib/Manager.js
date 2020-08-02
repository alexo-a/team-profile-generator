const Employee = require("./Employee.js");
function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Manager"
    this.officeNumber = officeNumber;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
}

Manager.prototype.getRole = function () {
    return "Manager";
}

module.exports = Manager;
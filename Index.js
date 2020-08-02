console.log("Hello, World!");
var inquirer = require("inquirer");
var Manager = require("./lib/Manager.js");
var Engineer = require("./lib/Engineer.js");
var Intern = require("./lib/Intern.js");
const employees = [];
inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "Please enter the manager's name."
        },
        {
            type: "input",
            name: "managerID",
            message: "Please enter the manager's ID."
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Please enter the manager's email address."
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Please enter the manager's office number."
        }
    ])
    .then(managerAnswers => {
        console.log(managerAnswers);
        employees.push(new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber));
        addEmployees();
    })
    .catch(error => {
        if(error.isTtyError) {} 
        else {}
    });

addEmployees = function (){
    const queryToAdd = () => {
        inquirer.prompt([{
            choices: [
                {name: "Add Engineer", value: "addEngineer"},
                { name: "Add Intern", value: "addIntern" },
                { name: "Finish", value: "finish" }],
            name: "action",
            type: "list",
            message: "What would you like to do now?"
        }])
        .then(answers => {
            if(answers.action === "finish"){
                /*do something here*/
                console.log("Employees:");
                console.log(employees);
            } else {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Please enter the employee's name."
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "Please enter the employee's ID."
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "Please enter the employee's email address."
                    }
                ])
                .then(newAnswers => {

                    if (answers.action === "addEngineer") {
                        inquirer.prompt([{
                            name: "github",
                            type: "input",
                            message: "What is this engineer's GitHub username?"
                        }])
                        .then(answers => {
                            employees.push(new Engineer(newAnswers.name, newAnswers.id, newAnswers.email, answers.github));
                            queryToAdd();
                        })

                    }

                    if (answers.action === "addIntern") {
                        inquirer.prompt([{
                            name: "school",
                            type: "input",
                            message: "At what school is this intern enrolled?"
                        }])
                        .then(answers => {
                            employees.push(new Intern(newAnswers.name, newAnswers.id, newAnswers.email, answers.school));
                            queryToAdd();  
                        })
                    } 
                })


            }
        })
    }
    queryToAdd();
}

askInternQuestion = function (){

}


askENGQuestion = function(){

}

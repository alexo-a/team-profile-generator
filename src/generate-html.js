generateHTML = function (employeesList) {
    const employeesString = assembleEmployeesString(employeesList);
    return `
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>My Team</title>
</head>

<body>
    <h1 class="text-center bg-danger mx-auto p-5 w-100 h-25 text-white">My Team</h1>


    <div class="d-flex flex-row flex-wrap justify-content-around">
    ${employeesString}

        
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
</body>

</html>
  `;
}

assembleEmployeesString = function (employeesList) {
    let employeesString = "";
    employeesList.forEach( element => {
        let roleDependentLI = "";
        if (element.getRole() === "Manager") { roleDependentLI = `<li class="list-group-item">Office Number: ${element.getOfficeNumber()}</li>` };
        if (element.getRole() === "Engineer") { roleDependentLI = `<li class="list-group-item">GitHub: <a href="https://www.github.com/${element.getGitHub()}" target="_blank">${element.getGitHub()}</a></li>` };
        if (element.getRole() === "Intern") { roleDependentLI = `<li class="list-group-item">School: ${element.getSchool()}</li>` };
        
        employeesString += 
            `<div class="shadow-sm  mb-5 card m-3" style="width: 18rem;">
            <div class="card-header  bg-primary ">
                <h4 class="card-title text-white">${element.getName()}</h4>
                <h5 class="card-title bg-primary  text-white">${element.getRole()}</h5>
            </div>

            <div class="card-body">

                <ul class="list-group">
                    <li class="list-group-item">ID: ${element.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                    ${roleDependentLI}
                </ul>
            </div>
        </div>`
    })
    return employeesString;

}


module.exports = generateHTML;
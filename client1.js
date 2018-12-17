
let employeeArray = [];
let salary = 0;

// employee class constructor
class Employee {
    constructor(fName, lName, employeeID, jobTitle, annualSalary) {
        this.fName = fName;
        this.lName = lName;
        this.employeeID = employeeID;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    } // end constructor
} // end class

// jQueary ready function
// click action
$(document).ready(function () {
    console.log('jQueary is ready!');
    $('#submit').on('click', userInput);
    $('#submit').on('click', updateExpensis);

// function to make new Employee = user input
    function userInput() {
        let newEmp = new Employee($('.firstNameInput').val(),
            $('.lastNameInput').val(), $('.emplIDInput').val(),
            $('.empTitleInput').val(), $('.annualSalaryInput').val());

// push user info
        employeeArray.push(newEmp);
    }

});

// function to update salary
function updateExpensis() {
    //let totalSalary = 0;
    let outputElement = $('.tableBody');
    outputElement.empty();
    for (employee of employeeArray) {
        outputElement.append('<tr><td>' + employee.fName +
            '</td><td>' + employee.lName + '</td><td>' + employee.employeeID +
            '</td><td>' + employee.jobTitle + '</td><td>' +
            '$' + Number(employee.annualSalary).toFixed(2) + '</td><td>' +
            '<button class="deleteEmployeeButton">Delete</button>' + '</td></tr>');
        salary += Number(employee.annualSalary);
        console.log(salary);
       // $('#monthlySalary').append('<h4> Monthly Salary: $' + totalSalary.toFixed(2) + '</h4>');

    }

    // console.log(totalSalary);
    clearInput();
    updateSalary(salary);
}

// Clear inout fields after button click function
function clearInput() {
    $('.firstNameInput').val('');
    $('.lastNameInput').val('');
    $('.emplIDInput').val('');
    $('.empTitleInput').val('');
    $('.annualSalaryInput').val('');
    console.log('cleared input');
}

// update Salary function
function updateSalary() {
   // console.log('in Salary:', allSalary);
    let monthlySalary = salary / 12 ;
    let monthSal = $('#monthlySalary');
    monthSal.empty();
    monthSal.append('<h2> Monthly Salary: $' + monthlySalary.toFixed(2) + '</h2>');
    if (monthlySalary > 20000) {
        monthSal.css('background-color', 'red');
    }
}



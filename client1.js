let totalSalary = 0;
let employeeArray = [];

// employee class constructor
class Employee{
    constructor( fName, lName, employeeID, jobTitle, annualSalary ){
        this.fName = fName;
        this.lName = lName;
        this.employeeID = employeeID;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    } // end constructor
} // end class

$(document).ready(function() {
    console.log('jQueary is ready!')
    $('#submit').on('click', userInput )
    $('#submit').on('click', updateExpensis)

    function userInput(){
    let newEmp = new Employee( $('.firstNameInput').val(),
    $('.lastNameInput').val(), $('.emplIDInput').val(),
    $('.empTitleInput').val(), $('.annualSalaryInput').val() );

    employeeArray.push( newEmp );
    }

    $('#monthlySalar').append('<h4> Monthly Salary: $' + totalSalary.toFixed(2) + '</h4>');


         
  
});   

function updateExpensis(){
    let outputElement = $('.tableBody');
    outputElement.empty();
    for( employee of employeeArray ){
    outputElement.append('<tr><td>' + employee.fName +
     '</td><td>' + employee.lName + '</td><td>' + employee.employeeID +
      '</td><td>' + employee.jobTitle + '</td><td>' +
       '$' +  Number(employee.annualSalary).toFixed(2) + '</td><td>' +
        '<button class="deleteEmployeeButton">Delete</button>' + '</td></tr>') ;
        console.log(employeeArray);
        clearInput();

    }
}

function clearInput(){
    $('.firstNameInput').val('');
    $('.lastNameInput').val('');
    $('.emplIDInput').val('');
    $('.empTitleInput').val('');
    $('.annualSalaryInput').val('');
    console.log('cleared input');
}
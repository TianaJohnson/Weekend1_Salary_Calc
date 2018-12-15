 //...emplyees array...//
 let employees = [];

 //...employees class...//
class Employee{
    constructor( firstname, lastname, employID, empTitle, annualSalary ){
        this.firstname = fistName;
        this.lastname = lastName;
        this.employID = employID;
        this.empTitle = title;
        this.annualSalary = annualSalary;
    }

}

//...jQueary function setup...///
$(document).ready(function(){
     count = 0;

    $('#submit').on('click', submitClick );
    $('#submit').on('click', clearData );
    $('#removeContent').on('click', );
});

// submit click function... console logs count
function submitClick(){
    count += 1;
    
    console.log('click', count );

}
// Clear data from input fields after click
function clearData(){
    $('#firstNameInput').val('');
   // $('#lastNameInput').val('');
    //$('#emplIDInput').val('');
    //$('#empTitle').val('');
    //$('#annualSalaryInput').val('');
}

// remove line from table, may not work, not ready to mess with
// function removeCont(){
//    $('#removeContent').remove('#contentAdd');
// }

//new employee class function
function newEmpInfo( firstname, lastname, employID, empTitle, annualSalary){
    console.log( 'employee info:', firstname, lastname, employID, empTitle, annualSalary);
    employees.push( new Employee( firstname, lastname, employID, empTitle, annualSalary ) );
    return true;
    } // end employee class function

 function updatInfo(){
        let outputElement = $( '#contentAdd' );     
        for( let employee of employees ){
         $('#firstNameAddIn').append('<td>' + $firstNameInput + '</td>');
       
        }
    }
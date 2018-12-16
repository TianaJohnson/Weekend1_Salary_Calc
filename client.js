 //...emplyees array...//
 let employees = [];



//... jQueary function setup ...//... clicks ...//
$(document).ready(function() {
     count = 0;
    $('#submit').on('click', submitClick );
    $('#submit').on('click', clearData );
    //$('#submit').on('click', clickAddName );
    //$('#submit').on('click', newEmp );
    // $('#submit').on('click', updateInfo );
    $('#submit').on('click', fNameClick );
           
});

 // //  ... employees class ...//
// class Employee{
//     constructor( firstname, lastname, employID, empTitle, annualSalary ) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.employID = employID;
//         this.empTitle = empTitle;
//         this.annualSalary = annualSalary;
//     }
// }

//... submit click function ... console logs count ...// 
function submitClick(){
    count += 1;
    console.log('click', count );
}

function fNameClick(){
    console.log('still trying');
    let fName = $('.firstNameInput').val();
    let fNameAdd = $('.firstNameAdd');
    fNameAdd.empty();
    console.log ( fName ) ;
    $(fName).append( fNameAdd );

}
// function to append input info on the DOM
    // function clickAddName(){
    //     console.log('info recieved');
    //     let fName = $('.firstNameInput').val();
        // let lName = $('.lastNameInput').val();
        // let empId = $('.emplIDInput').val();
        // let empTitel = $('.empTitleInput').val();
        // let annSal = $('.annualSalaryInput').val();

        // $('.firstNameAdd').append('<tr><td>${fName}</td></tr>' );
        // $('.lastNameAdd').append('<tr><td>${lName}</td></tr>');
        // $('.empIDAdd').append('<tr><td>${empId}</td></tr>');
        // $('.empTitleAdd').append('<tr><td>${empTitel}</td></tr>');
        // $('.annSalAdd').append('<tr><td>${annSal}</td></tr>');
       
    //}// end submit click function

// function updateDom(){
//     $('#contentAdd').append()
// }

//... Clear data from input fields after click ...//
function clearData(){
    $('.firstNameInput').val(''),
    $('.lastNameInput').val(''),
    $('.emplIDInput').val(''),
    $('.empTitleInput').val(''),
    $('.annualSalaryInput').val('');
}// end clear data function

// function newEmp( firstname, lastname, employID, empTitle, annualSalary ){
//     console.log( 'Employee:', firstname, lastname, employID, empTitle, annualSalary );
//     employees.push( new Employee ( firstname, lastname, employID, empTitle, annualSalary  ) );
    
//}

// function updateInfo(){
//     let outputElement = $( '#contentAdd' );
//     outputElement.empty();
//     for( let employee of employees ){
//       outputElement.append( '<tr><td>' + employee.firstname + '</td>',
//       '<td>' + employee.lastname + '</td>',
//       '<td>' + employee.employID + '</td>',
//       '<td>' + employee.empTitle + '</td>',
//       '<td>' + employee.annualSalary + '</td>',
//       '<td><button ${#removeContent}>' + " X " + '</button> </td></tr>' );
//     }
// }

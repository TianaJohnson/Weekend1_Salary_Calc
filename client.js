 //...emplyees array...//
 let employees = [];

 // Employee Class constructor 
  class Employee{
    constructor( firstname, lastname, employID, empTitle, annualSalary ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.employID = employID;
        this.empTitle = empTitle;
        this.annualSalary = annualSalary;
    }
}
// create new employee from the class constructor and push into array
function newEmp( firstname, lastname, employID, empTitle, annualSalary ){
    console.log( 'Employee:', firstname, lastname, employID, empTitle, annualSalary );
    employees.push( new Employee ( $('.firstNameInput'),
    $('.lastNameInput'), $('.emplIDInput'),
     $('.empTitleInput'), $('.annualSalaryInput')) );
    console.log( employees );
}

// function clickAddName(){
//          newEmp ( $('.firstNameInput'),
//          $('.lastNameInput'), $('.emplIDInput'),
//           $('.empTitleInput'), $('.annualSalaryInput') );
// }

//  //user input function
//  function userInput() {
//     let firstName = $('#firstName').val();
//     let lastName = $('#lastName').val();
//     let empId = $('#empId').val();
//     let jobTitle = $('#jobTitle').val();
//     let annualSalary = $('#annualSalary').val();

    //add employee to array

    // newEmp = [firstName, lastName, empId, jobTitle, annualSalary];
    // employeeArray.push(newEmp);

//}//end userInput function


    //add new employee info to DOM
    // $('#submit').on('click', clickAddName )
    //     //monthlySalaryTotal () ;
      
    // });
    
    
    
    
    
    
    
    //end for loop
//  class Employee{
//     constructor( firstname, lastname, employID, empTitle, annualSalary ) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.employID = employID;
//         this.empTitle = empTitle;
//         this.annualSalary = annualSalary;
//     }
// }

//  function clickAddName(){
//     let newEmp = new Employee ( $('.firstNameInput'),
//      $('.lastNameInput'), $('.emplIDInput'),
//       $('.empTitleInput'), $('.annualSalaryInput') ); 
      

//         employees.push( newEmp );
//         console.log( employees );
    
//  }


// //... jQueary function setup ...//... clicks ...//
$(document).ready(function() {
     count = 0;
     $('#submit').on('click', newEmp )


//     $('#submit').on('click', submitClick );
//     $('#submit').on('click', clearData );
//     $('#submit').on('click', clickAddName );
//     //$('#submit').on('click', newEmp );
//     // $('#submit').on('click', updateInfo );
//     //$('#submit').on('click', fNameClick );
//     //$('#submit').on('click', newEmpInfo );
    
 });
// // function click counter
// function submitClick(){
//     count += 1;
//     console.log('click', count );
// }

//  // //  ... employees class ...//
// // class Employee{
// //     constructor( firstname, lastname, employID, empTitle, annualSalary ) {
// //         this.firstname = firstname;
// //         this.lastname = lastname;
// //         this.employID = employID;
// //         this.empTitle = empTitle;
// //         this.annualSalary = annualSalary;
// //     }
// // }







// // function fNameClick(){
// //     console.log('still trying');
// //     let fName = $('.firstNameInput').val();
// //     let fNameAdd = $('.firstNameAdd');
// //     fNameAdd.empty();
// //     console.log ( fName ) ;
// //     $(fName).append( fNameAdd );

// // }
// // function to append input info on the DOM
//     // function clickAddName(){
        
//     //     console.log('info recieved');
//     //     let fName = $('.firstNameInput').val();
//     //     let lName = $('.lastNameInput').val();
//     //     let empId = $('.emplIDInput').val();
//     //     let empTitel = $('.empTitleInput').val();
//     //     let annSal = $('.annualSalaryInput').val();
    
 

//     //     $('.firstNameAdd').append('<tr><td>' + employees.firstname + '</td></tr>' );
//     //     $('.lastNameAdd').append('<tr><td>' + employees.lastname + '</td></tr>');
//     //     $('.empIDAdd').append('<tr><td>' + employee.employID + '</td></tr>');
//     //     $('.empTitleAdd').append('<tr><td>' + employee.empTitle+ '</td></tr>');
//     //     $('.annSalAdd').append('<tr><td>' + employee.annualSalary + '</td></tr>');
       
//     // }// end submit click function

// // function updateDom(){
// //     $('#contentAdd').append()
// // }

// //... Clear data from input fields after click ...//
// function clearData(){
//     $('.firstNameInput').val(''),
//     $('.lastNameInput').val(''),
//     $('.emplIDInput').val(''),
//     $('.empTitleInput').val(''),
//     $('.annualSalaryInput').val('');
// }// end clear data function

// // function newEmp( firstname, lastname, employID, empTitle, annualSalary ){
// //     console.log( 'Employee:', firstname, lastname, employID, empTitle, annualSalary );
// //     employees.push( new Employee ( firstname, lastname, employID, empTitle, annualSalary  ) );
// //     console.log( employees );
// // }


// // function updateInfo(){
// //     let outputElement = $( '#contentAdd' );
// //     outputElement.empty();
// //     for( let employee of employees ){
// //       outputElement.append( '<tr><td>' + employee.firstname + '</td>',
// //       '<td>' + employee.lastname + '</td>',
// //       '<td>' + employee.employID + '</td>',
// //       '<td>' + employee.empTitle + '</td>',
// //       '<td>' + employee.annualSalary + '</td>',
// //       '<td><button ${#removeContent}>' + " X " + '</button> </td></tr>' );
// //     }
// // }

// // function newEmpInfo (){
// //     clickAddName();
// //     newEmp( $('.firstNameInput').val(),
// //  $('.lastNameInput').val(), $('.emplIDInput').val(),
// //   $('.empTitleInput').val(),$('.annualSalaryInput').val());
// // }






// // console.log('info recieved');
// // let fName = $('.firstNameInput').val();
// // let elNam = $('.lastNameInput').val();
// // let empId = $('.emplIDInput').val();
// // let empTitel = $('.empTitleInput').val();
// // let annSal = $('.annualSalaryInput').val();
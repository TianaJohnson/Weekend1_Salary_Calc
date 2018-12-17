
// //... jQueary function setup ...//... clicks ...//
$(document).ready(function() {
    console.log('jQueary is ready!')
     count = 0;
     let employeeArray = [];

// On Click actions
     //$('#submit').on('click', userInput )
     //$('#submit').on('click', clearInput)
     $('#submit').on('click', toDom )
        

// userInput function
// to take input info and push it into an array for safe keeping
     function userInput(){
         
        let firstName = $('.firstNameInput').val();
        let lastName = $('.lastNameInput').val();
        let empId = $('.emplIDInput').val();
        let jobTitle = $('.empTitleInput').val();
        let annualSalary = $('.annualSalaryInput').val();
console.log(' user input data');
        //add employee to array
        newEmp = [firstName, lastName, empId, jobTitle, annualSalary];
        employeeArray.push(newEmp);
        console.log( newEmp );
        console.log('new employee info:', employeeArray );
       
     }//end userInput function

//add new employee info to DOM
     function toDom(){
         userInput();
         clearInput();
        let outputText = '';
        for(let i = 0; i < employeeArray.length; i++){
        outputText = ("<tr><td>" + employeeArray[i][0] + "</td><td>" + employeeArray[i][1] + "</td><td class='id'>" + employeeArray[i][2] + "</td><td>" + employeeArray[i][3] + "</td><td>" +
        employeeArray[i][4] + "</td><td>" + '<button class="deleteEmployeeButton">Delete</button>' + "</td></tr>");
        console.log( 'should be on the dom' )
        }
        $('.tableBody').append( outputText );
        console.log('okay, whats up?')
    }
    
    function clearInput(){
        $('.firstNameInput').val('');
        $('.lastNameInput').val('');
        $('.emplIDInput').val('');
        $('.empTitleInput').val('');
        $('.annualSalaryInput').val('');
        console.log('cleared input');
    }
});


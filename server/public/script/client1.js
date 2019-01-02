
//let employeeArray = [];
let salary = 0;
const monthsInYear = 12;
const maxMonthlySal = 20000;

// //employee class constructor
// class Employee {
//     constructor(fName, lName, employeeID, jobTitle, annualSalary) {
//         this.fName = fName;
//         this.lName = lName;
//         this.employeeID = employeeID;
//         this.jobTitle = jobTitle;
//         this.annualSalary = annualSalary;
//     } // end constructor
// } // end class

// jQueary ready function
// click action
$(document).ready(function () {
    console.log('jQueary is ready!');
    $('#submit').on('click', serverInfo, console.log('Send to server') );
    $('#submit').on('click', updateExpensis, console.log(' recieved from server') );
    // $('.tableBody').on('click', '.deleteEmployeeButton', deleteEmployee )

    // send to server
    function serverInfo() {
        const arrayInput = {
            fName: $('#firstNameInput').val(),
            lName: $('#lastNameInput').val(),
            employeeID: $('#emplIDInput').val(),
            jobTitle: $('#empTitleInput').val(),
            annualSalary: $('#annualSalaryInput').val()
        }
        console.log(arrayInput);

        $.ajax({
            method: 'POST',
            url: '/employee-info',
            data: arrayInput
        }).then(function (response) {
            console.log(response);
            console.log('In Post');
            updateExpensis();      // retrieving info from server
        });
    }


    //function to make new Employee = user input / set values
    // function userInput() {
    //     let newEmp = new Employee($('#firstNameInput').val(),
    //         $('#lastNameInput').val(), $('#emplIDInput').val(),
    //         $('#empTitleInput').val(), $('#annualSalaryInput').val());

    //     // push user info
    //     employeeArray.push(newEmp);
    // }



    // function to update salary

    function updateExpensis() {
        $.ajax({
            method: 'GET',
            url: '/employee-info'
        }).then(function (response) {
            let employeeArray = response;
            //let totalSalary = 0;
            let outputElement = $('.tableBody');
            outputElement.empty();
            for (employee of employeeArray) {
                outputElement.append(`<tr>
                                    <td>${employee.fName}</td>
                                    <td>${employee.lName}</td>
                                    <td>${employee.employeeID}</td>
                                    <td>${employee.jobTitle}</td>
                                    <td>$` + Number(employee.annualSalary).toFixed(2) + `</td>
                                    <td><button class="deleteEmployeeButton">Delete</button></td>
                                    </tr>`);
                salary += Number(employee.annualSalary);
                console.log(salary);
                // $('#monthlySalary').append('<h4> Monthly Salary: $' + totalSalary.toFixed(2) + '</h4>');

            }

            // console.log(totalSalary);
            clearInput();
            updateSalary(salary);
        });

    }


    // Clear inout fields after button click function
    function clearInput() {
        $('#firstNameInput').val('');
        $('#lastNameInput').val('');
        $('#emplIDInput').val('');
        $('#empTitleInput').val('');
        $('#annualSalaryInput').val('');
        console.log('cleared input');
    }

    // update Salary function
    function updateSalary() {
        // console.log('in Salary:', allSalary);
        let monthlySalary = salary / monthsInYear;
        let monthSal = $('#monthlySalary');
        monthSal.empty();
        monthSal.append('<h2> Monthly Salary: $' + monthlySalary.toFixed(2) + '</h2>');
        if (monthlySalary > maxMonthlySal) {
            monthSal.css('background-color', 'red');
        }
    }

    // function deleteEmployee(){
    //     let deleteEmpSal = $(this).parent().prev().prev().text();
    //     salary -= Number(employee.deleteEmployee) / 12;
    //     $('#monthlySalary').html(salary);

    //     $(this).parent().parent().remove();

    // }
});
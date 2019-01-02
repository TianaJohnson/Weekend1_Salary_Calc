Create a page that takes employee salarys and updates a total salary to keep trac of expensis.

[-]- Create HTML page with:
    [-]- Heading relating to " Salary Calculator".
    [-]- input fields:
       [-]- First Name
       [-]- Last Name
       [-]- Employee iD
       [-]- Employee Job title
       [-]- Employees annual salary
    [-]- Submit Button for input fields
    [-]- Output that adds together the annual salary of all emplyees inputed 
    [-]- Input information displaid on to a table on the DOM

[-]- jQueary/ js liknked to HTML
    [-] functions to take info from input fields, push into an array, display on DOM and add up annual salary totals.
        [-]- on'Click' functions to make must of the functions work when a botton is clicked.
        [-]- creat and array and push input field info into it.
        [|]- create a button that when clicked will delet a row from the table 
            [|]- when a line is deleted it suptract the annual salary from overall total.

    Updated for Winter Break


    [/]-First type npm install and npm start. You should see a client side implementation of the Salary Calculator appear on http://localhost:5000.

    NOTE: If you get an address in use error with 5000, try changing the port in the server.js file and re-running with npm start.

    The delete functionality has been removed from this project, we'll come back to that after break. You're welcome to give it a try but it's not required.

    Tasks
    [/]Move the array to the server
    [/]Make a POST request to send the new employee to the server
    [/]Make a GET request to retrieve the list of employees from the server
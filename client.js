$(document).ready(function(){
     count = 0;

    $('#submit').on('click', submitClick );
});

function submitClick(){
    count += 1;
    console.log('click', count );

}

function handle(){
    // Validate form elements
var name = document.getElementById('username').value;
var phone = document.getElementById('phone').value;
var email = document.getElementById('email').value;
var address = document.getElementById('password').value;

    // event.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const zipCodePattern = /^\d{5}$/;
    let valid = true;
    //null, work
    console.log(name);

    //handling emmty inputs
    if (name=="") {
        alert('Field cannot be null');
        document.getElementById('name').style.backgroundColor = 'red';
        document.getElementById('name').focus();
        valid = false;
    }
    if (phone=="") {
        alert('Field cannot be null');
        document.getElementById('tel').style.backgroundColor = 'red';
        document.getElementById('tel').focus();
        valid = false;
    }
    if (email=="") {
        alert('Field cannot be null');
        document.getElementById('email').style.backgroundColor = 'red';
        document.getElementById('email').focus();
        valid = false;
    }
    if (address=="") {
        alert('Field cannot be null');
        document.getElementById('zip').style.backgroundColor = 'red';
        document.getElementById('zip').focus();
        valid = false;
    }


    //email procedure
    if (!email.match(emailPattern)) {
        alert('Email address is not valid.');
        document.getElementById('email').style.backgroundColor = 'red';
        document.getElementById('email').focus();
        valid = false;
    }
    //phone
    if (!phone.match(/^\d{10}$/)) {
        alert('Please enter a valid 10-digit phone number.');
        document.getElementById('tel').style.backgroundColor = 'red';
        document.getElementById('tel').focus();
        valid = false;
    }

    // var date = new Date();
    // if (valid) {
    //     document.open();
    //     document.write("<html><head><link rel='stylesheet' type='text/css' href='index.css'></head><body><center>");
    //     document.write("<h1 class=main2>Receipt</h1>");
    //     document.write("<h2>"+date+"</h2>");
    //     document.write("<h2>Welcome "+name+"</h2>");
    //     document.write("<h2>phone: "+phone+"</h2>");
    //     document.write("<h2>email: "+email+"</h2>");

    //     document.write("<h2>Hope you like this website</h2></center>");
    //     // output the new conetnt

    //     document.write("<p><a href='index.html'> go back to main page </a>");

    //     document.write("</body></html>");
    // }
}

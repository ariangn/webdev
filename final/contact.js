
function handle(){
    // Validate form elements
    
//Making variables using getElementById
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var message = document.getElementById('message').value;


    //handling blank names
    if (name=="") {
        alert('Field cannot be null');
        document.getElementById('name').style.backgroundColor = 'red';
        document.getElementById('name').focus();
        valid = false;
    }

    //handling blank emails
    if (email=="") {
        alert('Field cannot be null');
        document.getElementById('email').style.backgroundColor = 'red';
        document.getElementById('email').focus();
        valid = false;
    }
    //handling blank message
    if (message=="") {
        alert('Field cannot be null');
        document.getElementById('zip').style.backgroundColor = 'red';
        document.getElementById('zip').focus();
        valid = false;
    }


    //email
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

    //making date object
    var date = new Date();
    //printing the output
    if (valid) {
        document.open();
        //make a new doc
        //print content
        document.write("<html><head><link rel='stylesheet' type='text/css' href='index.css'></head><body><center>");
        document.write("<div class = 'main2'><h1 class=main2>Receipt</h1>");
        document.write("<h2>"+date+"</h2>");
        document.write("<h2>"+name+"</h2>");
        document.write("<h2>email: "+email+"</h2>");
        document.write("<h2>zip:"+message+"</h2>");
    
        document.write("<h2>Quantity of Product 1: "+quant1.value+"</h2>");
        document.write("<h2>subtotal of Product 1: "+parseFloat(quant1.value)*6.66+"</h2>");
        document.write("<h2>Quantity of Product 2: "+quant2.value+"</h2>");
        document.write("<h2>subtotal of Product 2: "+parseFloat(quant2.value)*9.66+"</h2>");
        document.write("<h2>Quantity of Product 3: "+quant3.value+"</h2>");
        document.write("<h2>subtotal of Product 3: "+parseFloat(quant2.value)*9.99+"</h2>");
        document.write("<h2>Grand total: "+totalAmount+"</h2>");
        document.write("<h2>You have used credit card of: "+creditlay+"</h2></center></div>");
        // output the new conetnt

        document.write("<p><a href='products.html'> go back to main page </a>");

        document.write("</body></html>");
    }
}

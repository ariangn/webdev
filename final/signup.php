<?php
// get values from form
$name = $_POST["username"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$psw = $_POST["password"];

// create line to store all values
$line= $name.":".$psw.":".$email.":".$phone."\n";
// open the file to store data in with append operation 
$filea = fopen("user.txt","a+")or die("Unable to open file!");



// write/store line into file
fwrite($filea, $line);

// close the file
fclose($filea);

echo "<html><head><link rel='stylesheet' type='text/css' href='index.css'></head><body><center><div class = 'main'>Thank you for your registration!<p></div><a href='index.html'> go back to main page </a></body></html>";
?>
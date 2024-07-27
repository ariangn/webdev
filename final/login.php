<?php 
$name = $_POST["username"];
// $email = $_POST["email"];
// $phone = $_POST["phone"];
$psw = $_POST["password"];


// open the file users.txt

$file = fopen("user.txt", "r");
$flag = FALSE;

// read one line at time from file and assign each line to a string called $line
while(!(feof($file)))
{

// get one line at time from file
$line= fgets($file);

// remove end of line character from line using rtrim function
$line = rtrim($line);

// split string on : to get each field separatly and put values in an array

$info = explode(":", $line);

// check for a match between what user inputted and whats in file

if (($name == $info[0] ) && ( $psw == $info[1] ))
{
// if there is a match set flag to true and exit
$flag = TRUE;
break;
}

}

// check to see if there is a match flag = TRUE 

if ($flag)
	{
	echo "<html><head><link rel='stylesheet' type='text/css' href='index.css'></head><body><center><div class = 'main'>Welcome back!".$name."<p></div><a href='user.html'>go to user's main page</a><br><a href='index.html'> go back to main page </a></body></html>";

	}

else
{		
	echo "<html><head><link rel='stylesheet' type='text/css' href='index.css'></head><body><center><div class = 'main'>Can't enter site because of wrong username and password<p></div><a href='index.html'> go back to main page </a></body></html>";

}

?>
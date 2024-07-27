<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $contactMethod = htmlspecialchars($_POST['contact-method']);
    $message = htmlspecialchars($_POST['message']);
    $to = "arianakamura@gmail.com";
    $subject = "Contact Form Submission from $name";

    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Preferred Contact Method: $contactMethod\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<p>Thank you for your message! I will reply as quickly as possible.</p>";
    } else {
        echo "<p>Sorry, something went wrong. Please try again.</p>";
    }
}
?>

<?php
// Enable error reporting for debugging purposes
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);

// Function to sanitize form data to prevent injection attacks
function sanitizeFormData($formFields) {
    $sanitizedData = [];
    foreach ($formFields as $field) {
        // Check if the index exists before accessing it, trim and htmlspecialchars to sanitize input
        $sanitizedData[$field] = isset($_POST[$field]) ? trim(htmlspecialchars($_POST[$field])) : null;
    }
    return $sanitizedData;
}

// Function to write data to a file
function writeToFile($filename, $data) {
    // Open the file in append mode, write data with a comma-separated format and a newline
    $file = fopen($filename, 'a');
    fwrite($file, implode(',', $data) . PHP_EOL);
    fclose($file);
}

// List of form fields to be sanitized
$formFields = ['name', 'address', 'zip', 'phone', 'email', 'payment', 'cc', 'exp', 'cvv'];

// Sanitize form data
$sanitizedData = sanitizeFormData($formFields);

// Write sanitized data to a file
writeToFile('clients.txt', $sanitizedData);

// Mask the credit card number for security
$maskedCardNumber = str_repeat('x', strlen($sanitizedData['cc']) - 4) . substr($sanitizedData['cc'], -4);

// HTML content for the receipt
$receipt = '<!DOCTYPE html>';
$receipt .= '<html>';
$receipt .= '<head>';
$receipt .= '<title>Receipt</title>';
$receipt .= '<link rel="stylesheet" href="index.css">';
$receipt .= '</head>';
$receipt .= '<body>';
$receipt .= '<div class="receipt">';
$receipt .= '<h2>Thank you for your purchase!</h2>';

// Display customer information
$receipt .= '<h3>Customer Information:</h3>';
$receipt .= '<p>Name: ' . $sanitizedData['name'] . '</p>';
$receipt .= '<p>Address: ' . $sanitizedData['address'] . '</p>';
$receipt .= '<p>Zip: ' . $sanitizedData['zip'] . '</p>';
$receipt .= '<p>Phone: ' . $sanitizedData['phone'] . '</p>';
$receipt .= '<p>Email: ' . $sanitizedData['email'] . '</p> <br>';

// Display payment information with masked card number
$receipt .= '<h3>Payment Information:</h3>';
$receipt .= '<p>Card Number: ' . $maskedCardNumber . '</p>';
$receipt .= '<p>Expiration Date: ' . $sanitizedData['exp'] . '</p>';
$receipt .= '<p>CVV: ' . $sanitizedData['cvv'] . '</p> <br>';

// Display order summary using data from the form
$receipt .= '<h3>Order Summary:</h3>';
$receipt .= '<p>Pac-Man: ' . $_POST['pacman'] . ' items</p>';
$receipt .= '<p>Monopoly: ' . $_POST['monopoly'] . ' items</p>';
$receipt .= '<p>Tetris: ' . $_POST['tetris'] . ' items</p>';
$receipt .= '<p>Subtotal: $' . $_POST['total'] . '</p>';
$receipt .= '<p>Tax: $' . $_POST['tax'] . '</p>';
$receipt .= '<p>Shipping: $' . $_POST['fee'] . '</p>';
$receipt .= '<p>Total: $' . $_POST['grandTotal'] . '</p>';
$receipt .= '</div>';
$receipt .= '</body>';
$receipt .= '</html>';

// Display the receipt
echo $receipt;
?>

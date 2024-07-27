<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="onlinestore.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap" rel="stylesheet">

        <title>receipt</title>

    </head>

    <body>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = $_POST["name"];
            $email = $_POST["email"];
            $product = $_POST["product"];
            $quantity = intval($_POST["quantity"]);

            $prices = [
                "espresso" => 2.50,
                "latte" => 4.00,
                "cappuccino" => 3.50
            ];

            $productPrice = isset($prices[$product]) ? $prices[$product] : 0;
            $total = $quantity * $productPrice;

            echo "<div class='receipt:'>";
            echo "<h3>receipt</h3>";
            echo "<p><strong>Name:</strong> $name</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Coffee:</strong> $product</p>";
            echo "<p><strong>Quantity:</strong> $quantity</p>";
            echo "<p><strong>Total: </strong> $$total</p>";
            echo "</div>";
        }
        ?>

    </body>
</html>

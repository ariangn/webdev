<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>calculator</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="add.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap" rel="stylesheet">

    </head>

    <body>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
         
            $firstNumber = floatval($_POST["firstNumber"]);
            $secondNumber = floatval($_POST["secondNumber"]);
            $operator = $_POST["operator"];

            switch ($operator) {
                case "+":
                    $result = $firstNumber + $secondNumber;
                    break;
                case "-":
                    $result = $firstNumber - $secondNumber;
                    break;
                case "*":
                    $result = $firstNumber * $secondNumber;
                    break;
                case "/":
                    // check for division by zero
                    if ($secondNumber != 0) {
                        $result = $firstNumber / $secondNumber;
                    } else {
                        $result = "undefined (division by zero)";
                    }
                    break;
                default:
                    $result = "Invalid operator";
            }

            echo "<p>$firstNumber $operator $secondNumber = $result</p>";
        }
        ?>

    </body>
</html>

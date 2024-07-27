<!DOCTYPE html>

<html lang="en">

    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mad Libs Story</title>
        <link rel="stylesheet" type="text/css" href="madlibs.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap" rel="stylesheet">

        <style>
            body {
                font-family: 'Quicksand', sans-serif;
                margin: 20px;
                border: none;
            }

            .madlibs-story {
                max-width: 600px;
                padding: 10px;
            }
        </style>
    </head>

    <body>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $adjective1 = $_POST["adjective1"];
            $adjective2 = $_POST["adjective2"];
            $noun1 = $_POST["noun1"];
            $verb1 = $_POST["verb1"];
            $noun2 = $_POST["noun2"];
            $number = $_POST["number"];
            $verb2 = $_POST["verb2"];
            $noun3 = $_POST["noun3"];

            $story = "The $adjective1 $noun1 $verb1 the $adjective2 house. There she saw a $noun2 $verb2 with $number $noun3.";

            echo "<div class='madlibs-story'><p>$story</p></div>";
        }
        ?>

    </body>
</html>

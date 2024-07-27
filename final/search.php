<?php
//displaying errors
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
?>

<!DOCTYPE html>

<html>

    <head>
        <link rel="stylesheet" href="index.css" />
        <title> GAME </title>
        <meta charset="utf-8">
        <style>
        .product-info {
            padding-left: 20px; 
            }
        </style>
    </head>


    <body>

        <?php
        //retrieve search item that was submitted
        $search = $_POST['search'];
    
    
        //open txt
        $file = fopen("products.txt", "r");

        $flag = FALSE;

        //go through the lines, looking at each
        while(!(feof($file)))
            {

            $line = fgets($file);
            $line = rtrim($line);

            $info = explode(":", $line);

            if ((strtolower($search)) == (strtolower($info[0])))
                {
                    //set true
                    $flag = TRUE;
                    break;

                }


            }
        //when true,
        if ($flag == TRUE)
        {
            //item was located
            print("<div class='product-info'> <h2> We have located these products based on your search! </h2> </div>");

            $count = 0;
            //printing each line
            foreach ($info as $value)
                {
                    print("<div class='product-info'> <li> $value  ");
                    if ($count == 2){
                        print("items </li> </div>");
                    }

                    else{

                        print("</li> </div>");
                    
                    }
                    
                    
                    $count = $count +1;
                    
                }
        }

        else
        {
            print("Item not located on website");

        }


        ?>


    </body




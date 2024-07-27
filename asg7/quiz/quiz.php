<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="quiz.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap" rel="stylesheet">

        <title> quiz results </title>

    </head>

    <body>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
     
        $correctAnswers = [
            "q1" => ["question" => "What plant is often used as a Christmas decoration?", "answer" => "Poinsettia"],
            "q2" => ["question" => "Which of Santa's reindeer is known for its red nose?", "answer" => "Rudolph"],
            "q3" => ["question" => "What is the traditional color of Santa Claus' suit?", "answer" => "Red"],
            "q4" => ["question" => "In the song 'Jingle Bells,' what type of sleigh is mentioned?", "answer" => "Open sleigh"],
            "q5" => ["question" => "What is the main ingredient in a traditional Christmas pudding?", "answer" => "Fruit"],
            "q6" => ["question" => "Which popular Christmas plant is known for its white berries?", "answer" => "Holly"],
            "q7" => ["question" => "In the song 'Silent Night,' what is described as 'round yon Virgin Mother and Child'?", "answer" => "Holy Infant"]
        ];

        $score = 0;

        echo "<div class='quiz-results'>";
        echo "<h3>quiz results</h3>";

        foreach ($correctAnswers as $questionID => $data) {
        
            $userAnswer = isset($_POST[$questionID]) ? $_POST[$questionID] : '';

            $isCorrect = ($userAnswer === $data["answer"]);
            if ($isCorrect) {
                $score += 1; 
            }

            echo "<p><strong>{$data['question']}:</strong><br>";
            echo "Your answer: $userAnswer";
            echo " - " . ($isCorrect ? "Correct" : "Incorrect, Correct Answer: {$data['answer']}") . "</p>";
        }

        $totalQuestions = count($correctAnswers);
        $totalScore = round(($score / $totalQuestions) * 100);
        echo "<p><strong>Total Score:</strong> $score out of $totalQuestions ($totalScore%)</p>";

        echo "</div>";
    }
    ?>
    </body>
</html>

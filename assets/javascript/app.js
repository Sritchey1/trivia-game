$(document).ready(function(){
    var count = 0;
    var time = 60;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var question = ["Every episode of Seinfeld contains an image or reference to what superhero?",
    "What is the phrase on the UFO poster in Fox Mulder's office in X-Files?", "What TV show is credited for a massive surge of applications for courses in forensic science?",  "What was the first network television show to use the F word?"];
    var answer = ["Superman", "I Want To Believe", "CSI", "SNL"];
    var firstChoice = ["Spiderman", "Trust No One", "CSI", "Soutpark"];
    var secondChoice = ["Superman", "I Want To Believe", "The Truth Is Out There", "NYPD Blue"];
    var thirdChoice = ["Plastic Man", "The Truth Is Out There", "CSI", "SNL"];
    var fourthChoice = ["Batman", "The Truth Is Out There", "Star Trek", "Mad TV"];

    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);
    
    
        $("#choice-holder-1").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-holder-2").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-holder-3").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#choice-holder-4").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "black");
        });
    }
    $("#choice-holder-1").on("click", checkAnswer) 
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)


    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }


    function checkGameEnd() {
        if(count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 31;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();


    function displayImage() {
        if(count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="https://media.giphy.com/media/bznNJlqAi4pBC/giphy.gif">');
        }
        else if(count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="https://media.giphy.com/media/26tnqe09gtJFfDGco/giphy.gif">');
        }
        else if(count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="https://media.giphy.com/media/gbpt5rGyGJsvm/giphy.gif">');
        }
        else if(count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="https://media.giphy.com/media/NeKB8ZR67TuV2/giphy.gif">');
        }
       

    }

 
    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start above to play again!");
    }


    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }


    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }


  $(".start").on("click", function() {
    startGame();
  });
});
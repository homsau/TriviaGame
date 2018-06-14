$(document).ready(function() {
    
    // Creates variables
    var questions = new Array();
        questions[0] = "Who is the main character?";
        questions[1] = "What is the name of the ship in Halo: CE";
        questions[2] = "Who is the first commander of the ship in Halo: CE";
        questions[3] = "Who is sent on a suicidal mission to stop Covenant rebels after he was stripped of his rank of Covenant Commander?";
        questions[4] = "Who are the Covenant's religious leaders.";
        questions[5] = "How many Halo Rings are There  in the Halo Universe?";
        questions[6] = "Who took the commanders Keyes's place after he was killed?";
        questions[7] = "Who killed the Prophet of Regret?";
        questions[8] = "Who killed the Prophet of Truth?";
        questions[9] = "Who killed the Prophet of Mercy?";
    var answers = new Array();
        answers [0] = "The Arbiter,Pickle Juice,Jacob Keyes,Master Chief,Sgt. Major Johnson".split(",");
        answers [1] = "Pillar of Autum,Forward until Dawn,Aegis Fate".split(",");
        answers [2] = "The General,Jacob Keyes,Miranda Keyes,Avery Johnson".split(",");
        answers [3] = "Tatarus,The Arbiter,The Prophet of truth".split(",");
        answers [4] = "The Prophets,The Hunters,The Brutes,The Jackals,The Elites".split(",");
        answers [5] = "5,1,7,9,13".split(",");
        answers [6] = "His daughter,Sgt. Johnson,Master Chief".split(",");
        answers [7] = "TMaster Chief,he Arbiter,Sgt. Johnson".split(",");
        answers [8] = "The Flood,The Arbiter,Master Chief,Sgt. Johnson".split(",");
        answers [9] = "Master Chief,Sgt. Johnson,The Arbiter,A flood spore".split(",");
    var correctAnswer = new Array();
        correctAnswer [0] = "Master Chief";
        correctAnswer [1] = "Pillar of Autum";
        correctAnswer [2] = "Jacob Keyes";
        correctAnswer [3] = "The Arbiter";
        correctAnswer [4] = "The Prophets";
        correctAnswer [5] = "7";
        correctAnswer [6] = "His daughter";
        correctAnswer [7] = "Master Chief";
        correctAnswer [8] = "The Arbiter";
        correctAnswer [9] = "A flood spore";
    
    var i = 0;
    var j;
    var k = 0;
    var timerLength;
    var questionCount = 0;
    var timerLength;
    var intervalId;
    var qRight = 0;
    var qWrong = 0;
    var qTime = 0;

    console.log(answers);

    $("#questions").text(questions[i]);
    for (j = 0; j < answers[i].length; j++) {
        $('#answers').append("<li><input name='answerRadio' type='radio'>" + answers[i][j] + "</input></li>");
    }
    $("#answers").on('click','li',function (){
        var checkAnswer = $(this).text();
        if (checkAnswer === correctAnswer[i]) {
            correct();
        } else {
            wrong();
        }
    });
    
    function nextQuestion() {
        i++;
        k++;
        tickTock();
        $("#answers").html("");;
        $("#questions").text(questions[i]);
        if (k === questions.length) {
            return;
        } else {
            for (j = 0; j < answers[i].length; j++) {
                $('#answers').append("<li><input name='answerRadio' type='radio'>" + answers[i][j] + "</input></li>");
            }
        }
    }
    
    function tickTock() {
        intervalId = setInterval(timerFunction, 1000);
        timerLength = 5;
        function timerFunction() {
            if (timerLength > 0) {
                timerLength--;
                $("#timer").text("<h2>" + timerLength + "</h2>");
            }
            else if (timerLength === 0) {
                //clearInterval(intervalId);
                timeUp();
            }
            $("#timer").html(timerLength);
        }
    }
    tickTock();

    function timeUp() {
        qTime++;
        clearInterval(intervalId);
        setTimeout(nextQuestion, 5000);
        $("#answers").html("<br>Time Up!<br><br>The Correct Answer Was " + correctAnswer[i]);
        console.log("qTime " + qTime);
    }
    function correct () {
        qRight++;
        setTimeout(nextQuestion, 5000);
        $("#answers").html("<br>Correct! - Nerd (:");
        console.log("qRight " + qRight);
    }
    function wrong() {
        qWrong++;
        setTimeout(nextQuestion, 5000);
        $("#answers").html("<br>Wrong!<br><br>The Correct Answer Was " + correctAnswer[i] + " - You Should Play More Halo");
        console.log("qWrong " + qWrong);
    }
});
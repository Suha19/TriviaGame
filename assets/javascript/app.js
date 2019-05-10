//Build array for questions and answers
let questions = [{
        question: "What is Rick's last name?",
        choiceA: "Jones",
        choiceB: "Sanchez",
        choiceC: "Johnson",
        choiceD: "Jonathan",
        correct: "Sanchez",
        imgsrc: "./assets/images/Q1.gif"
    },
    {
        question: "What is Rick's universe number?",
        choiceA: "C-137",
        choiceB: "C-143",
        choiceC: "C-175",
        choiceD: "C-123",
        correct: "C-137",
        imgsrc: "./assets/images/Q2.gif"
    },
    {
        question: "What item helps Rick travel between universes?",
        choiceA: "Portal Wand",
        choiceB: "Portal Disc",
        choiceC: "Portal Wall",
        choiceD: "Portal Gun",
        correct: "Portal Gun",
        imgsrc: "./assets/images/Q3.gif"
    },
    {
        question: "Rick and Morty appeared in the opening scene for what popular cartoon?",
        choiceA: "American Dad",
        choiceB: "Family Guy",
        choiceC: "Bob's Burgers",
        choiceD: "The Simpsons",
        correct: "The Simpsons",
        imgsrc: "./assets/images/Q4.gif"
    },
    {
        question: "What's the name of this happy-go-lucky blue colored creature?",
        choiceA: "Squanchy",
        choiceB: "Gear Head",
        choiceC: "Mr. Meeseeks",
        choiceD: "Fleeb",
        correct: "Mr. Meeseeks",
        imgsrc: "./assets/images/Q5.gif"
    },
    {
        question: "Rick and Morty was one of the first shows to premier a new episode on what social media platform?",
        choiceA: "Instagram",
        choiceB: "Facebook",
        choiceC: "Twitter",
        choiceD: "Tumblr",
        correct: "Instagram",
        imgsrc: "./assets/images/Q6.gif"
    },
    {
        question: "What is the name of Rick's half-avian half-human best friend?",
        choiceA: "Bird Person",
        choiceB: "Hawk Guy",
        choiceC: "Falcon Dude",
        choiceD: "Bird Man",
        correct: "Bird Person",
        imgsrc: "./assets/images/Q7.gif"
    },
    {
        question: "During Season 1 Episode 3, Morty is shrunk and placed into a dying hobo, where Rick has built an elaborate themepark. This episode spoofs what popular film?",
        choiceA: "The Matrix",
        choiceB: "Star Wars",
        choiceC: "Jurassic Park",
        choiceD: "Back to the Future",
        correct: "Jurassic Park",
        imgsrc: "./assets/images/Q8.gif"
    },
    {
        question: "What does Bird Person say Rick's catchphrase 'Wubba Lubba Dub Dub' means?",
        choiceA: "I'm the greatest that ever lived!",
        choiceB: "Let's get this party started!",
        choiceC: "I am in great pain, please help me.",
        choiceD: "Whatever will be, will be.",
        correct: "I am in great pain, please help me.",
        imgsrc: "./assets/images/Q9.gif"
    },
    {
        question: "Full in the blank 'In the third episode of the third season Rick turns himself into a _____ in the garage'",
        choiceA: "Car",
        choiceB: "Stick",
        choiceC: "invisible wall",
        choiceD: "Pickle",
        correct: "Pickle",
        imgsrc: "./assets/images/Q10.gif"
    }
]

//Declare my variables
const lastQindex = questions.length - 1;
let currentQindex = 0;
let correctAnswer = 0;
let incorrectAnswer = 0;
let noAnswer = 0;
var intervalId;
var count;



//start button function 
$("#start").on("click", startQuiz);
$(".btn").on('click', function () {
    //get clicked radio button value
    let userAnswer = $('input[name=choice]:checked').val();
    checkAnswer(userAnswer)
})

//Set timer for each question    
function timeStart() {
    let time = 5;
    count = setInterval(function () {
        $("#remainingTime").text("Time Remaining:" + time);
        time--;
        if (time === 0) {
            timeUp()
            clearInterval(count);
            nextQuestion();
        }
    }, 1000)
}

function timeUp() {
    $("#remainingTime").text("Time's Up!");
}


//  Start event
function startQuiz() {
    currentQuestion();
    //  nextQuestion();  
}

function startOver() {
    startQuiz();
    nextQuestion();
}

function nextQuestion() {

    $("#image-wrapper").empty();
    $("#answerType").empty();
    currentQindex++;
    if (currentQindex > lastQindex) {
        donePlay();
    } else {
        currentQuestion();
    }

}

function donePlay() {
    $("#correctAnswer").text("Correct Answers : " + correctAnswer);
    $("#incorrectAnswer").text("Incorrect Answers : " + incorrectAnswer);
    $("#noAnswer").text("Missed Answers : " + noAnswer);
    clearPage();
}


// this function is to display the question and choices
function currentQuestion() {
    timeStart();
    let q = questions[currentQindex];
    console.log(q);
    $("#question").text(q.question);
    $("input#A").val(q.choiceA).prop('checked', false);
    $("label#A").text(q.choiceA);
    $("input#B").val(q.choiceB).prop('checked', false);
    $("label#B").text(q.choiceB);
    $("input#C").val(q.choiceC).prop('checked', false);
    $("label#C").text(q.choiceC);
    $("input#D").val(q.choiceD).prop('checked', false);
    $("label#D").text(q.choiceD);
}

// Function is to check if the user's answer if right or wrong, pass it to the next question, and display the results
function checkAnswer(choice) {
    console.log(choice)
    let a = questions[currentQindex];
    console.log(a.imgsrc)
    if (choice === a.correct) {
        console.log("right");
        $("#answerType").text("Correct!");
        correctAnswer++;
        console.log(correctAnswer);
        $("#image-wrapper").append("<img src=" + a.imgsrc + "  />");

    } else if (choice !== a.correct) {
        console.log("wrong")
        $("#answerType").text("Incorrect!");
        incorrectAnswer++;
        console.log(incorrectAnswer);
        $("#image-wrapper").append("<img src=" + a.imgsrc + "  />");

    } else if ((choice === null) && (time === 0)) {
        console.log("You did not answer the question!!!");
        $("#noAnswer").text("You did not answer the question!!!");
        noAnswer++;
        $("#image-wrapper").append("<img src=" + a.imgsrc + "  />");

    }


}


function clearPage() {
    $('.container').empty();
    $('#remainingTime').empty();
    $('#image-wrapper').empty();
}
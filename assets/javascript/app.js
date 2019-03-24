$(document).ready(function() {

    //Build array for questions and answers
    let questions = [
        {
            question : "What is Rick's last name?" ,
            choiceA : "Jones",
            choiceB : "Sanchez",
            choiceC : "Johnson",
            choiceD : "Jonathan",
            correct : "B",
            imgsrc : "./assets/images/Q1.gif"
        },
        {
            question : "What is Rick's universe number?" ,
            choiceA : "C-137",
            choiceB : "C-143",
            choiceC : "C-175",
            choiceD : "C-123",
            correct : "A",
            imgsrc : "./assets/images/Q2.gif"
        },
        {
            question : "What item helps Rick travel between universes?",
            choiceA : "Portal Wand",
            choiceB : "Portal Disc",
            choiceC : "Portal Wall",
            choiceD : "Portal Gun",
            correct : "D",
            imgsrc : "./assets/images/Q3.gif"
        },
        {
            question : "Rick and Morty appeared in the opening scene for what popular cartoon?",
            choiceA : "American Dad",
            choiceB : "Family Guy",
            choiceC : "Bob's Burgers",
            choiceD : "The Simpsons",
            correct : "D",
            imgsrc : "./assets/images/Q4.gif"
        },
        {
            question : "What's the name of this happy-go-lucky blue colored creature?",
            choiceA : "Squanchy",
            choiceB : "Gear Head",
            choiceC : "Mr. Meeseeks",
            choiceD : "Fleeb",
            correct : "C",
            imgsrc : "./assets/images/Q5.gif"
        },
        {
            question : "Rick and Morty was one of the first shows to premier a new episode on what social media platform?",
            choiceA : "Instagram",
            choiceB : "Facebook",
            choiceC : "Twitter",
            choiceD : "Tumblr",
            correct : "A",
            imgsrc : "./assets/images/Q6.gif"
        },
        {
            question : "What is the name of Rick's half-avian half-human best friend?",
            choiceA : "Bird Person",
            choiceB : "Hawk Guy",
            choiceC : "Falcon Dude",
            choiceD : "Bird Man",
            correct : "A",
            imgsrc : "./assets/images/Q7.gif"
        },
        {
            question : "During Season 1 Episode 3, Morty is shrunk and placed into a dying hobo, where Rick has built an elaborate themepark. This episode spoofs what popular film?",
            choiceA : "The Matrix",
            choiceB : "Star Wars",
            choiceC : "Jurassic Park",
            choiceD : "Back to the Future",
            correct : "C",
            imgsrc : "./assets/images/Q8.gif"
        },
        {
            question : "What does Bird Person say Rick's catchphrase 'Wubba Lubba Dub Dub' means?",
            choiceA : "I'm the greatest that ever lived!",
            choiceB : "Let's get this party started!",
            choiceC : "I am in great pain, please help me.",
            choiceD : "Whatever will be, will be.",
            correct : "C",
            imgsrc : "./assets/images/Q9.gif"
        },
        {
            question : "Full in the blank 'In the third episode of the third season Rick turns himself into a _____ in the garage'",
            choiceA : "Car",
            choiceB : "Stick",
            choiceC : "invisible wall",
            choiceD : "Pickle",
            correct : "C",
            imgsrc : "./assets/images/Q10.gif"
        }
    ]
    
    //Declare my variables
     const lastQidex = questions.length-1;
     const currentQindex =0;
     let score =0;
     
    //  Stare event
     $("#start").on("click",function(){
        console.log ( $(this) .startQuiz());
     });

     function startQuiz(){
         currentQuestion();
         checkAnswer();
          
    }
    // this function is to display my question and choices
    function currentQuestion(){
        const q = questions[currentQindex];
        $("#question").text(q.question);
        $("#A").append(q.choiceA);
        $("#B").append(q.choiceB);
        $("#C").append(q.choiceC);
        $("#D").append(q.choiceD);    
    }

    // this function is to check if the user's answer is right or wrong, pass it to the next question, and display the results
   function checkAnswer(answer){
            $( "#choice").on("click",function() { 
            const a = questions[currentQindex];
                if (answer === (a.correct)){
                Score++;   
                console.log (score)
            
                $("#answerType").text("Correct!");
                $("#myscores").html("<h3>" + Score +"</h3>");
                $("#image").append(a.imgsrc);
         }
         else{
                $("#answerType").text("Incorrect!");
                $("#image").append(a.imgsrc);   
         }  
        //  if(currentQindex<lastQidex){
        //      currentQuestion++;
             
        //  }  
        //  else{
        //      //clear my timer
                //display my score
    
        //  }
         
     
    });
    }
    });
    
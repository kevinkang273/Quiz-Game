$(document).ready(function () {
    $(".main-page").hide();


    // DOM Manipulation
    $(".start").click(function () {
        $(".start-page").hide();
        $(".start-page").next().show();

        showQuestion();


    });


    $(".next-question").click(function () {
        currentQuestion++;

        if (currentQuestion == 6) {

        } else {
            showQuestion();
        }
    });



    // Database
    let quizQuestions = [
        {
            question: 'What country has the highest life expectancy?',
            list: ['Korea', 'USA', 'Hong Kong', 'Russia'],
            answer: 'Hong Kong'
        },
        {
            question: 'What artist has the most streams on Spotify?',
            list: ['Selena Gomaz', 'Drake', 'Justin Bieber', 'Lady Gaga'],
            answer: 'Drake'
        },
        {
            question: 'What is the max length of a TikTok video?',
            list: ['10 minutes', '1 minute', '5 minutes', '60 seconds'],
            answer: '10 minutes'
        },
        {
            question: 'Aureolin is a shade of what color?',
            list: ['Yellow', 'Red', 'Green', 'Blue'],
            answer: 'Yellow'
        },
        {
            question: 'What game studio makes the Red Dead Redemption series?',
            list: ['EA Games', 'Ubisoft', 'Rockstar Games', 'Activision'],
            answer: 'Rockstar Games'
        },
        {
            question: 'Which planet in the Milky Way is the hottest?',
            list: ['Neptune', 'Pluto', 'Mars', 'Venus'],
            answer: 'Venus'
        },
        {
            question: 'What country has won the most World Cups?',
            list: ['Argentina', 'Germany', 'Brazil', 'USA'],
            answer: 'Brazil'
        },
    ]

    // Functions

    let currentQuestion = 0;
    let score = 0;
    let buttonClicked = false;


    function showQuestion() {
        let question = quizQuestions[currentQuestion];
        $('.questions').html(`<h1> ${question.question} <div class="button-container">
        <button class="answer" value="${question.list[0]}">${question.list[0]}</button>
        <button class="answer" value="${question.list[1]}">${question.list[1]}</button>
        <button class="answer" value="${question.list[2]}">${question.list[2]}</button>
        <button class="answer" value="${question.list[3]}">${question.list[3]}</button> </div>`);

        $(".questions button").click(function () {

            // showQuestion();


            checkAnswer(this);
            console.log(score);
            
            $(this).prop('disabled', true);
            hideOtherButtons(this);
        });
        

        console.log(quizQuestions[currentQuestion].answer);

    }



    function checkAnswer(button) {
        let out = $(button).val();

        let answer = quizQuestions[currentQuestion].answer;



        if (out == answer) {

            score++;

        } else {
         
        }



        console.log(out);


    }

    function hideOtherButtons(button) {
        $(".questions button").hide();
        $(button).show();
    }
});
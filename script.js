$( document ).ready(function() {
  // Good use of document ready to ensure DOM is loaded before your script runs
  // (also prevents global variables). ++
  var score = 0;

  for (var i=0; i < 6; i++) {
    // Good abstraction / modularization for the process of setting up the event listeners! ++
    setQuizListeners('question' + i, 'question' + (parseInt(i)+1));
  }

  $('input:radio[name=question5]').on('click', function(){
    tally();
  });
// Maybe save DOM elements to variables (ex: var restartButton = $('button.restart'))
// so that they can be more easily reused in the rest of your code
$('button.restart').on('click',function(){
 $('.question6').hide();
 $('.question1').show();
 score = 0;
 $('input:radio').prop('checked',false);
});

$('button.startgame').on('click',function(){
  $('.question1').show();
  $('.question0').hide();
})

  function tally(){
    var choice1 = $('input:radio[name=question1]:checked').val();
    var choice2 = $('input:radio[name=question2]:checked').val();
    var choice3 = $('input:radio[name=question3]:checked').val();
    var choice4 = $('input:radio[name=question4]:checked').val();
    var choice5 = $('input:radio[name=question5]:checked').val();
    if(choice1 === "Kill him but only with her bare hands"){
      score++;
    }
    if(choice2 === "Forget her birthday"){
      score++;
    }
    if(choice3 === "Wear a mask in public"){
      score++;
    }
    if(choice4 === "Be fat"){
      score++;
    }
    if(choice5 === "Philippines"){
      score++;
    }
    // Really good code formatting and functionality here. Very semantic and easy to read.
    $('#scoreboard').text('Lakitu says "You got '+ score +' out of 5 correct!"')
    // Maybe you could add a running scoreboard to the page so Lakitu can update me
    // on my score as I play the game
  }

  function setQuizListeners(currentInputName, nextInputName) {
    $('input:radio[name= ' +currentInputName+ ']').on('click', function(){
      $('.' + nextInputName).show();
      $('.' + currentInputName).hide();
    })
  }
  // I really like the automated triggering of the next question when the user selects
  // an answer. However, since all of your questions have the same number of answers,
  // I would challenge you to try and figure out how you could have the question text
  // and options for each question templated into ONE div in your HTML instead of
  // having to hard-code all of your questions into your HTML.

  // You could use some form of a data structure in your javascript to contain all
  // the questions and then use jQuery to template them into the html. Example:

  // var questions = [
  //   {
  //     id: 1,
  //     questionText: "Who is Canada's Prime Minister",
  //     options: [
  //       "Barack Obama",
  //       "Justin Trudeau",
  //       "Boris Yeltson"
  //     ]
  //     answer: "Justin Trudeau"
  //   },
  //   {
  //     id: 2,
  //     questionText: "What is the Capital of Turkey",
  //     options: [
  //       "Ankara",
  //       "Palmyra",
  //       "Istanbul"
  //     ]
  //     answer: "Istanbul"
  //   },
  // ]

// Overall solid javascript code here. You did a good job keeping your code semantic, DRY, and
// modular (mostly small, limited functions). However, part of that is due to the fact that
// your HTML contains a lot of hard-coded data. I encourage you to revisit how you could
// refactor it so that the data for the questions is in your javascript and you can
// have just ONE question display div that you reuse for displaying ALL the questions as
// a user progresses through the game. Really great job though, very impressed.


});

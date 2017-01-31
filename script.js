$( document ).ready(function() {
  var score = 0;

  for (var i=1; i < 5; i++) {
    setQuizListeners('question' + i, 'question' + (parseInt(i)+1));
  }

  $('input:radio[name=question5]').on('click', function(){
    tally();
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
    if(choice2 === "Muhammad"){
      score++;
    }
    if(choice3 === "Clocks"){
      score++;
    }
    if(choice4 === "An unkindness"){
      score++;
    }
    if(choice5 === "5 months"){
      score++;
    }

    $('#scoreboard').text('Lakitu says "You got '+ score +' out of 5 correct!"')
  }

  function setQuizListeners(currentInputName, nextInputName) {
    $('input:radio[name= ' +currentInputName+ ']').on('click', function(){
      $('.' + nextInputName).show();
      $('.' + currentInputName).hide();
    })
  }




});

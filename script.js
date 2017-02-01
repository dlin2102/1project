$( document ).ready(function() {

  var score = 0;

  for (var i=0; i < 6; i++) {
    setQuizListeners('question' + i, 'question' + (parseInt(i)+1));
  }

  $('input:radio[name=question5]').on('click', function(){
    tally();
  });

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

    $('#scoreboard').text('Lakitu says "You got '+ score +' out of 5 correct!"')
  }

  function setQuizListeners(currentInputName, nextInputName) {
    $('input:radio[name= ' +currentInputName+ ']').on('click', function(){
      $('.' + nextInputName).show();
      $('.' + currentInputName).hide();
    })
  }




});

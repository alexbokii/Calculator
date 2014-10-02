$(function() {
  var firstOperand = 0;
  var secondOperand = 0;
  var operator;

  $('#numbers li').on('click', function() {
    if (firstOperand === 0 && operator === undefined) {
      firstOperand = $(this).text();
      $('.workplace').text(firstOperand);
    }
    else if (firstOperand != 0 && operator === undefined) {
      firstOperand += $(this).text();
      $('.workplace').text(firstOperand);
    }
    else if(firstOperand != 0 && operator != undefined && secondOperand === 0) {
      secondOperand = $(this).text();
      $('.workplace').text(secondOperand);
    }
    else if(firstOperand != 0 && operator != undefined && secondOperand != 0) {
      secondOperand += $(this).text();
      $('.workplace').text(secondOperand);
    }
    console.log(firstOperand, secondOperand);
  });

  $("#operators li").on('click', function() {
    var operatorSign = $(this).text();
    operator = operatorSign;
    $('.workplace').text(operator);
    console.log(operator);
  });

  $("#count").on('click', calculate);

  function calculate() {
    console.log("I'm in calculate");
    var result;
    if(operator === "+") {
      result = parseInt(firstOperand) + parseInt(secondOperand);
    }
    else if (operator === "-") {
      result = parseInt(firstOperand) - parseInt(secondOperand);
    }
    else if (operator === "*") {
      result = parseInt(firstOperand) * parseInt(secondOperand);
    }
    else if (operator === "/") {
      result = parseInt(firstOperand) / parseInt(secondOperand);
    }
    $('.workplace').text(result);
    console.log(result);
  }
});
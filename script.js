$(function() {
  var firstOperand = 0;
  var secondOperand = 0;
  var operator = undefined;
  var operatorsArray = [];

  $('#numbers li').on('click', function() {
    setOperand($(this));
  });

  $("#operators li").on('click', function() {
    setOpeartor($(this));
  });

  $("#count").on('click', calculate);

  $("#clear-all").on('click', clearAll);

  function setOperand(el) {
    if (firstOperand === 0 && operator === undefined) {
      firstOperand = el.text();
      $('.workplace').text(firstOperand);
    }
    else if (firstOperand != 0 && operator === undefined) {
      firstOperand += el.text();
      $('.workplace').text(firstOperand);
    }
    else if(firstOperand != 0 && operator != undefined && secondOperand === 0) {
      secondOperand = el.text();
      $('.workplace').text(secondOperand);
    }
    else if(firstOperand != 0 && operator != undefined && secondOperand != 0) {
      secondOperand += el.text();
      $('.workplace').text(secondOperand);
    }
    console.log(firstOperand, secondOperand);
  }

  function setOpeartor(el) {
    var operatorSign = el.text();
    operator = operatorSign;
    if(operator === 'x2') {
      calculate();
    }
    else if (operator === '') {
      calculate();
    }
    else if (el.hasClass('sq-root') == true) {
      operator = "sq-r";
      calculate();
    }
    operatorsArray.push(operator);
    if(operatorsArray.length > 1) {
      calculate();
    }
  }

  function calculate() {
    console.log("Call calculate");
    var result;
    if(operator === "+") {
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
    }
    else if (operator === "-") {
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
    }
    else if (operator === "*") {
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
    }
    else if (operator === "/") {
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
    }
    else if (operator === "x2") {
      result = parseFloat(firstOperand) * parseFloat(firstOperand);
    }
    else if (operator === "&radic;") {
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
    }
    else if (operator === "sq-r") {
      var sqRoot = parseFloat(firstOperand); 
      for(var i = 2; i < 100; i++) {
        if (i * i === sqRoot) {
          result = i;
        }
      }
    }
    if (result % 1 != 0) {
      result = strip(result);
    }

    $('.workplace').text(result);
    makeResultFirstOperand(result);
  }

  function makeResultFirstOperand(num) {
    firstOperand = num;
    secondOperand = 0;
    operator = 0;
  } 

  function clearAll() {
    operatorsArray = [];
    firstOperand = 0;
    secondOperand = 0;
    operator = undefined;
    $('.workplace').text("0");
  }

  function strip(number) {
    return (parseFloat(number.toPrecision(12)));
}

  //implement point
});
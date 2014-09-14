$(document).ready(function() {
  var currentResult = 0;
  var userInput = ""; 
  var currentOperation = "";

  function saveUserInput () {
   userInput += $(this).text();
   console.log(userInput);
   $(".workplace").text(userInput);
  }

   function saveCurrentOperation () {
    moveUserInputToCurrentResult();

    currentOperation = $(this).text();
    console.log("Current operation: ", currentOperation);
  }

  function moveUserInputToCurrentResult () {
    if (userInput === "") {
      return;
    }
    
    currentResult = calculate(currentOperation, currentResult, parseFloat(userInput, 10));

    $(".workplace").text(currentResult);
    userInput = "";
  }

  function calculate (operation, firstNumber, secondNumber) {
    var result = 0;

    if (operation === "") {
      result = secondNumber;
    }
    else if (operation === "+") {
      result = firstNumber + secondNumber;
    }
    else if (operation === "-") {
      result = firstNumber - secondNumber;
    }
    else if (operation === "*") {
      result = firstNumber * secondNumber;
    }
    else if (operation === "/") {
      result = firstNumber / secondNumber;
    }

    return result;
  }

  $("#numbers li").click(saveUserInput);
  $("#operators li").click(saveCurrentOperation); 
  $("#count").click(moveUserInputToCurrentResult);
});

console.log();

// 1. AC
// 2. CE

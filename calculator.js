function add(num1, num2){
let sum = num1 + num2
return sum
}

function subtract(num1, num2){
let diff = num1 - num2
return diff
}

function multiply(num1, num2){
let prod = num1 * num2
return prod
}

function divide(num1, num2){
let quotient = num1 / num2
return quotient
}

function power(num1, num2){
let prod = num1 ** num2
return prod
}

function mod(num1, num2){
let rem = num1 % num2
return rem
}

function root(num1){
let x = Math.sqrt (num1)
return x
}

function factorial(num1) {
  //code
}

function calculate(expression) {
  let answer
  //splits the input string into an array
  const tokens = expression.split(' ')
  //if there are only two parts of the array run this code
if (tokens.length === 2) {
  tokens.splice(1, 1, Number(tokens[1]))
  if (tokens[0] === 'sqrt'){
    answer = root(tokens[1])
    } else if (tokens[0] === '!') {
      if (tokens[1] < 0) {
        alert('Invalid input')
      } else if (tokens[1].isInteger())
      answer = factorial(tokens[1])
    } else {
      alert('Invalid input')
    }
 //if the array has more than 3 items, display an error
} else  if (tokens.length > 3) {
  alert("Too many inputs")

} else {
  tokens.splice(0, 1, Number(tokens[0]))
  tokens.splice(2, 1, Number(tokens[2]))
  if (isNaN(tokens[0])){
    alert('Invalid input')
  } else if (isNaN(tokens[2])){
    alert('Invalid input')
  } else if (tokens[1] === "+"){
    answer = add(tokens[0], tokens[2])
  } else if (tokens[1] === "-"){
    answer = subtract(tokens[0], tokens[2])
  } else if (tokens[1] === "*"){
    answer = multiply(tokens[0], tokens[2])
  } else if (tokens[1] === "/"){
    answer = divide(tokens[0], tokens[2])
  } else if (tokens[1] === "^"){
    answer = power(tokens[0], tokens[2])
  } else if (tokens[1] === "%"){
    answer = mod(tokens[0], tokens[2])
  } else {
    alert ('Unable to calculate')
  }
}
  return answer
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});

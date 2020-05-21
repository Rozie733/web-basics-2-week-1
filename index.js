
//------------------------ Example Question ---------------------------
//Write a function that squares two numbers and appends the value into the htmlTarget1 variable. Run your function on the right side of the answer 1 variable so that it outputs in your browswer.

// this is your function called square. It takes a single parameter, number, and returns that values times itself.
const square = (number) => {
  return number * number
}

// this is your answer variable, on the right side we are running your square function and passing in a single arugment, the number 12.
const answer = square(12)
// here we are printing out the answer in the console so we can check it out. (Command + Shift + J on a mac)
console.log('answer', answer)

// This will be given to you for each question (for now). For each question. But here is how it works. we are setting the htmlTarget variable to be the result of an item in our DOM (the html) that has an id of 'a-1'. On the next line of code we are running a built in javascript function innerHTML and replacing the contents of whatever is inside of 'a-1' with the variable we previously declared "answer1"

const htmlTarget = document.getElementById('a')
htmlTarget.innerHTML = answer



//------------------------ Question 1 ---------------------------
//Write a function that gives you the area of a triangle with height 15 and width 10. Run your function on the right side of the answer 2 variable so that it outputs in your browswer.
//create a function here called 'calculateTriangleArea' and give it the correct parameters to use and have it return the solution. Area of a triagnle is 1/2 length * width or 1/2 height * width
calculateTriangleArea = () => {
  return
}

// set const answer1 = to your function and pass required arguments into your function
const answer1 = calculateTriangleArea()
console.log('answer1', answer1)

const htmlTarget1 = document.getElementById('a-1')
htmlTarget1.innerHTML = answer1



//------------------------ Question 2 ---------------------------
//Write a function that recives three mumber as parameters and evaluates each of these ones to return the highest number
//hint: remember condicional statements and comparison operators

//@brief read the numbers and determinate the highest number
//@param {number} number1 - first number
//@param {number} number2 - second number
//@param {number} number3 - third number
//@return {number} the highest number

maxNumber = () => {
  return
}

// we are going to follow the process below for the remaining questions, but changing the numbers of the answers according to each of the question's number
// answer2 is the variable that will save the return value of the question two from the previos function (maxNumber())
const answer2 = maxNumber()
console.log('answer2', answer2)

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2



//------------------------ Question 3 ---------------------------
//Write a program that asks the user  (use the prompt function) for an integer number with more than 3 digits and makes the product of the number times the number's digits of the respective input.
//if the input has less than 3 digits or is empty the program must display an alert telling the user "the number must has more than 3 digits" and throws the error to the console
//hint: remember the prompt input return an string value and the return value must be a number, also you need to validate data
//exmple: input= 12345 the number of digits is 5 and the return value is 61725

//@brief capture the input and makes the productof the number times number's digits
//@param {number} number -> more than 3 digits
//@return {number} produc -> the number times the number of digits
productDigit = () => {
  return
}

const answer3 = productDigit()
console.log('answer3', answer3)

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
//Write a program that asks the user (use the prompt function) for two integer numbers and a third input where gives them the possibility to choose between computing the sum, computing the product the subtraction or division. The option selected for the user will be the return value of the function with the numbers and the operation performed.
//expample of the return value: " n1 = 10 , n2 = 5 , operations performed: division, result: 2"
//hint: remember multiple return statements and literal template

//@brief capture the inputs and makes the computing process to return the required operation
//@return {number}

 mathOperation= () => {
  return
}

const answer4 =mathOperation()
console.log('answer4', answer4)

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4

let num1 = 5
let num2 = 4
let sum = document.getElementById("add");
let sub = document.getElementById("sub");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let display = document.getElementById("sum-el")
let key = document.getElementById("num1-el")
sum.addEventListener("click",()=>{
    display.textContent += " " + "," + num1 + num2
})

sub.addEventListener("click",()=>{
    display.textContent +=  num1 - num2
})

divide.addEventListener("click",()=>{
    display.textContent += " " + "," + num1 / num2
})

multiply.addEventListener("click",()=>{
    display.textContent += " " + "," + num1 * num2
})


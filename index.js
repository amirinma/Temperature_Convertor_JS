//Exercise 1
document.querySelector("body").appendChild(document.createElement("div")).setAttribute("id", "bod-div1");
document.querySelector("#bod-div1").appendChild(document.createElement("table")).setAttribute("id", "bod-div1-tab");
const table = document.querySelector("#bod-div1-tab")
const array = [1007, 'Thirty-three33', '1028', 'r', -98, true, 'true', "", "FALSE", 'false', 0, null];
for (let i =0; i < array.length; i++){
  table.appendChild(document.createElement("tr")).setAttribute("id", `doc-div1-tab-tr${i}`);
  document.getElementById(`doc-div1-tab-tr${i}`).innerHTML = array[i] + "   is " + typeof array[i]
}

//Exercise 2
let name =window.prompt("What is your name?")
window.alert(`Hello ${name}`)

//Exercise 3
let firstName = prompt("What is your first name?")
console.log(`You first name is ${firstName.length} characters.`)
window.alert(`You first name is ${firstName.length} characters.`)
let lastName =  prompt("What is your last name?")
console.log(`Your last name is ${lastName.length} characters.`)
window.alert(`Your last name is ${lastName.length} characters.`)
console.log(`Your fist name and last name contains ${firstName.length + lastName.length} characters.`)
window.alert(`Your fist name and last name contains ${firstName.length + lastName.length} characters.`)

// Section 4
let firstN = prompt("What is your first name?" )
let lastN = prompt("What is your last name?")
const reverseFN = [...firstN].reverse().join("")
const reverseLN =[...lastN].reverse().join("")
document.querySelector("body").appendChild(document.createElement("div")).setAttribute("id", "bod-div2")
document.getElementById("bod-div2").appendChild(document.createElement("h4")).setAttribute("id", "bod-div2-h")
document.getElementById("bod-div2-h").innerHTML = `This is how name reversal look lik: ${reverseFN}  ${reverseLN}`

// Section 5
let num1 = prompt("Enter first positive number:", "")
let num2 = prompt("Enter first positive number:", "")
num11 = parseInt(num1)
num22 = parseInt(num2)
document.querySelector("body").appendChild(document.createElement("div")).setAttribute("id", "bod-div3")
document.getElementById("bod-div3").appendChild(document.createElement("p")).setAttribute("id", "bod-div3-p")
document.getElementById("bod-div3-p").innerHTML = `
<strong>Arithmatic Operatoin Calculator</strong> <br>
${num11} * ${num22} = ${num11 * num22} <br>
${num11} / ${num22} = ${num11 / num22} <br>
${num11} + ${num22} = ${num11 + num22} <br>
${num11} - ${num22} = ${num11 - num22} <br>
${num11} % ${num22} = ${num11 % num22}
`
// Sectoin 6
function toCelsius(pr){
  return (pr-32) * 5/9
}
function toFahrenheit(pr){
  return pr * 9/5 + 32
}
let cels = prompt("Enter temperature in Celsius.")
cels = parseInt(cels)
alert(`Temperature is ${toFahrenheit(cels)} fahrenheit`)
let fahr = prompt("Enter temperature in Fahrenheit.")
fahr = parseInt(fahr)
alert(`Temperature is ${toCelsius(fahr)} celsius.`)

document.querySelector("body").appendChild(document.createElement("div")).setAttribute("id", "bod-div4")
document.getElementById("bod-div4").appendChild(document.createElement("p")).setAttribute("id", "bod-div4-p")
document.getElementById("bod-div4-p").innerHTML =`
<h4>Temperature Convertor</h4> <br>
${cels} Celsius to Fahrenheit is ${toFahrenheit(cels)} <br>
${fahr} Fahrenheit to Celsius is ${toCelsius(fahr)}
`

// Section 7
function toCentimeter(pr){return pr * 2.54}
function toKilos(pr){return pr/2.2046}
let height = prompt("Please put your height in inch")
height = parseInt(height)
alert(`Your height is ${toCentimeter(height)} centimeters.`)
let weight = prompt("Please put in weight in punds.")
weight = parseInt(weight)
alert(`Your weight ${toKilos(weight)} kilos.`)

document.querySelector("body").appendChild(document.createElement("div")).setAttribute("id", "bod-div5")
document.getElementById("bod-div5").appendChild(document.createElement("p")).setAttribute("id", "bod-div5-p")
document.getElementById("bod-div5-p").innerHTML = `
<h4>Height and Weight Convertor: </h4> <br>
${height} inches is ${toCentimeter(height)} centimeters <br>
${weight} pounds is ${toKilos(weight) } kilos.
`



// Enverioments Globals
let howManyReadings = 400; // I am use type let because modify this var in others moments
const saveManyReadings = howManyReadings; // This const save the readings total
const inputs = []; // save the inputs here

// This function start the project
(function startScript() 
{
    const select = confirm(`you want to enter values ​​manually or automatically?
    \n press 'ok' and you have to enter the numbers, 
    \n if you press 'cancel' the script itself will generate random numbers`);
    callFunction(select)
})();

// This function call the responsible function according to the user's choice
function callFunction(select) 
{
    if (select) {
        readmeInput();
    } else {
        randNumerics();
    }
    haveValuesInInputs();
}

// This function verify if exist number to compare
function haveValuesInInputs() 
{
    if (inputs.length == saveManyReadings) {
        higherNumber();
    }
    else {
        alertErros('there is no way to make the comparison because you canceled the process!');
    }
}

// This function generate rands numerics
function randNumerics() 
{
    while (howManyReadings != 0) {
        inputs.push(Math.floor(Math.random() * 10909));
        howManyReadings--;
    }
}

// This function is responsable for read inputs
function readmeInput() 
{
    while (howManyReadings != 0) {
        const input = prompt('Enter with a Number');
        if (input == null) break;
        insertNewInput(input)     
    }
}

// This function is responsable for add new input in array
function insertNewInput(input) 
{
    const isValidValue = checkIfInputIsValidNumeric(input);
    if (isValidValue) {
        inputs.push(input);
        howManyReadings--;
    } else {
        alertErros('Please enter with a valid value!');
    }
}

// This function check if the input is a valid numeric 
// If the value is a valid numeric call the function insertNewInput 
function checkIfInputIsValidNumeric(input) 
{
    const isNumeric = Number.isInteger(Number(input));
    const isUndefine = (input == undefined) ?? true;
    const isEmpty = (new String(input) == '') ?? true;
    if (isNumeric && !isUndefine && !isEmpty)
        return true;
    return false;
}

// This function is responsable for alert error
function alertErros(message) 
{
    alert(message);
}

// This function select higher number
function higherNumber() 
{
    const higherNumber = inputs.reduce(function (a, b) {
        return Math.max(a, b);
    });
    showResults(higherNumber);
}

// This function is responsable for add in html the results and the inputs for user
function showResults(higherNumber) 
{
    const elementShowInputsArray = document.querySelector("#showArrayNumbers");
    const elementShowHigherNumber = document.querySelector('#showHigherNumber');

    inputs.map(input => {
        const html = (input == higherNumber) ? ` <strong alt="Hello, i am here!">${higherNumber}</strong> ` : ` <s> ${input}</s> `
        elementShowInputsArray.innerHTML += html;
    });
    elementShowHigherNumber.innerHTML += higherNumber;
}
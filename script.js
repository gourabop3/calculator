//get id 

const display = document.getElementById("display");

//value on display
function apendOnDisplay(input) { //apendOnDisplay onclick function on btn
    display.value += input; //


}

//Clear Display

function clearDisplay() { //clearDisplay onclick function on Clear btn
    display.value = "";


}

// Display calculation

function result() { //result onclick function on btn HTML
    try {
        display.value = eval(display.value); //eval maens (number1+number2)
    } catch (error) {
        display.value = "Error"
    }


}
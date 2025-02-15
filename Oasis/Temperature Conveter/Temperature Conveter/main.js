function temperature() {
    let inputValue = parseFloat(document.querySelector("#inputValue").value);
    let type1 = document.querySelector("#type1").value;
    let type2 = document.querySelector("#type2").value;
    let result = document.querySelector("#result");

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    let output;

    switch (type1) {
        case "celcius":
            if (type2 === "fahrenheit") output = (inputValue * 9 / 5) + 32;
            else if (type2 === "kelvin") output = inputValue + 273.15;
            else if (type2 === "rankine") output = (inputValue + 273.15) * 9 / 5;
            else output = inputValue; // Celsius to Celsius
            break;

        case "fahrenheit":
            if (type2 === "celcius") output = (inputValue - 32) * 5 / 9;
            else if (type2 === "kelvin") output = (inputValue - 32) * 5 / 9 + 273.15;
            else if (type2 === "rankine") output = inputValue + 459.67;
            else output = inputValue; // Fahrenheit to Fahrenheit
            break;

        case "kelvin":
            if (type2 === "celcius") output = inputValue - 273.15;
            else if (type2 === "fahrenheit") output = (inputValue - 273.15) * 9 / 5 + 32;
            else if (type2 === "rankine") output = inputValue * 1.8;
            else output = inputValue; // Kelvin to Kelvin
            break;
        case "rankine":
            if (type2 === "celcius") output = (inputValue - 491.67) * 5 / 9;
            else if (type2 === "fahrenheit") output = inputValue - 459.67;
            else if (type2 === "kelvin") output = inputValue * 5 / 9;
            else output = inputValue; // Rankine to Rankine
            break;

        default:
            alert("Invalid conversion type selected.");
            return;
    }

    result.innerHTML = output.toFixed(3) + " " + (type2 === "celcius" ? "&deg;C" : type2 === "fahrenheit" ? "F" : type2 === "kelvin" ? "K" : "R");
}

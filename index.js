function calculateTemp() {

    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round(cel * 9 / 5) + 32;
        return fahrenheit;
    }
    const fahToCel = (cel) => {
        let fahrenheit = ((cel - 32)/1.8);
        console.log(fahrenheit)
        return fahrenheit.toPrecision(4);
    }
    let result;


    if (valueTemp == 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    }
    else {
        console.log("else")
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }
    return false;
}
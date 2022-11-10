function handleCalculatorForm(form){
    let toDisplay = form.inputbox.value;
    document.getElementByIsd("calcResult").innerHTML = toDisplay;
}

function handleAnagramForm(form){
    let toDisplay = form.inputbox2.value;
    document.getElementById("anagramResult").innerHTML = toDisplay;
}

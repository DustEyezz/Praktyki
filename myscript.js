function handleCalculatorForm(form){
    let toDisplay = form.inputbox.value;
    document.getElementById("calcResult").innerHTML = toDisplay;
}

function handleAnagramForm(form){
    let toDisplay = form.inputbox2.value;
    document.getElementById("anagramResult").innerHTML = toDisplay;
}

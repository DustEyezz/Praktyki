function handleCalculatorForm(form){
    
    let toDisplay = form.inputbox.value;
    document.getElementById("calcResult").innerHTML = calculate(toDisplay, "+-/*");
}

function handleAnagramForm(form){

    let formValue = form.inputbox2.value;
    document.getElementById("anagramResult").innerHTML = anagram(formValue);
}

function calculate(var1, var2){
    return 0;
}

function anagram(var1){
    return true;
}
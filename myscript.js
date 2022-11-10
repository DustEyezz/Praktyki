function handleCalculatorForm(form){

    let toDisplay = form.inputbox.value;
    document.getElementById("calcResult").innerHTML = calculate(toDisplay, "+-/*");
}

function handlePalindromeForm(form){

    let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}

function calculate(var1, var2){
    return 0;
}

function palindrome(var1){
    return true;
}


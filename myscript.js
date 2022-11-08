const people1 = ["John Doe", "Jane Lopez"];
const people2 = ["John Smith", "Kyle Rogers"];
const numbers = [1, 2, 5, 10, 20];

function getLast(array){
    return array[array.length-1];
}

function joinArrays(array1, array2){
    let resArray = new Array;
    for (i = 0; i < array1.length; i++){
        resArray.push(array1[i]);
    }
    for (i = 0; i < array2.length; i++){
        resArray.push(array2[i]);
    }
    return resArray;
}

function filterArray(array, filter){
    let resArray = new Array;
    for (i = 0; i < array.length; i++){
        if (array[i] === filter)
            resArray.push(array[i]);
    }
    return resArray;
}

function sumNumbers(array){
    let result = 0;
    for (i = 0; i < array.length; i++){
        result += array[i];
    }
    return result;
}

function squareNumbersAndAddThree(array){
    let resultArray = new Array;
    for (i = 0; i < array.length; i++){
        resultArray[i] = ((array[i]*array[i])+3);
    }
    return resultArray;
}

function logAllNumbers(array){
    for (i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

function handleForm (form) {
    let fieldValue = form.inputbox.value;
    document.getElementById('mytext').value = fieldValue + "!";
}

console.log(joinArrays(people1, people2));
console.log(getLast(people2));
console.log(filterArray(people1, "John Doe"));
console.log(sumNumbers(numbers));
console.log(squareNumbersAndAddThree(numbers));
logAllNumbers;

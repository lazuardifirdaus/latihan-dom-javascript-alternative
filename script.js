const calculatingInput = (input_text_1, input_text_2) => {
    let input_1 = document.getElementById(input_text_1);
    let input_2 = document.getElementById(input_text_2);
    
    let firstNumber = parseInt(input_1.value);
    let secondNumber = parseInt(input_2.value);

    let sum = firstNumber + secondNumber;

    // Pengecekan input nilai 0, dengan return nilainya "false"
    if (isNaN(sum)){
        alert(`Input ${input_1.value}${input_2.value} is not number`);
        return false;
    } else if (Number(input_1.value) === 0 || Number(input_2.value) === 0) {
        alert(`You can't input 0`);
        return false;
    } else {
        showResult(firstNumber, secondNumber, sum); // Panggil showResult di sini
    }
}

const showResult = (firstNumber, secondNumber, sum) => {
    let resultContainer = document.getElementById('checkResult');
    let resultText;

    const lineBreak = document.createElement("br");

    if (sum === 0){
        alert(`Input ${sum} is not valid`);
        return;
    } else if (sum % 3 === 0 && sum % 5 === 0) {
        resultContainer.innerHTML += "<br />";
        resultText = `FizzBuzz = ${firstNumber} + ${secondNumber}`;
    } else if (sum % 3 === 0) {
        resultContainer.innerHTML += "<br />";
        resultText = `Fizz = ${firstNumber} + ${secondNumber}`;
    } else if (sum % 5 === 0) {
        resultContainer.innerHTML += "<br />";
        resultText = `Buzz = ${firstNumber} + ${secondNumber}`;
    } else {
        resultContainer.innerHTML += "<br />";
        resultText = `${firstNumber + secondNumber}`;
    }

    if (typeof resultText === 'undefined'){
        resultContainer.innerHTML = ""; // Menggunakan innerHTML untuk menampilkan hasil
    } else {
        resultContainer.append(resultText, lineBreak);
    }
}

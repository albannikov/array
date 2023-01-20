function multiplyByTwo(){
    let inputValue = document.getElementById("InputArray").value; // Получим значение инпута    
    let ourArray = inputValue.split(',');                         // Розобъем строку на элементы массива
    for (let i = 0; i < ourArray.length; i++) {                   // Умножим каждое на 2
        ourArray[i] = ourArray[i] * 2;
    }
     document.getElementById('result').innerHTML = "Результат: " + ourArray;     // Выведем их на форму
}
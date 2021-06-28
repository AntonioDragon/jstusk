function sumNum(num) {
    let sum = 0;
    let newNum = num.toString().split('').map(Number); //Число превращаем в строку , создаем массив символов , и переводим все элементы в числа
    for (let i = 0; i < newNum.length; i++) //Проходим по массиву 
        sum += newNum[i]; //Сумируем все элементы
    return sum;
}

function checkNum(num) {
    let temp = sumNum(num); //Присваеваем к временной переменной сумму чисел входящего
    (temp > 9) ? checkNum(temp): console.log(temp); //Проверка на однозначное число  
}

var num = 9414441414149654
checkNum(num);
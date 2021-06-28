/*
    При условии num = 0  значение факториала = 1
    При условии если num не будет  = 1 , функция будет вызывать саму себя и считать факториал по схеме 
    factorial = num * (num - 1)... * 1
*/
function factorial(num) {
    if (num == 0) return 1;
    else return num != 1 ? num * factorial(num - 1) : 1;
}

function Array_Factorial(arr) {
    for (let i = 0; i < arr.length; i++) // Проходим по массиву
        arr[i] = factorial(arr[i]); // считаем факториал для каждого елемента
    return arr;
}

function CheckInputValues(num) {
    if (Array.isArray(num))
        return Array_Factorial(num); // Проверяем является ли входные данные массивом или просто числом
    else
        return factorial(num);
}
var arr = [15, 10, 12, 13, 4, 2, 5];
console.log(CheckInputValues(arr));
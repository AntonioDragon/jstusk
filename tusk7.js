function SumLustNumber(num, latest) {
    let sum = 0;
    let str = num.toString().substring(num.toString().length - latest) // Преобразовуем num в строку и отделяем нужное кол-во цифр
        .split('').map(Number); // Разбиваем на массив символов и переводим в number  
    for (let i = 0; i < str.length; i++) {
        sum = sum + str[i]; // Считаем сумму
    }
    return sum;
}

var num = 4144146456;
var latest = 2;

console.log(SumLustNumber(num, latest));
//Задача из www.codewars.com
/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

var reducer = (accumulator, currentValue) => accumulator.concat(currentValue); // Сразу создаем переменную для  reduce
function findOutlier(integers) {
    let check = [];
    integers.filter((value, i) => value % 2 && check.push(value)) // Если при деление на два остаток 0 то закинем число в массив 
    if (check.length > 1) //Проверим количество элементов в массиве  
        return (integers.filter(x => !check.includes(x))).reduce(reducer) // Если элементов больше одного находим разницу массивов         
    return check.reduce(reducer); //reduce нужен чтобы вывести числа не массивом , а числом 
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
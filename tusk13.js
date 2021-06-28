let arr = [
    [4, 5],
    [1, 2, 3],
    [6],
    [4, 5, 9, 10]
];
let reducer = (accumulator, currentValue) => accumulator.concat(currentValue); // Сразу создаем переменную для  reduce
// преобразовуя массив в одномерный

function addNumArr(arr) {
    let sum = 0;
    newarr = arr.reduce(reducer); // Передаем в reduce наш arr 
    for (let i = 0; i < newarr.length; i++) // Проходим по массиву, сумируем значения 
        sum += newarr[i]
    return sum;
}

console.log(addNumArr(arr));
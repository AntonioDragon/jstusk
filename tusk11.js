function coupArr(arr){
    let temp;
    for(let i = 0; i < arr.length/2; i++){          //Проходим до половины массива, если нечетное кол-во - нам это не мешает
        temp = arr[i];                              //Сохраняем значение массива в переменную
        arr[i] = arr[arr.length-i-1];               //Перекидуем значение
        arr[arr.length-i-1] = temp;                 //Перекидуем значение c переменной
    }
    return arr;
}
arr = [1, 2, 3, 4, 5, 6, 7];

console.log(coupArr(arr));
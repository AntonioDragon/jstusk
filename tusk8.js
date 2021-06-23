function ChangeSign(arr){
    let changeNum = 0;
    let temp = arr[0];                                            //Запоминаем первое число,первый проход не учитывается как изменение знака
    for(let i = 1; i<arr.length; i++){                            //Проходим по массиву
        if((temp > 0 && arr[i] < 0)||(temp < 0 && arr[i] > 0)){   //Проверяем изменился ли знак сравнивая с числом в прошлом проходе
            changeNum++;                                          
        }
        temp = arr[i];                                            //Запоминаем число в проходе 
    }
    return changeNum;
}
arr = [-1, 1, -1, 4, -1, -1, 1, 1, -1, -1, 1];
console.log(ChangeSign(arr));
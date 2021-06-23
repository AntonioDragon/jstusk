let year = 2020;


function year_thirteen(year){
    let check = 0;  
    let arr;
    for(let i = 1; i < year; i++){                  //Проходим с 1 по 2020 год
        arr = i.toString().split('').map(Number);   //Создаем массив из года который сейчас в проходе  
        if(sum_arr(arr) == 13){                     //Проверяем если сумму массива равняется 13
            check++;                                //Подсчитуем кол-во совпадений
        }
    }
    return check;
}

function sum_arr(arr){                      
    let sum = 0;
    for(let i = 0; i < arr.length; i++)             //Проходим по цифрам года
        sum +=arr[i];                               //Суммируем 
    return sum;
}
console.log(year_thirteen(year));
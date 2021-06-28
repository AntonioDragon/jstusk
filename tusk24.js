//Задача из www.codewars.com
/*
Well met with Fibonacci bigger brother, AKA Tribonacci.
As the name may already reveal, it works basically like a Fibonacci, 
but summing the last 3 (instead of 2) numbers of the sequence to generate the next.
So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? 
As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, 
you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, 
but to be clear: you need to create a fibonacci function that given a signature array/list, 
returns the first n elements - signature included of the so seeded sequence.
Signature will always contain 3 numbers; 
n will always be a non-negative number; 
if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
*/

function tribonacci(sign, col) {
    if (col == 0 || col == undefined) return []; //Проверка  кол-во в последовательности  на 0 и пустоту
    let arr = sign.concat();
    if (col < 3) { //Если кол-во последовательности меньше трех вывод будет другой так как последовательность до 3 уже известна
        let new_arr = [];
        for (let i = 0; i < col; i++)
            new_arr.push(arr[i]);
        return new_arr;
    }
    tribonacci_sequence(arr[0], arr[1], arr[2], arr, col, arr.length) //Принцип задачи такой же как во второй задаче но переделаный 
    return arr;                                                       //под условия этой задачи
}

function tribonacci_sequence(move_one, move_two, move_three, arr, col, length) {
    if (col > length) { //Заданное кол-во с длинной 
        let move_new = move_one + move_two + move_three; // Три шага в последовательности
        arr.push(move_new);
        tribonacci_sequence(move_two, move_three, move_new, arr, col, arr.length) //Делаем рекурсию с последущем шагом
    } else {
        return arr;
    }
}

console.log(tribonacci([1, 1, 1], 7));

//Даже учитывая что после проверки задачи нашел более легчкие способы , решил оставить свой пример  
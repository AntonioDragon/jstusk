function strTransform(str){
    let arrstr = str.split('_');                                   //Создаем массив разбивая входящую строку
    for(let i = 1; i < arrstr.length; i++){                        //Проходим по массиву кроме первого по условию
        arrstr[i] = arrstr[i].charAt(0)                            //К каждому элементу обращаемся на первый символ 
        .toUpperCase() + arrstr[i].slice(1);                       //и подымаем регистр + оставшееся часть строки
    }
    return arrstr.join('');                                        //собираем массив в строку
}

let str = "var_text_hello";

console.log(strTransform(str));
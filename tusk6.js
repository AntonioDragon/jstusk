function luckyTicket(str){
    if(str.length % 2 != 0) {                                           //Проверяем чтобы кол-во чисел было четным
        console.log("it is odd ticket");
    } else{
        let first = str.substring(0, str.length/2).split('');           //Делим строку на две половины и разделяем на массив символов
        let last =  str.substring(str.length/2,str.length).split('');   //--||--
        (luckyTicket_add(first) == luckyTicket_add(last))               //Проверка на одинаковую сумму половинок
        ? console.log("it a lucky ticket!!!") 
        : console.log("it not lucky ticket =("); 
    }
}
function luckyTicket_add(str){
    let sum = 0;
    for(let i = 0; i <= str.length-1;i++){                              //Подсчитуем сумму преобразовуя тип строки в число 
        sum = sum + Number(str[i]);
    }
    return sum;
}

function luckyTicket_type(ticket){                                      //Поздно прочитал что надо было использывать число
    (typeof ticket == 'string')                                         //Но выход был найден, проверяем тип строка или число
    ? luckyTicket(ticket) 
    : luckyTicket(ticket.toString()) ;                                  //Преобразовуем число в строку
}                                                                       

luckyTicket_type(459738);                                               

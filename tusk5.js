function countDays(first,last){                 //Отнимаем две даты , получаем милисекунды
    return (last - first)/1000/60/60/24;        //День = 24ч , час = 60м , минута = 60с, секунда = 1000мс
}                                            

var first_Day = new Date("01 March 2021");
var last_Day = new Date ("05 March 2021");

console.log(countDays(first_Day,last_Day))      

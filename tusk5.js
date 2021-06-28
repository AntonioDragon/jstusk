function countDays(first, last) { //Отнимаем две даты , получаем милисекунды
    return Math.trunc((last - first) / 1000 / 60 / 60 / 24); //День = 24ч , час = 60м , минута = 60с, секунда = 1000мс
}                                                            // с помошью trunc выводим только целую часть, убирая дробную

var first_Day = new Date("2021-03-01T14:25:30");
var last_Day = new Date("2021-03-05T23:25:30");

console.log(countDays(first_Day, last_Day))
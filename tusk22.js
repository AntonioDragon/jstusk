//Задача из www.codewars.com
/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function transformStr(str) {
    let new_str = str.split(/-|_/).map(function (value, index) { //Разбиваем строку где сепаратора может быть два по условию
        if (index != 0) {
            value = value[0].toUpperCase() + value.slice(1); //Поднимаем регистр для первых символов 
        }
        return value;
    }).join(''); //Объединием строку

    return new_str;
}


console.log(transformStr("The_Stealth_Warrio"));
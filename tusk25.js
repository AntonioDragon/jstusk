//Задача из www.codewars.com
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str) {
    if (str == "") return true; //По условию пустая строка является гетерограммой
    return str.toLowerCase().length === new Set(str.toLowerCase()).size // Сравниваем длинну строки и количество уникальных значений 
}

console.log(isIsogram("isogram"))
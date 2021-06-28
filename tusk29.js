//Задача из www.codewars.com
/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)
*/



function findMissingLetter(array) {
  const index = array.slice(1) //Создаем массив с одной удаленной буквой
    .findIndex((value, index) => value.charCodeAt() - array[index].charCodeAt() > 1); //Сравниваем индекс текущего с исходным массивом 
  return index > -1 ?                                                                 //пока не найдем недостающий символ
    String.fromCharCode(array[index].charCodeAt() + 1) : //Если индекс был найден возвращаем следующую букву после последней
    null; //Индекс не найден в случае с правильной исходной последовательностью
};

console.log(findMissingLetter(["a", "b", "c", "d", "f"]))
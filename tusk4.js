function anagram(str1 , str2){
    if(str1.split().lenght != str2.split().lenght || str1.trim() === str2.trim()){  // Проверка на длинну строки и одинаковых слов
        console.log(str1," not anagram ",str2);                                     // false  : not anagram 
    }
    else{
        sortString(str1) === sortString(str2)                                       // Вызов отдельной функции для уменьшения объема кода
        ?  console.log(str1,' is a anagram ',str2)                                  // true  : is a anagram
        : console.log(str1," not anagram ",str2);                                   // false  : not anagram
    }
}

sortString = function (str){
  return  str = str.replace(/\s+g/, '').toLowerCase()                       //В строке с начала убираем пробелы,преобразовуем нижний регист,
  .split('').sort().join();                                                 //разбиваем на массив символов , сортируем , собираем в строку
}   

anagram("anam","maga");
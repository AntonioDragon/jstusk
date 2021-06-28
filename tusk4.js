function anagram(str1, str2) {
    if (str1.split().lenght != str2.split().lenght || str1.trim() === str2.trim()) { // Проверка на длинну строки и одинаковых слов
        console.log(str1, " not anagram ", str2); // false  : not anagram 
    } else {
        let sort_str1 = sortString(str1);
        let sort_str2 = sortString(str2);
        if (sort_str1 === sort_str2) // Вызов отдельной функции для уменьшения объема кода
            console.log(str1, ' is a anagram ', str2) // true  : is a anagram
        else
        if (NotAccurateAnagram(sort_str1, sort_str2)) //Проверяем на не полную анаграмму (1 буква может различаться)
            console.log(str1, ' is a anagram ', str2) // true  : is a Not Accurate anagram
        else
            console.log(str1, " not anagram ", str2); // false  : not anagram
    }
}

function NotAccurateAnagram(str1, str2) {
    let check;
    for (let i = 0; i <= str1.lenght; i++) {
        if (str1[i] != str2[i]) //Проверяем сходятся ли сортированые символы строк 
            check++; //если нет то добовляем к числу не полной ангараммы
        if (check > 2) //если разница символов > 2 тогда это не будет анаграммой
            return false; //то есть в строке отличается один символ но при сортировки символов отличаться будут 2
    }
    return true;
}

sortString = function (str) {
    str = str.replace(/\s+g/, '').toLowerCase() //В строке с начала убираем пробелы,преобразовуем нижний регист,
        .split('').sort().join(); //разбиваем на массив символов , сортируем , собираем в строку
    console.log(str);
    return str;
}
/*
Не полная анаграмма:
"РЕАЛИЗМЕ", "ИЗРАИЛЕМ";
"Чертог", "горечь". 
Полная анаграмма:
"Воз","зов";
"Днесь","снедь".
*/
anagram("Чертог", "горечь");
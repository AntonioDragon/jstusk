function palindrome(pal) {
  let str = pal.split('') //строку разбиваем на массив символов, 
    .reverse().join(''); //потом переварачиваем, а потом объеденияем в строку 
  (pal == str) ? console.log(true): console.log(false); //сравниваем строки 
}

palindrome("stots");
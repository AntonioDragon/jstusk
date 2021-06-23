function palindrome(pal){
  str = pal.split('')        //строку разбиваем на массив символов, 
  .reverse().join('');      //потом переварачиваем, а потом объеденияем в строку 
  (pal == str)              //сравниваем строки 
  ? console.log(pal,"it a palindrome")  
  : console.log(pal,"it not palindrome");
}

palindrome("stots");
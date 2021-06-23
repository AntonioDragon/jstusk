//Задача из www.codewars.com
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)
*/

function solution(number){
    let sum = 0;
    if(number <= 0)                         //Проверка входящего значение на 0
        return 0 ;
    else
        for(let i = 1; i < number;i++)      //Проходим от 1 до заданного числа 
            if( i % 3 == 0 || i % 5 == 0)   //Проверяем остаток от деления  на 3 и 5
                sum+=i;                     //Суммируем подходящее по условию число
    return sum;
  }
  
  console.log(solution(50));
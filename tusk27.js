//Задача из www.codewars.com
/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect square
*/
function findNextSquare(sq) {
    if (sq < 0 || !Number.isInteger(Math.sqrt(sq))) //Проверяем число является полным квадратом или нет + если меньше нуля
        return -1;
    while (true) {
        sq++;
        if (Number.isInteger(Math.sqrt(sq))) // Ищем следующий полный квадрат
            break;
    }
    return sq;
}

console.log(findNextSquare(155));
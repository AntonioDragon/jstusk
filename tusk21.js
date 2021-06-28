//Задача из www.codewars.com
/*
Implement a method that accepts 3 integer values a, b, c. 
The method should return true if a triangle can be built with the sides of given length and false in any other case.
(In this case, all triangles must have surface greater than 0 to be accepted).
*/

function trigon(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0 ||
        a == NaN || b == NaN || c == NaN)
        return false;
    if ((a > b && a > c && b + c > a) ||
        (b > a && b > c && a + c > b) || //Условия разностороннего треугольника
        (c > b && c > a && b + a > c) ||
        (a == b && a != c && a + b > c) ||
        (c == a && c != b && c + a > b) || //Условия равнобедренного треугольника
        (b == c && b != a && b + c > a) ||
        (a == b && a == c && b == c)) { //Условие равностороннего треугольника
        return true;
    } else {
        return false;
    }
}

console.log(trigon(8, 4 ,2));
function checkNumfib(num) {
  let arr = [];
  if (num == 0) //Если входящее значение = 0 
    return 0;
  arr.push(0); //Первое число в последовательности
  if (num > 0) //Проверка на позитивную или отрицательную последовательность
    return fib_plus(num, 0, 1, arr);
  else
    return fib_minus(num, 0, -1, arr);
}

function fib_minus(num, move_one, move_two, arr) {
  if (move_two + move_one > num) { //Если следущий шаг будет больше чем максимальное число последовательности
    let move = move_one + move_two; //Число последовательности и следущий шаг
    arr.push(move);
    fib_minus(num, move_two, move, arr); //Делаем рекурсию с последущем шагом
  }
  return arr;
}

function fib_plus(num, move_one, move_two, arr) {
  if (move_two + move_one < num) { //Если следущий шаг будет меньше чем максимальное  отрицательное число последовательности
    let move = move_one + move_two;
    arr.push(move);
    fib_plus(num, move_two, move, arr);
  }
  return arr;
}

console.log(checkNumfib(6));
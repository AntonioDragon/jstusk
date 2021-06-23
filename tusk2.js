function fib(num) {
    let a = 1;
    let b = 1;
    console.log(0);                 //
    console.log(a);                 // Первые цифры в последовательности 
    console.log(b);                 //
    for (let i = 3; i <= num; i++) {
      let c = a + b;                //Следущая число последовательности
      a = b;                        // Переходим на следущий шаг для вычисления следущего числа
      b = c;                        // ------||------
      console.log(c);               // Вывод числа
    }
  }


fib(6);

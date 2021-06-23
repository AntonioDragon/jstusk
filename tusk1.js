function factorial(num){
    return (num != 1) ? num * factorial(num-1) : 1;
}
/*
   При условии если num не будет  = 1 , функция будет вызывать саму себя и считать факториал по схеме 
   factorial = num * (num - 1)... * 1
*/
console.log(factorial(15));
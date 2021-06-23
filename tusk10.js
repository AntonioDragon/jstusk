function ChangeArr(arr){
   let change = arr.concat().sort();                //Присваеваем входящий массив к другому и сортируем 
   for(let i = 0; i < arr.length; i++){             //Проходим по двум массивам
       if(change[i] != arr[i] )                     //Проверяем исходный с сортированым массивом по елементу 
           return false;
   }
   return true;
}


arr2 = ['a','d','g','f','e','f','g','h'];
arr = ['a','b','c','d','e','f','g','h'];

console.log(ChangeArr(arr));
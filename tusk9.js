function ChangeArr(arr){
    let change = arr[0];                    
    for(let i = 1; i < arr.length; i++){        
        if(change > arr[i]){
            return false;
        }
        change = arr[i];
    }
    return true
}


arr = [1, 2, 3, 4, 5, 6, 7];
arr2 = [1, 2, 3, 8, 5, 6, 7];
console.log(ChangeArr(arr2));
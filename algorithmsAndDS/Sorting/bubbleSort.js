function bubbleSort(arr){
    let size = arr.length;
    for(let i = 0; i < size - 1; ++i){
        let flag = false;
        for(let j = 0; j < size - 1 -i;++j){
            if(arr[j] > arr[j + 1]){
                [arr[j],arr[j + 1]]= [arr[j + 1],arr[j]];
                flag = true;
            }
        }
        if(!flag) break;
    }
    return arr;
}
const arr = [25,1, 5, 3, 6, 2, 4,8,9,10,11];
console.log(bubbleSort(arr));
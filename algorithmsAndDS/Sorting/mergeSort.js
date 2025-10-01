const merge = (arr,low,mid,high) => {
    const a1 = arr.slice(low,mid+1);
    const a2 = arr.slice(mid +1, high + 1);

    let i = 0;
    let j = 0;
    let k = low;

    while( i < a1.length && j < a2.length){
        if(a1[i] < a2[j]){
            arr[k++] = a1[i++];
        }
        else arr[k++] = a2[j++];
    }

    while (i < a1.length) arr[k++] = a1[i++];
    while( j < a2.length) arr[k++] = a2[j++];
}

const mergeSort =(arr,low,high) =>{
    if( low >= high) return;

    const mid = Math.floor((low + high)/ 2);
    mergeSort(arr,low,mid);
    mergeSort(arr,mid + 1, high);

    merge(arr,low,mid,high);
}
const numbers = [38, 27, 43, 3, 9, 82, 10];
mergeSort(numbers, 0, numbers.length - 1);

console.log("Sorted:", numbers);



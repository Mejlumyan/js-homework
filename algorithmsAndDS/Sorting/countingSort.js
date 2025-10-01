const countingSort = (arr) => {
  const length = arr.length;

  let maxElem = arr[0];
  let minElem = arr[0];

  for (let i = 1; i < length; ++i) {
    if (maxElem < arr[i]) {
      maxElem = arr[i];
    }
    if (minElem > arr[i]) {
      minElem = arr[i];
    }
  }

  const range = maxElem - minElem + 1;

  const countingArray = new Array(range).fill(0);

  for (const item of arr) {
    countingArray[item - minElem]++; // elementi qanake
  }

  for (let i = 1; i < countingArray.length; ++i) {
    countingArray[i] += countingArray[i - 1]; // hashvuma qani el-t ka iranic araj
  }

  const newArray = new Array(length).fill(0);

  for (let i = length - 1; i >= 0; --i) { //hetevic texadrelov galis enq
    const elem = arr[i];

    const idx = countingArray[elem - minElem] - 1;
    newArray[idx] = elem;
    countingArray[elem - minElem]--;
  }
  return newArray;
};

let arr = [2,3,3,1,4,5,5,6]

console.log(countingSort(arr));
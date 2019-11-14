function swap(array, valA, valB) {
  let temp = array[valA]
  array[valA] = array[valB]
  array[valB] = temp
}
// Alex C's Solution
// vvvvvvvvvvvvvvvvvvv
// function partition(arr, left, right) {
    
//   let i = left, j = right;
//   let tmp;
//   let pivot = arr[ Math.floor((left+right) / 2) ]

//   while( i<= j ) {
//       while( arr[i] < pivot ) {
//           i++;
//       }
//       while( arr[j] > pivot ) {
//           j--;
//       }
//       if( i<= j ) {
//           tmp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = tmp;
//           i++;
//           j--;
//       }
//   }
//   return i;
// }

// function qSort(arr, left, right) {
//   left = left === undefined ? 0 : left;
//   right = right === undefined ? arr.length : right;

//   let index = partition(arr, left, right)

//   if( left < index - 1) {
//       qSort(arr, left, index - 1);
//   }
//   if( index < right ) {
//       qSort(arr, index, right)
//   }

//   return arr;
// }
// ^^^^^^^^^^^^^^^^^^^^^^^^

// Middle Pivot
// function partition(array, start, end) {
//   const pivotIndex = Math.floor((start + end) / 2)
//   const pivot = array[pivotIndex]
//   let j = start
//   for (let i = end - 1; i >= j; i--) {
//     if (array[i] < pivot) {
//       swap(array, i, j)
//       j++
//     }
//   }
//   swap(array, pivotIndex, j)
//   return j
// }

// Lomuto's Algorithm
function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
};

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array
  }

  const middle = partition(array, start, end)
  array = quickSort(array, start, middle)
  array = quickSort(array, middle + 1, end)
  return array
}

const unsortedArray = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5,
]
const smallUnsortedArray = [89, 30, 25, 32, 72, 70]

console.log(quickSort(unsortedArray))

// [2,3,1,4]
function merge(array, leftArr, rightArr) {
  let i = 0
  let j = 0
  let outputIdx = 0
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      array[outputIdx] = leftArr[i]
      i++
      outputIdx++
    } else {
      array[outputIdx] = rightArr[j]
      j++
      outputIdx++
    }
  }

  while (i < leftArr.length) {
    array[outputIdx] = leftArr[i]
    i++
    outputIdx++
  }

  while (j < rightArr.length) {
    array[outputIdx] = rightArr[j]
    j++
    outputIdx++
  }

  return array
}

function mSort(array) {
  if (array.length <= 1) {
    return array
  }
  let middle = Math.floor((array.length) / 2)
  let leftArr = array.slice(0, middle)
  let rightArr = array.slice(middle, array.length)

  let left = mSort(leftArr)
  let right = mSort(rightArr)

  return merge(array, left, right)
}

console.log(mSort(smallUnsortedArray))

// Exercise 5
const LinkedList = require('./LinkedList')

const mSortLL = new LinkedList()
// 89 30 25 32 72 70 51 42 25 24
mSortLL.insertFirst(89)
mSortLL.insertLast(30)
mSortLL.insertLast(25)
mSortLL.insertLast(32)
mSortLL.insertLast(72)
mSortLL.insertLast(70)
mSortLL.insertLast(51)
mSortLL.insertLast(42)
mSortLL.insertLast(25)
mSortLL.insertLast(24)

function mergeSortLL(LL) {
  const llAsArr = []
  while (LL.head) {
    llAsArr.push(LL.head.value)
    LL.remove(LL.head.value)
  }
  return mSort(llAsArr)
}

console.log(mergeSortLL(mSortLL))

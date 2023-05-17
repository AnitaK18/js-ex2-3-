//1
function myForEach(array, callback) {
for (let i = 0; i < array.length; i++) {
callback(array[i], i, array);
}
}

const myArray = [1, 2, 3];

myForEach(myArray, function(element, index, array) {
console.log(`Элемент: ${element}, Индекс: ${index}, Массив: ${array}`);
});
//2
function mySort(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (callback(arr[i], arr[j]) > 0) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const myArr2 = [3, 2, 1];

const sortedArr = mySort(myArr2, function (a, b) {
  return a - b;
});

console.log(sortedArr);

//3
function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
}

const myArr3 = [1, 2, 3];

const foundElem = myFind(myArr3, function (elem) {
  return elem === 2;
});

console.log(foundElem);

//4
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const myArr = [1, 2, 3];

const mappedArr = myMap(myArr, function (elem) {
  return elem * 2;
});

console.log(mappedArr);

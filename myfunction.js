// 1. myForEach
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// 2. mySort
Array.prototype.mySort = function (callback) {
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (callback(this[i], this[j]) > 0) {
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};

// 3. myFind
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

// 4. myMap
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Example

//myForEach
const myArray = [1, 2, 3];

myArray.myForEach(function (element, index, array) {
  console.log(`Элемент: ${element}, Индекс: ${index}, Массив: ${array}`);
});

//mySort
const myArr2 = [3, 2, 1];
const sortedArr = myArr2.mySort(function (a, b) {
  return a - b;
});
console.log(sortedArr);

//myFind
const myArr3 = [1, 2, 3];
const foundElem = myArr3.myFind(function (elem) {
  return elem === 2;
});
console.log(foundElem);

//myMap
const myArr = [1, 2, 3];
const mappedArr = myArr.myMap(function (elem) {
  return elem * 2;
});
console.log(mappedArr);


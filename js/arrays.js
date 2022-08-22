const arr = [2, 5, 34, 12, -6, 0];
console.log(arr);

const deleted = arr.splice(1,2,4,72,55);
console.log(deleted);
console.log(arr);

const a = arr.slice();
a.push(42);

console.log(arr);

const mappedArr = arr.map((val, index) => val * index);
console.log(mappedArr);

const reduceFunc = (acc, item) =>{
    if (item > 0) acc.positives.push(item);
    else acc.negatives.push(item);
    return acc;
};

const reduceSum = (acc, item) =>{
    if (item > 0) acc.positives += item;
    else acc.negatives += item;
    return acc;
}

const summer = arr.reduce(reduceFunc,{ positives: [], negatives: []});
const sum = arr.reduce(reduceSum, { positives: 0, negatives: 0});
console.log(sum);
console.log(summer);

// const prod = arr.reduce((acc, val) => {
//     acc.push(val * 2);
//     return acc;
//   }, []);
//   console.log(prod);
  
//   const maxVal = arr.reduce((acc, val) => {
//     val > acc ? (acc = val) : acc;
//     return acc;
//   }, 0);
  
//   console.log(maxVal);


const fruits = ['orange', 'pear', 'cucumber', 'apple']
  console.log(mappedArr);
  console.log(reduceMap);

  console.log(fruits.find((cur, index)));

  arr.push(115)
  console.log(fruits.sort());

  const compareFunc = (a, b) => {
    // if (a>b) return 1
    // if (a<b) return -1
    
    return a - b; //(this is used instead of a>b,a<b)
  };

  console.log(arr.sort(compareFunc));
  console.log(arr. sort((a,b) => a-b));
  console.log(fruits.sort((a,b) => a.length - b.length));

  const unflattened = arr.map((item, index) => [item, index]);
  console.log(unflattened);

  console.log(unflattened.flat());

  const unflattened2 = arr.map((item, index) => [item, index]);
  console.log(unflattened2);

  const images = document.querySelectorAll("[alt=alt]");
  const images1 = document.getElementsByTagName('img');
  console.log(images1);


  
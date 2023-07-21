/*
let a = 10;
let b = 9;
sum(a, b);

function sum(a, b) {
  let sum = a + b;
  console.log("Answer id", sum);
} 


const func = (x) => a + b

const func2 = (a, b) => {
  return a + b;
};
console.log("answer is", func)



const arrowFunction = (num) => {
  num * num;
}

const arr = [5, 1, 3, 2, 6, ];

function double(x) {
  return x * 6;
}

const output = arr.map(double);

console.log(output);

const arr = [5, 1, 3, 2, 6, ];

const output = arr.map((x) => x.toString(2));


console.log(output);


const arr = [5, 1, 3, 2, 6, ];

const isOdd = arr.filter((x) => {
  return x % 2;
})

// const output = arr.filter(isOdd);

console.log(isOdd);

const arr = [5, 1, 3, 2, 6, ];


function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output);

const arr = [5, 1, 3, 2, 6, ];

const output = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(output);
*/

const users = [{
    firstName: "Rohit",
    lastName: "Sharma",
    age: 19
  },
  {
    firstName: "Ridhi",
    lastName: "Goyal",
    age: 18
  },
  {
    firstName: "Sidhi",
    lastName: "Goyal",
    age: 19
  },
  {
    firstName: "Milan",
    lastName: "Mittal",
    age: 20
  },
];

//const output = users.map((x) => x.firstName + " " + x.lastName);
// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];

//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output);
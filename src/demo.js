const arr1 = [1, 2, 3, 4, 5],
  arr2 = [5, 6, 7, 8, 9];

// 交集
let intersection = arr1.filter(function (val) {
  return arr2.indexOf(val) > -1;
});

// 并集
let union = arr1.concat(
  arr2.filter(function (val) {
    return !(arr1.indexOf(val) > -1);
  })
);

// 补集 两个数组各自没有的集合
let complement = arr1
  .filter(function (val) {
    return !(arr2.indexOf(val) > -1);
  })
  .concat(
    arr2.filter(function (val) {
      return !(arr1.indexOf(val) > -1);
    })
  );

// 差集 数组arr1相对于arr2所没有的
let diff = arr1.filter(function (val) {
  return arr2.indexOf(val) === -1;
});

console.log("arr1: ", arr1);
console.log("arr2: ", arr2);
console.log("交集", intersection);
console.log("并集", union);
console.log("补集", complement);
console.log("差集", diff);

// 形如如下数组
let arr1 = [],
  arr2 = [];
arr1 = [
  {
    ID: 1,
    Name: 1,
    desc: "Number",
  },
  {
    ID: 2,
    Name: 2,
    desc: "Number",
  },
  {
    ID: 3,
    Name: 3,
    desc: "Number",
  },
  {
    ID: 4,
    Name: 4,
    desc: "Number",
  },
  {
    ID: 5,
    Name: 5,
    desc: "Number",
  },
];
arr2 = [
  {
    ID: 5,
    Name: 5,
    desc: "Number",
  },
  {
    ID: 6,
    Name: 6,
    desc: "Number",
  },
  {
    ID: 7,
    Name: 7,
    desc: "Number",
  },
  {
    ID: 8,
    Name: 8,
    desc: "Number",
  },
  {
    ID: 9,
    Name: 9,
    desc: "Number",
  },
];

// 交集
let intersection = [];
for (let i = 0, len = arr1.length; i < len; i++) {
  for (let j = 0, length = arr2.length; j < length; j++) {
    if (arr1[i].ID === arr2[j].ID) {
      intersection.push(arr1[i]);
    }
  }
}
console.log("交集", intersection);

// 并集
let union = [...arr1, ...arr2];
for (let i = 0, len = arr1.length; i < len; i++) {
  for (let j = 0, length = arr2.length; j < length; j++) {
    if (arr1[i].ID === arr2[j].ID) {
      union.splice(
        union.findIndex((item) => item.ID === arr1[i].ID),
        1
      );
    }
  }
}
console.log("并集", union);

// 补集
let complement = [...arr1, ...arr2];
for (let i = 0, len = arr1.length; i < len; i++) {
  for (let j = 0, length = arr2.length; j < length; j++) {
    if (arr1[i].ID === arr2[j].ID) {
      complement.splice(
        complement.findIndex((item) => item.ID === arr1[i].ID),
        1
      );
      complement.splice(
        complement.findIndex((item) => item.ID === arr2[j].ID),
        1
      );
    }
  }
}
console.log("补集", complement);

// 差集
let diff = [...arr1];
for (let i = 0, len = arr1.length; i < len; i++) {
  let flag = false;
  for (let j = 0, length = arr2.length; j < length; j++) {
    if (arr1[i].ID === arr2[j].ID) {
      flag = true;
    }
  }
  if (flag) {
    diff.splice(
      diff.findIndex((item) => item.ID === arr1[i].ID),
      1
    );
  }
}
console.log("差集", diff);

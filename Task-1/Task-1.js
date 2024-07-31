const array = [
  { name: "arun", age: 26 },
  { name: "arun", age: 26 },
  { name: "easwar", age: 27 },
];

const findObj = { name: "arun", age: 26 };

const result = array.filter((item) => {
  return Object.keys(findObj).every((key) => item[key] === findObj[key]);
});

console.log(result);

// results

// [
//   { name: "arun", age: 26 },
//   { name: "arun", age: 26 },
// ];

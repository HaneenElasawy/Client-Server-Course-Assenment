var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

var allStrings = fruits.every(function (item) {
  return typeof item === "string";
});
console.log("a) All elements are strings:", allStrings);

var someStartWithA = fruits.some(function (item) {
  return item.startsWith("a");
});
console.log("b) Some elements start with 'a':", someStartWithA);

var filtered = fruits.filter(function (item) {
  return item.startsWith("b") || item.startsWith("s");
});
console.log("c) Filtered (starts with b or s):", filtered);

var liked = fruits.map(function (item) {
  return "I like " + item;
});
console.log("d) Mapped sentences:", liked);

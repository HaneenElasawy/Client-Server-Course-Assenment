import Shape from "./Shape.js";
import Rectangle from "./Rectangle.js";
import Square from "./Square.js";
import Circle from "./Circle.js";

console.log("---- Create Shapes ----");

const r1 = new Rectangle(10, 5);
console.log(r1.toString());

const s1 = new Square(6);
console.log(s1.toString());

const c1 = new Circle(3);
console.log(c1.toString());

console.log("Total created shapes:", Shape.getCount());

console.log("---- Bonus Test (Should throw errors) ----");

try {
  const r2 = new Rectangle(2, 2);
  console.log(r2.toString());
} catch (e) {
  console.error("Rectangle error:", e.message);
}

try {
  const s2 = new Square(4);
  console.log(s2.toString());
} catch (e) {
  console.error("Square error:", e.message);
}

console.log("Final shapes count:", Shape.getCount());

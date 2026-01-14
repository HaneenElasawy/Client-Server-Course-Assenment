import Shape from "./Shape.js";

export default class Circle extends Shape {
  constructor(radius) {
    super();

    if (!Number.isFinite(radius) || radius <= 0) {
      throw new Error("Circle radius must be a positive number.");
    }

    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `Circle | R:${this.radius} | Area: ${this.area()} | Perimeter: ${this.perimeter()}`;
  }
}

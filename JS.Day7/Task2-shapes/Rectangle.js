import Shape from "./Shape.js";

export default class Rectangle extends Shape {
  static #created = false;

  constructor(width, height) {
    if (new.target === Rectangle) {
      if (Rectangle.#created) {
        throw new Error("Only one Rectangle instance is allowed (Bonus).");
      }
      Rectangle.#created = true;
    }

    super();

    if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
      throw new Error("Rectangle width/height must be positive numbers.");
    }

    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  toString() {
    return `Rectangle | W:${this.width} H:${this.height} | Area: ${this.area()} | Perimeter: ${this.perimeter()}`;
  }
}

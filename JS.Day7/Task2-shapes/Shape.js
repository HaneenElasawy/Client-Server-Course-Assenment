export default class Shape {
  static #count = 0;

  constructor() {
    Shape.#count++;
  }

  area() {
    throw new Error("area() must be implemented in subclass");
  }

  perimeter() {
    throw new Error("perimeter() must be implemented in subclass");
  }

  static getCount() {
    return Shape.#count;
  }

  toString() {
    return `${this.constructor.name} | Area: ${this.area()} | Perimeter: ${this.perimeter()}`;
  }
}

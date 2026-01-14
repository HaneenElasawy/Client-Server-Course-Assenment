import Rectangle from "./Rectangle.js";

export default class Square extends Rectangle {
  static #created = false;

  constructor(side) {
    if (Square.#created) {
      throw new Error("Only one Square instance is allowed (Bonus).");
    }
    Square.#created = true;

    if (!Number.isFinite(side) || side <= 0) {
      throw new Error("Square side must be a positive number.");
    }

    super(side, side);
    this.side = side;
  }

  toString() {
    return `Square | Side:${this.side} | Area: ${this.area()} | Perimeter: ${this.perimeter()}`;
  }
}

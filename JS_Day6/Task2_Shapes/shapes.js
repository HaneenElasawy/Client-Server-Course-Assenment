class Shape {
  static count = 0;

  constructor(name) {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate Shape directly");
    }
    this.name = name;
    Shape.count++;
  }

  area() {
    throw new Error("area() must be implemented");
  }

  perimeter() {
    throw new Error("perimeter() must be implemented");
  }

  toString() {
    return `${this.name} | Area: ${this.area()} | Perimeter: ${this.perimeter()}`;
  }

  static getCount() {
    return Shape.count;
  }
}

class Rectangle extends Shape {
  static created = 0;

  constructor(width, height) {
    if (Rectangle.created >= 1) {
      throw new Error("Only one Rectangle allowed");
    }
    super("Rectangle");
    this.width = width;
    this.height = height;
    Rectangle.created++;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Shape {
  static created = 0;

  constructor(side) {
    if (Square.created >= 1) {
      throw new Error("Only one Square allowed");
    }
    super("Square");
    this.side = side;
    Square.created++;
  }

  area() {
    return this.side * this.side;
  }

  perimeter() {
    return 4 * this.side;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return (Math.PI * this.radius * this.radius).toFixed(2);
  }

  perimeter() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
}

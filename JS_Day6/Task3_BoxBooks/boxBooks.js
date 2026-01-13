// ---------- Book ----------
function Book(title, numOfChapters, author, numOfPages, publisher, numOfCopies, type) {
  this.title = title;
  this.numOfChapters = Number(numOfChapters);
  this.author = author;
  this.numOfPages = Number(numOfPages);
  this.publisher = publisher;
  this.numOfCopies = Number(numOfCopies);

  // Optional (only if you want "type" feature)
  this.type = type || "";
}

Book.prototype.toString = function () {
  return `Book: ${this.title} | Author: ${this.author} | Pages: ${this.numOfPages} | Copies: ${this.numOfCopies}`;
};

// ---------- Box ----------
function Box(height, width, length, material) {
  this.height = Number(height);
  this.width = Number(width);
  this.length = Number(length);
  this.material = material;

  this.content = []; // array of Book objects
  this.numOfBooks = 0;
  this.volume = this.height * this.width * this.length;
}

Box.prototype._syncCounts = function () {
  this.numOfBooks = this.content.length;
};

Box.prototype.addBook = function (book) {
  if (!(book instanceof Book)) {
    throw new Error("addBook expects a Book object");
  }
  this.content.push(book);
  this._syncCounts();
};

Box.prototype.countBooks = function () {
  return this.numOfBooks;
};

// Delete by book title (name)
Box.prototype.deleteBookByName = function (title) {
  const before = this.content.length;
  this.content = this.content.filter((b) => b.title.toLowerCase() !== title.toLowerCase());
  this._syncCounts();
  return before - this.content.length; // how many deleted
};

// Delete by book type (optional)
Box.prototype.deleteBookByType = function (type) {
  const before = this.content.length;
  this.content = this.content.filter((b) => (b.type || "").toLowerCase() !== type.toLowerCase());
  this._syncCounts();
  return before - this.content.length;
};

Box.prototype.toString = function () {
  const booksInfo = this.content.map((b, i) => `${i + 1}) ${b.toString()}`).join("\n");
  return (
    `Box (${this.material}) | W:${this.width}, H:${this.height}, L:${this.length} | Volume: ${this.volume}\n` +
    `Books Count: ${this.numOfBooks}\n` +
    (this.numOfBooks ? booksInfo : "No books in this box")
  );
};

// valueOf so box1 + box2 = total books count
Box.prototype.valueOf = function () {
  return this.numOfBooks;
};

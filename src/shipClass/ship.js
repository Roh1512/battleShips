class Ship {
  constructor(length) {
    this.length = length;
    this.position;
    this.orientation = "horizontal";
    this.hits = Array(length).fill(false); // Initialize hits as an array of `false
  }
  hit(position) {
    if (position >= 0 && position < this.length) {
      this.hits[position] = true; // Mark the position as hit
    } else {
      throw new Error("Invalid position to hit.");
    }
  }
  isSunk() {
    return this.hits.every((hit) => hit);
  }
  setOrientation(orientation) {
    if (orientation === "horizontal" || orientation === "vertical") {
      this.orientation = orientation;
    } else {
      throw new Error("Invalid orientation.");
    }
  }
  isHorizondal() {
    if (this.orientation === "horizontal") {
      return true;
    } else if (this.orientation === "vertical") {
      return false;
    } else {
      throw new Error("Invalid Orientaion");
    }
  }
}

module.exports = Ship;

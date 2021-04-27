interface AST {
  equals(other: AST): boolean;
}

class Num implements AST {
  constructor(public value: number) {}

  equals(other: AST): boolean {
    return other instanceof Num && this.value === other.value;
  }
}

class Id implements AST {
  constructor(public value: string) {}

  equals(other: AST): boolean {
    return other instanceof Id && this.value === other.value;
  }
}

class Not implements AST {
  constructor(public term: AST) {}

  equals(other: AST): boolean {
    return other instanceof Not && this.term === other.term;
  }
}

class Equal implements AST {
  constructor(public left: AST, public right: AST) {}

  equals(other: AST): boolean {
    return (
      other instanceof Equal &&
      this.left === other.left &&
      this.right === other.right
    );
  }
}

class NotEqual implements AST {
  constructor(public left: AST, public right: AST) {}

  equals(other: AST): boolean {
    return (
      other instanceof NotEqual &&
      this.left === other.left &&
      this.right === other.right
    );
  }
}

class Add implements AST {
  constructor(public left: AST, public right: AST) {}

  equals(other: AST): boolean {
    return (
      other instanceof Add &&
      this.left === other.left &&
      this.right === other.right
    );
  }
}

class Subtract implements AST {
  constructor(public left: AST, public right: AST) {}

  equals(other: AST): boolean {
    return (
      other instanceof Subtract &&
      this.left === other.left &&
      this.right === other.right
    );
  }
}

class Multiply implements AST {
  constructor(public left: AST, public right: AST) {}

  equals(other: AST): boolean {
    return (
      other instanceof Multiply &&
      this.left === other.left &&
      this.right === other.right
    );
  }
}

class Divide implements AST {
  constructor(public left: AST, public right: AST) {}

  equals(other: AST): boolean {
    return (
      other instanceof Divide &&
      this.left === other.left &&
      this.right === other.right
    );
  }
}

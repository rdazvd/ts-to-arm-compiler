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

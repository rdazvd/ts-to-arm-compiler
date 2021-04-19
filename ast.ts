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

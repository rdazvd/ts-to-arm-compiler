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

class Call implements AST {
  constructor(public callee: string, public args: Array<AST>) {}
  equals(other: AST): boolean {
    return (
      other instanceof Call &&
      this.callee === other.callee &&
      this.args.length === other.args.length &&
      this.args.every((arg, i) => arg.equals(other.args[i]))
    );
  }
}

class Return implements AST {
  constructor(public term: AST) {}

  equals(other: AST): boolean {
    return other instanceof Return && this.term === other.term;
  }
}

class Block implements AST {
  constructor(public statements: Array<AST>) {}

  equals(other: AST): boolean {
    return (
      other instanceof Block &&
      this.statements.length === other.statements.length &&
      this.statements.every((arg, i) => arg.equals(other.statements[i]))
    );
  }
}

class If implements AST {
  constructor(
    public conditional: AST,
    public consequence: AST,
    public alternative: AST
  ) {}

  equals(other: AST): boolean {
    return (
      other instanceof If &&
      this.conditional === other.conditional &&
      this.consequence === other.consequence &&
      this.alternative === other.alternative
    );
  }
}

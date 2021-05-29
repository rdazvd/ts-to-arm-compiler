class Source {
  constructor(public string: string, public index: number) {}

  match(regExp: RegExp): ParseResult<string> | null {
    console.assert(regExp.sticky);
    regExp.lastIndex = this.index;
    let match = this.string.match(regExp);

    if (match) {
      let value = match[0];
      let newIndex = this.index + value.length;
      let source = new Source(this.string, newIndex);
      return new ParseResult(value, source);
    }
    return null;
  }
}

class ParseResult<T> {
  constructor(public value: T, public source: Source) {}
}

interface Parser<T> {
  parse(source: Source): ParseResult<T> | null;
}

class Parser<T> {
  constructor(public parse: (source: Source) => ParseResult<T> | null) {}
}

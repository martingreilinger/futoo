export abstract class Option<T> {

  public static of<T>(value: T): Option<T> {
    return value ? Option.Some.some(value) : Option.None.none();
  }

  public abstract isEmpty(): boolean;

  public isDefined(): boolean {
    return !this.isEmpty();
  }

  public abstract get(): T | null | undefined;

  public getOrElse(other: T): T {
    return this.isEmpty() ? other : this.get();
  }
}

// tslint:disable:no-internal-module no-namespace max-classes-per-file
export module Option {

  export class Some<T> extends Option<T> {

    public static some<T>(value: T): Some<T> {
      return new Some(value);
    }

    protected constructor(private value: T) {
      super();
    }

    public isEmpty(): boolean {
      return !Boolean(this.value);
    }

    public get(): T | null | undefined {
      return this.value;
    }
  }

  export class None<T> extends Option<T> {

    public static none<T>(): None<T> {
      return new None();
    }

    protected constructor() {
      super();
    }

    public get(): never {
      throw new Error('No value present');
    }
    public isEmpty(): boolean {
      return true;
    }
  }

}

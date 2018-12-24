export default class Vector2D {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public add(vector: Vector2D): Vector2D {
    return new Vector2D(this.x + vector.x, this.y + vector.y);
  }

  public subtract(vector: Vector2D): Vector2D {
    return new Vector2D(this.x - vector.x, this.y - vector.y);
  }

  public multiply(vector: Vector2D): Vector2D {
    return new Vector2D(this.x * vector.x, this.y * vector.y);
  }

  public divide(vector: Vector2D): Vector2D {
    return new Vector2D(this.x / vector.x, this.y / vector.y);
  }

  public get length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  public get bearing(): number {
    return Math.atan2(this.y, this.x) - (Math.PI / 2);
  }

  public get normalized(): Vector2D {
    const length = this.length;
    return new Vector2D(this.x / length, this.y / length);
  }

  public get copy(): Vector2D {
    return new Vector2D(this.x, this.y);
  }
}

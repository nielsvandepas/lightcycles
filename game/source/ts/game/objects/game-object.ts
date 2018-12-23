import FrameData from '../frame-data';
import Vector2D from '../vector-2d';

export default abstract class GameObject {
  private readonly birth: number;
  public position: Vector2D;
  public velocity: Vector2D;
  public size: Vector2D;

  constructor() {
    this.birth = new Date().getTime();
    this.position = new Vector2D(0, 0);
    this.velocity = new Vector2D(0, 0);
    this.size = new Vector2D(0, 0);
  }

  public abstract update(frame: FrameData): void;
  public abstract render(context: CanvasRenderingContext2D): void;

  public get age(): number {
    return new Date().getTime() - this.birth;
  }

  public abstract get isAlive(): boolean;
  public abstract get collidable(): boolean;
}

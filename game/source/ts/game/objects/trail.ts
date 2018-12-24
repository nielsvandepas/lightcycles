import Collidable from './collidable';
import FrameData from '../frame-data';
import GameObject from './game-object';
import Vector2D from '../vector-2d';

export default abstract class Trail extends GameObject implements Collidable {
  private color: string;

  constructor(position: Vector2D, color: string) {
    super();

    this.position = position;
    this.size = new Vector2D(10, 10);

    this.color = color;
  }

  public update(frame: FrameData): void {

  }

  public render(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
  }

  public collide(other: Collidable): void {

  }

  public get isAlive(): boolean {
    return true;
  }

  public get collidable(): boolean {
    return true;
  }
}

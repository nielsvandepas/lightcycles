import Collidable from './collidable';
import FrameData from '../frame-data';
import GameObject from './game-object';

export default abstract class Character extends GameObject implements Collidable {
  private alive: boolean;
  private readonly color: string;
  protected trail: boolean;
  protected readonly speed: number;

  constructor(color: string) {
    super();

    this.alive = true;
    this.trail = false;

    this.speed = 10;
    this.size.x = 10;
    this.size.y = 10;

    this.color = color;
  }

  public update(frame: FrameData): void {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  public render(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
  }

  public get isAlive(): boolean {
    return this.alive;
  }

  public get collidable(): boolean {
    return true;
  }

  public collide(other: Collidable): void {
    this.alive = false;
  }
}

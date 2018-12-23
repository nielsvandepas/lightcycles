import Collidable from './collidable';
import GameObject from './game-object';

export default abstract class Character extends GameObject implements Collidable {
  private alive: boolean;
  public trail: boolean;

  constructor() {
    super();

    this.alive = true;
    this.trail = false;

    this.size.x = 10;
    this.size.y = 10;
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

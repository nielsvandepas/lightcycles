import Collidable from './collidable';
import FrameData from '../frame-data';
import GameObject from './game-object';

export default abstract class Trail extends GameObject implements Collidable {
  constructor() {
    super();
  }

  public update(frame: FrameData): void {

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

import Character from './character';
import FrameData from '../frame-data';

export default class Enemy extends Character {
  constructor() {
    super('#df740c');

    this.position.x = window.innerWidth - this.size.x - 100;
    this.position.y = (window.innerHeight / 2) + this.size.y;
    this.velocity.x = -this.speed;
  }

  public update(frame: FrameData): void {
    super.update(frame);
  }
}

import Character from './character';
import FrameData from '../frame-data';

export default class Player extends Character {
  constructor() {
    super();

    this.position.x = 100;
    this.position.y = (window.innerHeight / 2) + this.size.y;
  }

  public update(frame: FrameData): void {

  }

  public render(context: CanvasRenderingContext2D): void {
    context.fillStyle = '#18CAE6';
    context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}

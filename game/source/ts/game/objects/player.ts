import Character from './character';
import FrameData from '../frame-data';
import Input from '../input/input';
import PlayerTrail from './player-trail';

export default class Player extends Character {
  constructor() {
    super('#6fc3df');

    this.position.x = 100;
    this.position.y = (window.innerHeight / 2) + this.size.y;
    this.velocity.x = this.speed;
  }

  public update(frame: FrameData): void {
    this.updateVelocity(frame.input);
    this.handleTrail(frame);
    super.update(frame);
  }

  private handleTrail(frame: FrameData) {
    if (frame.input.trail)
      this.trail = !this.trail;

    if (this.trail)
      frame.stageHand.add(new PlayerTrail(this.position.copy));
  }

  private updateVelocity(input: Input) {
    if (input.up) {
      this.velocity.x = 0;
      this.velocity.y = -this.speed;
    } else if (input.down) {
      this.velocity.x = 0;
      this.velocity.y = this.speed;
    } else if (input.left) {
      this.velocity.x = -this.speed;
      this.velocity.y = 0;
    } else if (input.right) {
      this.velocity.x = this.speed;
      this.velocity.y = 0;
    }
  }
}

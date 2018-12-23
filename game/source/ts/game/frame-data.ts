import Collidable from './objects/collidable';
import StageHand from './stage-hand';

export default interface FrameData {
  collidables: Collidable[];
  stageHand: StageHand
}

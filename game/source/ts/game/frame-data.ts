import Collidable from './objects/collidable';
import Input from './input/input';
import StageHand from './stage-hand';

export default interface FrameData {
  collidables: Collidable[];
  stageHand: StageHand;
  input: Input;
}

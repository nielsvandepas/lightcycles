import Trail from './trail';
import Vector2D from '../vector-2d';

export default class PlayerTrail extends Trail {
  constructor(position: Vector2D) {
    super(position, '#e6ffff');
  }
}

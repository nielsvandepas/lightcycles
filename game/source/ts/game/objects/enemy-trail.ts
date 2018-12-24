import Trail from './trail';
import Vector2D from '../vector-2d';

export default class EnemyTrail extends Trail {
  constructor(position: Vector2D) {
    super(position, '#ffe64d');
  }
}

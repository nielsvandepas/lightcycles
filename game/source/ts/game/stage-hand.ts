import Collidable from './objects/collidable';
import GameObject from './objects/game-object';

export default class StageHand {
  private items: GameObject[];

  constructor() {
    this.items = [];
  }

  public add(object: GameObject): void {
    this.items.push(object);
  }

  public clean(): void {
    this.items = this.items.filter(item => item.isAlive);
  }

  public get objects(): GameObject[] {
    return this.items.slice(0);
  }

  public get collidables(): Collidable[] {
    const collidables: Collidable[] = [];

    this.items.forEach(item => {
      if (this.isCollidable(item))
        collidables.push(item as Collidable);
    });

    return collidables;
  }

  private isCollidable(object: any): object is Collidable {
    if ('age' in object)
      return (object as GameObject).collidable;
    else
      return false;
  }
}

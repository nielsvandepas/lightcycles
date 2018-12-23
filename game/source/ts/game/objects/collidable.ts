export default interface Collidable {
  collide(other: Collidable): void;
}

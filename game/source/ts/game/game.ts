import Enemy from './objects/enemy';
import FrameData from './frame-data';
import Input from './input/input';
import StageHand from './stage-hand';
import Player from './objects/player';

export default class Game {
  private context: CanvasRenderingContext2D;
  private input: Input;
  private stageHand: StageHand;
  private thread: number;
  private threadStarted: boolean;
  private readonly frameRate: number;
  private previousFrame: number;

  constructor(context: CanvasRenderingContext2D, input: Input) {
    this.context = context;
    this.input = input;
    this.stageHand = new StageHand();

    this.loop = this.loop.bind(this);
    this.threadStarted = false;

    this.frameRate = 15;
    this.previousFrame = 0;

    this.setup();
  }

  public start(): void {
    if (!this.threadStarted) {
      this.armLoop();
      this.threadStarted = true;
    }
  }

  public stop(): void {
    if (this.threadStarted) {
      window.cancelAnimationFrame(this.thread)
      this.threadStarted = false;
    }
  }

  private setup(): void {
    this.stageHand.add(new Player());
    this.stageHand.add(new Enemy());
  }

  private loop(): void {
    const currentTime = Date.now();

    if (currentTime - this.previousFrame >= 1000 / this.frameRate) {
      this.previousFrame = currentTime;
      this.update();
      this.render();
    }

    this.armLoop();
  }

  private update(): void {
    // Delete all dead objects
    this.stageHand.clean();

    const frame: FrameData = {
      collidables: this.stageHand.collidables,
      stageHand: this.stageHand,
      input: this.input
    } as FrameData;

    this.stageHand.objects.forEach(object => object.update(frame));
  }

  private render(): void {
    this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    this.stageHand.objects.forEach(object => object.render(this.context));
  }

  private armLoop(): void {
    this.thread = window.requestAnimationFrame(this.loop);
  }
}

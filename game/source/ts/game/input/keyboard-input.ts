import Input from './input';

export default class KeyboardInput implements Input {
  private upPressed: boolean;
  private downPressed: boolean;
  private leftPressed: boolean;
  private rightPressed: boolean;
  private trailPressed: boolean;

  constructor() {
    this.upPressed = false;
    this.downPressed = false;
    this.leftPressed = false;
    this.rightPressed = false;
    this.trailPressed = false;

    this.handleKeyboard = this.handleKeyboard.bind(this);
    window.addEventListener('keydown', this.handleKeyboard);
  }

  private handleKeyboard(e: KeyboardEvent): void {
    switch (e.key) {
      case 'w':
        this.upPressed = true;
        break;
      case 's':
        this.downPressed = true;
        break;
      case 'a':
        this.leftPressed = true;
        break;
      case 'd':
        this.rightPressed = true;
        break;
      case ' ':
        this.trailPressed = true;
        break;
    }
  }

  public get up(): boolean {
    const latch = this.upPressed;
    this.upPressed = false;
    return latch;
  }

  public get down(): boolean {
    const latch = this.downPressed;
    this.downPressed = false;
    return latch;
  }

  public get left(): boolean {
    const latch = this.leftPressed;
    this.leftPressed = false;
    return latch;
  }

  public get right(): boolean {
    const latch = this.rightPressed;
    this.rightPressed = false;
    return latch;
  }

  public get trail(): boolean {
    const latch = this.trailPressed;
    this.trailPressed = false;
    return latch;
  }
}

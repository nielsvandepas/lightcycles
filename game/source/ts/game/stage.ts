export default class Stage {
  private parent: HTMLElement;
  private element: HTMLCanvasElement;
  private renderer: CanvasRenderingContext2D;

  constructor(parentSelector: string) {
    this.parent = document.querySelector<HTMLElement>(parentSelector);
    this.constructElement();

    this.setSize = this.setSize.bind(this);
    window.addEventListener('resize', this.setSize);
  }

  private constructElement(): void {
    this.element = document.createElement('canvas');
    this.element.classList.add('stage');
    this.renderer = this.element.getContext('2d');
    this.setSize();
    this.parent.appendChild(this.element);
  }

  private setSize(): void {
    const ratio = window.devicePixelRatio || 1;
    this.element.width = window.innerWidth * ratio;
    this.element.height = window.innerHeight * ratio;
    this.renderer.scale(ratio, ratio);
  }

  public destroy(): void {
    window.removeEventListener('resize', this.setSize);
    this.parent.removeChild(this.element);
  }

  public get canvas(): HTMLCanvasElement {
    return this.element;
  }

  public get context(): CanvasRenderingContext2D {
    return this.renderer;
  }
}

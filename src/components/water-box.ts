import { html, css, LitElement, customElement, property, PropertyValues } from 'lit-element';
import { dimension } from '../dom';
import renderer, { RenderingOptions } from '../renderer';

@customElement('water-box')
export default class WaterBox extends LitElement {
  width: number = 0;
  height: number = 0;

  @property({ type: Number })
  value: number = 50;

  @property({ type: String, attribute: 'stroke-color' })
  strokeColor: string = 'rgba(127,127,127,0.8)';

  @property({ type: Number, attribute: 'border-width' })
  strokeWidth: number = 1;

  @property({ type: String, attribute: 'fill-color' })
  fillColor: string = 'rgba(127,127,224,0.8)';

  @property({ type: String, attribute: 'box-color' })
  boxColor: string = 'rgba(128,128,128,0.4)';

  @property({ type: Number })
  separators: number = 5;

  @property({ type: Boolean, attribute: 'draw-top' })
  drawTop: boolean = false;

  @property({ type: Number })
  contrast: number = 20;

  static get styles() {
    return css`
      :host { display: block; width: 5rem; height: 7rem; overflow: hidden; }
    `;
  }

  constructor() {
    super();
    const observer = new (<any>window).ResizeObserver(() => this.requestUpdate());
    observer.observe(this);
  }

  update(changedProperties: PropertyValues) {
    this.width = dimension(this, 'width');
    this.height = dimension(this, 'height');
    return super.update(changedProperties);
  }

  render() {
    return html`<canvas width="${this.width}" height="${this.height}"></canvas>`;
  }

  updated() {
    if (this.shadowRoot !== null) {
      const canvas = <HTMLCanvasElement> this.shadowRoot.querySelector("canvas");
      if (canvas !== null) {
        const ctx = <CanvasRenderingContext2D> canvas.getContext("2d");
        const options: RenderingOptions = {
          width: this.width,
          height: this.height,
          strokeColor: this.strokeColor,
          fillColor: this.fillColor,
          boxColor: this.boxColor,
          strokeWidth: this.strokeWidth,
          separators: this.separators,
          drawTop: this.drawTop,
          contrast: this.contrast,
          value: this.value
        };
        renderer(ctx, options);
      }
    }
  }
}

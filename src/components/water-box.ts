import { html, LitElement, customElement, property } from 'lit-element';
import renderer, { OPTIONS, RenderingOptions } from '../renderer';

@customElement('water-box')
export default class WaterBox extends LitElement {

  @property({ type: Number })
  width = 320;

  @property({ type: Number })
  height = 320;

  @property({ type: Number })
  value = 50;

  @property({ type: String, attribute: 'border-color' })
  borderColor = 'rgba(127,127,127,0.8)';

  @property({ type: Number, attribute: 'border-width' })
  borderWidth = 1;

  @property({ type: String, attribute: 'fill-color' })
  fillColor = 'rgba(32,158,224,0.8)';

  @property({ type: String, attribute: 'background-color' })
  backgroundColor = 'rgba(128,128,128,0.4)';

  @property({ type: Number })
  separators = 5;

  @property({ type: Boolean, attribute: 'draw-top' })
  drawTop = false;

  @property({ type: Number })
  contrast = 20;

  render() {
    return html`<canvas width="${this.width}" height="${this.height}"></canvas>`;
  }

  updated() {
    if (this.shadowRoot !== null) {
      const canvas = <HTMLCanvasElement> this.shadowRoot.querySelector("canvas");
      if (canvas !== null) {
        const ctx = <CanvasRenderingContext2D> canvas.getContext("2d");
        const options = <RenderingOptions> OPTIONS.reduce((obj, option) => { obj[option] = this[option]; return obj; }, {});
        renderer(ctx, options);
      }
    }
  }
}

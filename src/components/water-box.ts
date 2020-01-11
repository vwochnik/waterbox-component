import { html, LitElement, customElement, property, css } from 'lit-element';
import renderer, { OPTIONS } from '../renderer';

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
  drawTop = true;

  render() {
    return html`<canvas width="${this.width}" height="${this.height}"></canvas>`;
  }

  updated() {
  	const canvas = this.shadowRoot.querySelector("canvas");
  	const ctx = canvas.getContext('2d');
    const options = OPTIONS.reduce((obj, option) => { obj[option] = this[option]; return obj; }, {});
  	renderer(ctx, options);
  }
}

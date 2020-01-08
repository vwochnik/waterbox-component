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

  @property({ type: String })
  borderColor = 'black'

  @property({ type: Number })
  borderWidth = 1;

  @property({ type: String })
  fillColor = 'black'

  @property({ type: String })
  backgroundColor = 'black'

  @property({ type: Number })
  separators = 5;

  @property({ type: Boolean })
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

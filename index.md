---
layout: default
---
> A simple web component displaying an isometric water box.

## Installation

You can use NPM to install this component.

```
npm i --save waterbox-component
```

## Usage

To use this web component in your project you can utilize one of the following styles of syntax.

```
/* In an existing module / web component */
import 'waterbox-component';
/* At top of an application */
<script type="module" src="node_modules/waterbox-component/dist/bundle.js"></script>
/* Alternatives for top of application */
<script type="module">
  import 'waterbox-component';
</script>
```

You can now use the component in your HTML:

```
<water-box value="50"></water-box>
```

This component is responsive. Simply set its `width` and `height` via CSS.

```
water-box {
  width: 100px;
  height: 180px;
}
```

## Properties

<table>
	<tr>
		<th>Property</th>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
		<th>Example</th>
	</tr>
	<tr>
		<td><code>value</code></td>
		<td><code>value</code></td>
		<td>Number</td>
		<td>Percentual level of water.</td>
		<td><code>50</code></td>
	</tr>
	<tr>
		<td><code>strokeColor</code></td>
		<td><code>stroke-color</code></td>
		<td>String</td>
		<td>Stroke color.</td>
		<td><code>rgba(64,64,64,0.8)</code></td>
	</tr>
	<tr>
		<td><code>fillColor</code></td>
		<td><code>fill-color</code></td>
		<td>String</td>
		<td>Water fill color.</td>
		<td><code>rgba(192,192,225,0.8)</code></td>
	</tr>
	<tr>
		<td><code>boxColor</code></td>
		<td><code>box-color</code></td>
		<td>String</td>
		<td>Box fill color.</td>
		<td><code>rgba(127,127,127,0.8)</code></td>
	</tr>
	<tr>
		<td><code>strokeWidth</code></td>
		<td><code>stroke-width</code></td>
		<td>Number</td>
		<td>Stroke width.</td>
		<td><code>2</code></td>
	</tr>
	<tr>
		<td><code>separators</code></td>
		<td><code>separators</code></td>
		<td>Number</td>
		<td>Number of scale separators.</td>
		<td><code>5</code></td>
	</tr>
	<tr>
		<td><code>drawTop</code></td>
		<td><code>draw-top</code></td>
		<td>Boolean</td>
		<td>Whether to draw the box ceiling.</td>
		<td><code>true</code></td>
	</tr>
	<tr>
		<td><code>contrast</code></td>
		<td><code>contrast</code></td>
		<td>Number</td>
		<td>Color contrast.</td>
		<td><code>15</code></td>
	</tr>
</table>

## License

MIT

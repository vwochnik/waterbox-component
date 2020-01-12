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

If not done by your bundler, load the component:

```
<script type="module" src="node_modules/waterbox-component/dist/bundle.js"></script>
```

You can now use the component in your HTML:

```
<water-box value="50"></water-box>
```

## Dimensions

This component is responsive. Simply set its `width` and `height` via CSS.

```
water-box {
  width: 100px;
  height: 180px;
}
```

## Properties / Attributes

## `value` / `value` (Number)
Percentual fill level of water. Example: `50`

## `strokeColor` / `stroke-color` (String)
Stroke color of box. Example: `rgba(0,0,0,0.5)`

## `fillColor` / `fill-color` (String)
Fill color of water. Example: `rgba(127,127,192,0.8)`

## `boxColor` / `box-color` (String)
Fill color of box. Example: `rgba(127,127,127,0.6)`

## `strokeWidth` / `stroke-width` (Number)
Width of strokes in pixels. Example: `2`

## `separators` / `separators` (Number)
Number of separators. Example: `5`

## `drawTop` / `draw-top` (Boolean)
Whether to draw the top rhombus of box. Example: `true`

## `contrast` / `contrast` (Number)
Contast of light/dark colors. Example: `10`

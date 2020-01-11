<div align="center">
<h1>Waterbox Component</h1>

![Waterbox](preview.png?raw=true "Waterbox")
</div>

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
<water-box width="100" height="150" value="50"></water-box>
```

## Properties / Attributes

## `width` / `width` (Number)
Width of component in pixels. Example: `100`

## `height` / `height` (Number)
Height of component in pixels. Example: `200`

## `value` / `value` (Number)
Percentual fill level of water. Example: `50`

## `borderColor` / `border-color` (String)
Stroke color of box. Example: `rgba(0,0,0,0.5)`

## `fillColor` / `fill-color` (String)
Fill color of water. Example: `rgba(127,127,192,0.8)`

## `backgroundColor` / `background-color` (String)
Fill color of box. Example: `rgba(127,127,127,0.6)`

## `borderWidth` / `border-width` (Number)
Width of borders in pixels. Example: `2`

## `separators` / `separators` (Number)
Number of separators. Example: `5`

## `drawTop` / `draw-top` (Boolean)
Whether to draw the top rhombus of box. Example: `true`

## `contrast` / `contrast` (Number)
Contast of light/dark colors. Example: `10`

export function dimension(el: HTMLElement, dim: string): number {
  try {
    return parseInt(window.getComputedStyle(el, null).getPropertyValue(dim));
  } catch(e) {
    return parseInt((<any>el).currentStyle[dim]);
  } 
}

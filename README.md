<p align="center">
  <img src="/../repo-assets/images/raf-bounce-readme.png" width="200" style="text-align: center" alt="RafBounce Logo"/>
</p>

# RafBounce
Creates a debounced function throttled by `requestAnimationFrame`.

## Why
Useful for implementing behavior that should only happen when the browser is ready, and after a repeated action has completed.
Instead of forcing a browser repaint when the browser isn't ready (set intervals), this library will perform actions as fast as the browser allows.
Another `requestAnimationFrame` call will not be made until the last execution has finished.

## Installation

via npm

```bash
npm install raf-bounce --save
```

## Example
```javascript
let rafBounce = require('raf-bounce');

window.addEventListener('resize', rafBounce(onResize));

function onResize() {
	console.log('width', window.innerWidth);
	console.log('height', window.innerHeight);
}
```

# dok-fps
A frameRate tracker (returns frame per second). It can be used using your own looping system (it doesn't require usage of requestAnimationFrame).

_________

Use in browser or Node.JS to calculate the frame rate. On each frame, call the `tick` method.

Usage:

```javascript
const fpsDiv = document.getElementById("fps");
//	in your game loop
refresh() {
 	//... 
  fps.innerText = FPSTracker.tick();
  requestAnimationFrame(refresh);
}
```

This is the simplest way to use FPSTracker. Just print the frame rate every time.

You can also check the frame rate separately:

```javascript
refresh() {
  //...
  FPSTracker.tick();
  requestAnimationFrame(refresh);
}
//	then separately:
console.log(FPSTracker.frameRate);
```

FPSTracker is instantiable. In that case, you can have an FPSTracker that ticks independently from the FPSTracker main instance. Use the same methods on it:

```javascript
const fps = new FPSTracker();
//...
fps.tick();
//....
show(fps.frameRate);
```


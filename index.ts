/// Function that generates rgba-strings
export const R = (r: number,g: number,b: number,a?: number) => {
  a = a === undefined ? 1 : a
  return "rgba("+(r|0)+","+(g|0)+","+(b|0)+","+a+")"
}

/// Shorthand for Math.sin
export const S = Math.sin
/// Shorthand for Math.cos
export const C = Math.cos
/// Shorthand for Math.tan
export const T = Math.tan

/// Shorthand for Math.PI
export const PI = Math.PI

// note: really it should be called like function u(t) { code } instead of u((t) => { code }) but I don't think there are workarounds
// u(t) is called 60 times per second
/// t: Elapsed time in seconds
export function u(f: (t) => void) {
  let i = -1
  setInterval(() => f(i++),1000/60)
}

/// c: 1920x1080 canvas
export const c = document.createElement('canvas')
c.width=1920
c.height=1080
document.body.appendChild(c)

//x: 2D or webgl context for that canvas
export const x = c.getContext("2d")

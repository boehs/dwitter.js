/// Function that generates rgba-strings
export const R = (r: number,g: number,b: number,a?: number) => {
  a = a === undefined ? 1 : a
  return "rgba("+(r|0)+","+(g|0)+","+(b|0)+","+a+")"
}

/// Shorthand for Math.sin
export const S = (n: number) => Math.sin(n)
/// Shorthand for Math.cos
export const C = (n: number) => Math.cos(n)
/// Shorthand for Math.tan
export const T = (n: number) => Math.tan(n)

/// Shorthand for Math.PI
export const PI = Math.PI

//u(t) is called 60 times per second
//t: Elapsed time in seconds
//c: 1920x1080 canvas
//x: 2D or webgl context for that canvas

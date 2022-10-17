/// Function that generates rgba-strings
export const R = (r,g,b,a)=>(a =(a === undefined ? 1 : a),"rgba("+(r|0)+","+(g|0)+","+(b|0)+","+a+")")

/// Shorthand for Math.sin
export const S = n => Math.sin(n)
/// Shorthand for Math.cos
export const C = n => Math.cos(n)
/// Shorthand for Math.tan
export const T = n => Math.tan(n)

/// Shorthand for Math.PI
export const PI = Math.PI

//u(t) is called 60 times per second
//t: Elapsed time in seconds
//c: 1920x1080 canvas
//x: 2D or webgl context for that canvas

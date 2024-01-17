import { DrawBezier } from "./funcs"

export const letters: {
    [key: string]: string |
    ((org: Point, scl: number) => void) |
    any
} = {

    // some of these instructions could definitely be minified. I will most
    // likely submit a second pr to fix some of these later

    // todo unterrible letter instructions

    a: `sa$90,f$2,r$90,f$2,r$90,f$2,u,sa$90,f$2,d,l$30,f$2,l$120,f$2`,
    b: `sa$90,f$4,r$90,f$1,arc$180:1,f$1,r$180,f$1,arc$180:1,f$1`,
    c: `sa$90,u,r$90,f$2,r$180,d,arc$180:2`,
    d: `sa$90,f$4,r$90,arc$180:2`,
    e: `sa$90,f$4,r$90,f$2,u,f$-2,r$90,f$2,l$90,d,f$2,u,f$-2,r$90,f$2,l$90,d,f$2`,
    f: `sa$90,f$4,r$90,f$2,u,f$-2,r$90,f$2,l$90,d,f$2`,
    g: `u,f$1,sa$90,f$2,r$90,d,arc$270:1,r$180,f$2,arc$90:1`,
    h: `sa$90,f$4,u,f$-2,r$90,d,f$2,u,l$90,f$-2,d,f$4`,
    i: `f$2,u,f$-1,l$90,d,f$4,r$90,u,f$-1,d,f$2`,
    j: `sa$90,u,f$4,r$90,d,f$2,u,f$-1,r$90,d,f$3,arc$90:1`,
    k: `sa$90,f$4,u,f$-2,r$45,d,f$2.75,u,f$-2.75,r$90,d,f$2.75`,
    l: `sa$90,u,f$4,r$180,d,f$4,l$90,f$2`,
    m: `sa$90,f$4,sa$0,r$71.57,f$3.162,sa$0,l$71.57,f$3.162,sa$0,r$90,f$4`,
    n: `sa$90,f$4,r$153.43,f$4.47,l$153.43,f$4`,
    o: `sa$90,u,f$1,d,f$2,arc$180:1,f$2,arc$180:1`,
    p: `sa$90,f$4,r$90,f$1,arc$180:1,f$1`,
    q: `sa$90,u,f$1,d,f$2,arc$180:1,f$2,arc$180:1,u,r$90,f$1,r$45,d,f$1.414`,
    r: `sa$90,f$4,r$90,f$1,arc$180:1,f$1,sa$-45,f$2.8284`,
    s: `f$1,arc$-180:1,arc$180:1,f$1`,
    t: `u,f$1,sa$90,d,f$4,u,r$90,f$-1,d,f$2`,
    u: `sa$90,u,f$4,sa$-90,d,f$3,arc$-180:1,f$3`,
    v: `sa$90,u,f$4,r$165.96,d,f$4.12,l$151.93,f$4.12`,
    w: `sa$90,u,f$4,sa$0,r$82.87,d,f$4.03,sa$0,l$63.43,f$1.12,sa$0,r$63.43,f$1.12,sa$0,l$82.87,f$4.03`,
    x: `sa$90,u,f$4,r$153.44,d,f$4.47,u,l$153.44,f$4,l$153.44,d,f$4.47`,
    y: `u,f$1,sa$90,d,f$2.5,r$33.69,f$1.8,u,f$-1.8,l$67.38,d,f$1.8`,
    z: `u,f$2,d,f$-2,l$63.44,f$4.47,r$63.44,f$-2`,

    ["0"]: `sa$90,u,f$1,d,f$2,arc$180:1,f$2,arc$180:1,u,f$2,arc$45:1,sa$-66.80,d,f$3.675`,
    ["1"]: (origin, scale) => DrawBezier(
      origin,
      -106,
      scale,
      bezierEasing(0.026, [0.984,-1.000], [1.000,1.000], 0.9561),
      [2.0, -0.47],
      `f$2,u,f$-1,sa$90,d,f$4,l$90`
    ),
    ["2"]: `u,f$2,r$180,d,f$2,sa$90,arc$90:1,r$180,arc$-90:1,r$180,f$1,arc$-180:1`,
    ["3"]: `sa$90,u,f$4,r$90,d,f$1,arc$180:1,f$1,r$180,f$1,arc$180:1,f$1`,
    ["4"]: `u,f$2,sa$90,f$1,l$90,d,f$2,r$116.57,f$3.35,sa$-90,f$4`,
    ["5"]: `u,sa$90,f$1,r$180,d,arc$-180:1,f$1,arc$-90:1,r$180,arc$90:1,sa$0,f$2`,
    ["6"]: (origin, scale) => DrawBezier(
        origin,
        74,
        scale,
        bezierEasing(-0.018, [0.054,-0.373], [1.000,-0.758], 0.9181),
        [3.2, -0.36],
        `u,sa$90,f$1,d,arc$360:1`
    ),
    ["7"]: (origin, scale) => DrawBezier(
        origin,
        245,
        scale,
        bezierEasing(-0.005, [0.000,-0.149], [0.000,1.000], 0.2060),
        [4.5, -0.59],
        `u,sa$90,f$4,r$90,d,f$2`
    ),
    ["8"]: `u,f$1,d,arc$-180:1,arc$360:1,arc$-180:1`,
    ["9"]: (origin, scale) => DrawBezier(
        origin,
        -107,
        scale,
        bezierEasing(-0.018, [0.054,-0.373], [1.000,-0.758], 0.9181),
        [3.2, -0.36],
        `u,sa$90,f$4,r$90,f$1,d,arc$360:1,u,arc$90:1,d`
    ),

    ["."]: `sa$90,u,f$.75,r$90,f$1,d,arc$360:.25`,
    [","]: `sa$90,u,f$.5,r$90,f$1,r$90,d,arc$90:.25`,
    ["?"]: `sa$90,u,f$.75,r$90,f$1,d,arc$360:.25,l$90,u,f$.25,d,f$1,r$90,arc$-270:1`,
    ["!"]: `sa$90,u,f$.75,r$90,f$1,d,arc$360:.25,l$90,u,f$.25,d,f$3`,
    ["+"]: `sa$90,u,f$2,r$90,d,f$2,u,f$-1,l$90,f$-1,d,f$2`,
    ["-"]: `sa$90,u,f$2,r$90,d,f$2`,
    ["*"]: `sa$90,u,f$2,r$90,f$1,l$90,f$-1,d,f$2,u,f$-1,r$60,f$-1,d,f$2,u,f$-1,r$60,f$-1,d,f$2`,
    ["/"]: `l$63.43,f$4.47`,
    ["="]: `sa$90,u,f$1.5,r$90,d,f$2,u,l$90,f$1,l$90,d,f$2`,
    ["$"]: `f$1,arc$-180:1,arc$180:1,f$1,u,f$-1,r$90,d,f$4`,
    [":"]: `sa$90,u,f$.75,r$90,f$1,d,arc$360:.25,l$90,u,f$2.5,d,r$90,arc$360:.25`,
    [";"]: `sa$90,u,f$.25,r$90,f$1,r$90,d,arc$90:.25,u,arc$270:.25,r$180,f$3,d,r$90,arc$-360:.25`,
    ["("]: `u,f$1.25,r$180,d,arc$90:.5,r$180,f$3,arc$90:.5`,
    [")"]: `u,f$.75,d,arc$-90:.5,r$180,f$3,arc$-90:.5`,
    ["["]: `u,f$1.5,r$180,d,f$1,r$90,f$4,r$90,f$1`,
    ["]"]: `u,f$.5,d,f$1,l$90,f$4,l$90,f$1`,
    ["#"]: `sa$90,u,f$1.5,r$90,d,f$2,u,l$90,f$1,l$90,d,f$2,u,r$90,f$.5,r$90,f$.5,r$90,d,f$2,u,l$90,f$1,l$90,d,f$2`,
    ["%"]: `sa$90,u,f$2,r$45,d,f$2.83,u,l$45,f$-1.5,d,arc$-360:.5,u,f$1.5,l$90,f$1.5,d,arc$-360:.5`,
    ["_"]: `f$2`,
    ["|"]: `u,f$1,sa$90,d,f$4`,
    ["\\"]: `u,f$4,r$153.43,d,f$4.47`,
    ["\""]: `u,f$.5,sa$90,f$3,d,f$1,u,r$90,f$1,r$90,f$1`,
    ["'"]: `u,f$1,sa$90,f$3,d,f$1`,
    [">"]: `sa$90,u,f$1,r$63.43,d,f$2.24,l$127,f$2.24`, // redo
    ["<"]: `u,f$2,sa$90,f$1,l$63.43,d,f$2.24,r$127,f$2.24`,
    
    // specials
    [" "]: ``,
    ["\r"]: ``,
    ["\n"]: ``,
}

export const allLetters = Object.keys(letters).join("")

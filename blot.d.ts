declare global {
    type Point = [number,number]
    type Polyline = Array<Point>
    function createTurtle(start?:Point):Turtle
    function setDocDimensions(x:number,y:number):void
    class Turtle {
        constructor(start?:Point)
        drawing: boolean
        position: Point
        angle: number
        path: Polyline[]
        style: {
          fill: string,
          stroke: string,
        }
        
        lt:Point
        ct:Point
        rt:Point
        lc:Point
        cc:Point
        rc:Point
        lb:Point
        cb:Point
        rb:Point
        start:Point

        up():void
        down():void
        goTo(pnt:Point):void
        forward(dist:number):void
        arc(ang:number,dist:number):void
        jump(pnt:Point):void
        setAngle(theta:number):void
        right(theta:number):void
        left(theta:number):void
        translate(to:Point):void
        rotate(ang:number,org:Point):void
        scale(org?:Point):void
        fromSVG(svgData:string):void
        join(turt:Turtle):void
        iteratePath(fn:any):void
        resample(res:number):void
        interpolate(value:number):void
        getAngle(value:number):void
        warp(fn:(any)=>void):void
    }
    function drawTurtles(trtls:Array<Turtle>):void
    function rand():void
    function setRandSeed(seed:number):void
    function randInRange(min:number,max:number):void
    function randIntInRange(min:number,max:number):void
    function noise(xyz:[number,number?,number?],config:{octaves:number,falloff:number}):void
    function bezierEasing(mX1:number,mY1:Point,mX2:Point,mY2:number):any
}

export {}
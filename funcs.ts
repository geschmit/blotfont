import { RunInstructions } from "./instructions"
import { allLetters, letters } from "./letters"

/**
 * Useful function for drawing a debug grid.
 */
export const Gridlines = ():void => {
    const turtle = createTurtle()
    for (let i=5; i<=10; i++) {
        turtle.setAngle(0)
        turtle.jump([0,100*i])
        turtle.forward(1000)
        turtle.setAngle(90)
        turtle.jump([100*i,0])
        turtle.forward(1000)
    }
    drawTurtles([turtle])
    return
}

/**
 * Ease-of-access func for drawing bezier curves.
 * @param org
 * @param bezfunc 
 * @param scaleX 
 * @param scaleY 
 * @param instructions 
 */
export const DrawBezier = (org:Point,ang:number,scale:number,bezfunc:any,curveSizes:Point,instructions?:string):void => {
    const turtle = createTurtle(org)
    if (instructions) {
        turtle.jump(RunInstructions(instructions,org,scale))
    }

    turtle.setAngle(ang)
    turtle.forward(curveSizes[0]*scale)
    turtle.resample(0.1)
    turtle.warp(x=>bezfunc(x)*curveSizes[1]*scale)
    
    drawTurtles([turtle])
    return
}

/**
 * Parse & draw text onto the screen.
 * @param text 
 * @param org 
 * @param spacing 
 * @returns 
 */
export const DrawText = (text:string,org:Point,scale:number = 100,spacing:Point = [2.5,4.5]):void => {
    let xInd = 0
    let yInd = 0
    for (const x of text.toLowerCase()) {
        if (allLetters.indexOf(x,0) == -1) {
            // no instructions for symbol
            RunInstructions(
                letters["?"],
                [
                    org[0] + (xInd*spacing[0]*scale),
                    org[1] - (yInd*spacing[1]*scale),
                ],scale)
        } else {
            switch (x) {
                case "\r":
                    xInd = 0
                    continue

                case "\n":
                    xInd = 0
                    yInd += 1
                    continue

                default:
                    if (typeof letters[x] == "string") {
                        // basic symbols(no bezier)
                        RunInstructions(
                            letters[x],
                            [
                                org[0] + (xInd*spacing[0]*scale),
                                org[1] - (yInd*spacing[1]*scale),
                            ],scale)
                    } else if (typeof letters[x] == "function") {
                        // advanced symbols(probs bezier involved)
                        letters[x]([
                            org[0] + (xInd*spacing[0]*scale),
                            org[1] - (yInd*spacing[1]*scale),
                        ],scale)
                    }
                    break;

            }
            xInd += 1
            continue
        }

    }
    return
}
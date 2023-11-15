# BlotFont - Text for the Blot plotter

## What is this?
This is a library I created for my submission bid for a Hack Club "Blot", 2D pen plotter. It is a programatically usable plotter, meaning you can write code to move the pen to draw shapes and other objects.
In my case, I wanted an easy way to draw text- of which(as of writing), Blot's core code is unable to do. Enter BlotFont, a set of tools useful for converting pen movements and scaling them accordingly to how you wish to draw shapes, glyphs and other objects on the Blot.

## How does it work?
BlotFont was created in 3 steps - drawing, converting and processing.
### Step 1 - Draw the shapes
For each of the letters Blot can write with, I first hand-graphed them out on graph paper in a 2x4 grid per each symbol:
`todo: add img`

### Step 2 - Convert the shapes
Each letter had to be converted into either instruction code, bezier curve, or both- this painstakingly was done with each individual character on the sheet, which took me around a combined 4-5 hours over 2 days.

### Step 3 - Process the instructions
The instruction parser functions like a virtual Blot- it processes inputs the same way as tossing it functions, which is more or less what is occuring. The converted instruction code is now easily understood by the plotter, which allows it to draw the previously graphed lines, curves and shapes.
```js
// Instructions for "p":
// [sa$90,f$4,r$90,f$1,arc$180,1,f$1]
//      |
//      V

const turtle = createTurtle()
turtle.setAngle(90)
turtle.forward(4)
turtle.right(90)
turtle.forward(1)
turtle.arc(180,1)
turtle.forward(1)

// The drawing will be too small to see; the library asks for scaling as an argument when drawing.
drawTurtles([turtle]) 
```

## What did you use for the letter inspiration?
Many of the symbols, especially the numbers were based off of rare Nixie tubes, including the IN-18, IN-2 and ZM1220.
`todo: add phot`



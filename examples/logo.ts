

// esbuild --outfile=logo.js --bundle examples/logo.ts 
import { DrawText } from "../funcs"

setDocDimensions(1000,1000)

DrawText("BLOT", [50, 268], 50)
DrawText("FONT", [50, 50], 50)
DrawText("012345\nABCDEF\n()[]<>\n?!.,*#", [735, 890], 15)
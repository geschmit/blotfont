(() => {
  // instructions.ts
  var ParseCoords = (cstr, multScale = 1) => {
    const coordArray = [];
    for (const x of cstr.split(":")) {
      if (parseFloat(x)) {
        coordArray.push(parseFloat(x));
      }
    }
    return coordArray;
  };
  var RunInstructions = (inst, org, scale = 1) => {
    const turtle = createTurtle(org);
    for (const x of inst.split(",")) {
      const cmd = x.split("$")[0];
      const args = x.split("$")[1];
      let data;
      switch (cmd) {
        case "u":
          turtle.up();
          break;
        case "d":
          turtle.down();
          break;
        case "f":
          turtle.forward(parseFloat(args) * scale);
          break;
        case "arc":
          data = ParseCoords(args);
          turtle.arc(data[0], data[1] * scale);
          break;
        case "jmp":
          data = ParseCoords(args);
          turtle.jump(data);
          break;
        case "sa":
          turtle.setAngle(parseFloat(args));
          break;
        case "l":
          turtle.left(parseFloat(args));
          break;
        case "r":
          turtle.right(parseFloat(args));
          break;
        default:
          break;
      }
    }
    drawTurtles([turtle]);
    return turtle.position;
  };

  // letters.ts
  var letters = {
    // some of these instructions could definitely be minified. I will most
    // likely submit a second pr to fix some of these later
    // todo unterrible letter instructions
    a: `sa$90,f$2,r$90,f$2,r$90,f$2,u,sa$90,f$2,d,l$30,f$2,l$120,f$2`,
    b: `sa$90,f$4,r$90,f$1,arc$180:1,f$1,r$180,f$1,arc$180:1,f$1`,
    c: `sa$90,u,r$90,f$2,r$180,d,arc$180:2`,
    d: `sa$90,f$4,r$90,arc$180:2`,
    e: `sa$90,f$4,r$90,f$2,u,f$-2,r$90,f$2,l$90,d,f$2,u,f$-2,r$90,f$2,l$90,d,f$2`,
    f: `sa$90,f$4,r$90,f$2,u,f$-2,r$90,f$2,l$90,d,f$2`,
    g: `u,f$1,sa$90,f$2,r$90,d,arc$270:1,f$2,arc$90:1`,
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
      bezierEasing(0.026, [0.984, -1], [1, 1], 0.9561),
      [2, -0.47],
      `f$2,u,f$-1,sa$90,d,f$4,l$90`
    ),
    ["2"]: `u,f$2,r$180,d,f$2,sa$90,arc$90:1,arc$-90:1,f$1,arc$-180:1`,
    ["3"]: `sa$90,u,f$4,r$90,d,f$1,arc$180:1,f$1,r$180,f$1,arc$180:1,f$1`,
    ["4"]: `u,f$2,sa$90,f$1,l$90,d,f$2,r$116.57,f$3.35,sa$-90,f$4`,
    ["5"]: `u,sa$90,f$1,r$180,d,arc$-180:1,f$1,arc$-90:1,arc$90:1,sa$0,f$2`,
    ["6"]: (origin, scale) => DrawBezier(
      origin,
      74,
      scale,
      bezierEasing(-0.018, [0.054, -0.373], [1, -0.758], 0.9181),
      [3.2, -0.36],
      `u,sa$90,f$1,d,arc$360:1`
    ),
    ["7"]: (origin, scale) => DrawBezier(
      origin,
      245,
      scale,
      bezierEasing(-5e-3, [0, -0.149], [0, 1], 0.206),
      [4.5, -0.59],
      `u,sa$90,f$4,r$90,d,f$2`
    ),
    ["8"]: `u,f$1,d,arc$-180:1,arc$360:1,arc$-180:1`,
    ["9"]: (origin, scale) => DrawBezier(
      origin,
      -107,
      scale,
      bezierEasing(-0.018, [0.054, -0.373], [1, -0.758], 0.9181),
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
    ["("]: `u,f$1.25,r$180,d,arc$90:.5,f$3,arc$90:.5`,
    [")"]: `u,f$.75,d,arc$-90:.5,f$3,arc$-90:.5`,
    ["["]: `u,f$1.5,r$180,d,f$1,r$90,f$4,r$90,f$1`,
    ["]"]: `u,f$.5,d,f$1,l$90,f$4,l$90,f$1`,
    ["#"]: `sa$90,u,f$1.5,r$90,d,f$2,u,l$90,f$1,l$90,d,f$2,u,r$90,f$.5,r$90,f$.5,r$90,d,f$2,u,l$90,f$1,l$90,d,f$2`,
    ["%"]: `sa$90,u,f$2,r$45,d,f$2.83,u,l$45,f$-1.5,d,arc$-360:.5,u,f$1.5,l$90,f$1.5,d,arc$-360:.5`,
    ["_"]: `f$2`,
    ["|"]: `u,f$1,sa$90,d,f$4`,
    ["\\"]: `u,f$4,r$153.43,d,f$4.47`,
    ['"']: `u,f$.5,sa$90,f$3,d,f$1,u,r$90,f$1,r$90,f$1`,
    ["'"]: `u,f$1,sa$90,f$3,d,f$1`,
    [">"]: `sa$90,u,f$1,r$63.43,d,f$2.24,l$127,f$2.24`,
    // redo
    ["<"]: `u,f$2,sa$90,f$1,l$63.43,d,f$2.24,r$127,f$2.24`,
    // specials
    [" "]: ``,
    ["\r"]: ``,
    ["\n"]: ``
  };
  var allLetters = Object.keys(letters).join("");

  // funcs.ts
  var DrawBezier = (org, ang, scale, bezfunc, curveSizes, instructions) => {
    const turtle = createTurtle(org);
    if (instructions) {
      turtle.jump(RunInstructions(instructions, org, scale));
    }
    turtle.setAngle(ang);
    turtle.forward(curveSizes[0] * scale);
    turtle.resample(0.1);
    turtle.warp((x) => bezfunc(x) * curveSizes[1] * scale);
    drawTurtles([turtle]);
    return;
  };
  var DrawText = (text, org, scale = 100, spacing = [2.5, 4.5]) => {
    let xInd = 0;
    let yInd = 0;
    for (const x of text.toLowerCase()) {
      if (allLetters.indexOf(x, 0) == -1) {
        RunInstructions(
          letters["?"],
          [
            org[0] + xInd * spacing[0] * scale,
            org[1] - yInd * spacing[1] * scale
          ],
          scale
        );
      } else {
        switch (x) {
          case "\r":
            xInd = 0;
            continue;
          case "\n":
            xInd = 0;
            yInd += 1;
            continue;
          default:
            if (typeof letters[x] == "string") {
              RunInstructions(
                letters[x],
                [
                  org[0] + xInd * spacing[0] * scale,
                  org[1] - yInd * spacing[1] * scale
                ],
                scale
              );
            } else if (typeof letters[x] == "function") {
              letters[x]([
                org[0] + xInd * spacing[0] * scale,
                org[1] - yInd * spacing[1] * scale
              ], scale);
            }
            break;
        }
        xInd += 1;
        continue;
      }
    }
    return;
  };

  // main.ts
  setDocDimensions(1e3, 1e3);
  var hcFlag = createTurtle().fromSVG(String.raw`<svg fill="none" height="158" viewBox="0 0 280 158" width="280" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 0h280v157.5h-280z"/></clipPath><mask id="b" fill="#fff"><path clip-rule="evenodd" d="m119.139 32.1697c1.704-.2978 26.048-3.4959 61.254 38.26 33.255 39.4423 86.743 34.9053 96.572 33.6093.326-.044.571.555.314.759l-14.498 11.557c-.228.182-.188.54.077.663 1.996.933 8.965 4.169 16.855 7.598.327.141.345.595.008.712-7.507 2.598-60.039 19.928-89.231 6.781-31.489-14.184-45.229-29.22-62.86-43.852-17.362-14.4078-27.591-21.7065-40.63-25.1565 0 0 24.99-23.6826 30.843-29.6253.818-.8304 1.288-1.304 1.296-1.3055z" fill="#fff" fill-rule="evenodd"/></mask><g clip-path="url(#a)"><path clip-rule="evenodd" d="m5.45606 0s-.3039 2.70449-.69789 7.14273c-1.40365 15.81157-3.950845 53.62777 2.0254 69.55647 7.65373 20.3998 19.87993 21.2998 19.87993 21.2998s60.6336-40.9996 60.3354-39.6996-.994-5-7.952-16.6998c-6.958-11.6999-7.0163-35.89966-7.0163-41.5996" fill="#fff" fill-rule="evenodd"/><path d="m5.3201 0s-6.14102 56.2994 1.55887 76.6992c7.69983 20.3998 23.76283 22.8606 23.76283 22.8606s59.041-33.1191 58.0006-38.9253c-1.0405-5.8063-4.0043-11.2981-11.0042-22.9979-6.9999-11.6999-5.0689-31.93666-5.0689-37.6366" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><g clip-rule="evenodd" fill-rule="evenodd"><path d="m88.0918 59.7661c-3.0082-3.4742-9.0999-11.1999-38.3995 5.9999s-25.8996 30.0997-22.4997 32.3996c3.4 2.3004 11.0999 5.6004 41.0994-6.5999 29.9996-12.1998 22.808-28.3254 19.7998-31.7996z" fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><path d="m119.139 32.1697c1.704-.2978 26.048-3.4959 61.254 38.26 33.255 39.4423 86.743 34.9053 96.572 33.6093.326-.044.571.555.314.759l-14.498 11.557c-.228.182-.188.54.077.663 1.996.933 8.965 4.169 16.855 7.598.327.141.345.595.008.712-7.507 2.598-60.039 19.928-89.231 6.781-31.489-14.184-45.229-29.22-62.86-43.852-17.362-14.4078-27.591-21.7065-40.63-25.1565 0 0 24.99-23.6826 30.843-29.6253.818-.8304 1.288-1.304 1.296-1.3055z" fill="#000" mask="url(#b)" stroke="#000" stroke-width="6"/><path d="m127.091 44.6187c-1.695 2.4865-4.703 6.7147-9.333 11.8439-8.312 7.7619-.78 9.2777 2.965 6.1841 2.148-1.6722 4.413-3.5167 4.413-3.5167l5.077 5.1171s-1.753 2.5723-3.299 4.6566c-4.629 5.1296 1.315 6.9412 4.866 3.2105 1.718-1.9668 9.226-10.0284 12.381-14.6588 2.79-2.6158-.473-7.6215-4.892-3.3544-1.972 1.4153-5.662 4.798-5.662 4.798s-4.224-4.1537-4.193-4.3838c.034-.6052 1.255-1.6559 1.842-2.8884 3.57-8.7489-1.886-10.3521-4.165-7.0081z" fill="#fff"/><path d="m150.596 63.9066c2.963-2.4063 4.991-2.12 6.261-1.3775.555.3069.81 1.8293.902 3.223-1.376 8.2851-11.019 20.3188-12.052 20.9539-3.69 2.4891-7.145.1475-4.042-2.9393 1.686-1.9656 3.325-3.7036 3.325-3.7036l-4.609-2.7276c-7.149 5.6905-9.18 1.0445-5.763-1.2656 3.801-2.7974 12.002-8.9769 15.978-12.1633zm-5.892 8.7989 4.416 2.9713s5.123-7.8253 3.229-7.6094z" fill="#fff"/><path d="m172.852 81.0428c1.436-1.4992 1.937-6.1263-2.965-7.5249-6.683-2.9522-14.245 7.6807-14.245 7.6807s-3.653 5.1541-3.641 9.7933c-.085 4.4299 3.761 6.1764 4.467 6.6076 4.964.6546 4.779-2.9329 4.073-3.3633-.929-.4775-2.291-.9027-2.95-2.2228-1.127-2.2216.818-5.6965 2.079-7.4687 2.376-2.8649 7.293-8.4654 9.751-5.4463.808 3.2914 2.648 2.7754 3.431 1.9444z" fill="#fff"/><path d="m177.217 82.765c-2.783 3.049-3.012 7.4776-9.006 12.9676-1.449 1.3479-4.535 3.627-4.933 3.9683-3.006 2.3431-.527 5.6381 5.52 1.9021 1.433-.832 3.818-3.54 3.818-3.54l1.658.5335s-1.355 6.6915-2.208 9.4345c-.792 2.662 3.011 6.092 5.293 1.196.602-1.76 1.042-4.307 1.242-7.704 0 0 .233-2.4491-.342-3.0398 0 0 7.181-2.6988 8.516-4.4003 1.398-1.7819 1.123-3.5827-4.23-2.0581-5.351 1.5254-6.273 2.3697-6.273 2.3697s2.78-3.7092 4.096-6.8747c1.825-3.1537-.815-7.2369-3.151-4.7548z" fill="#fff"/><path d="m199.427 100.295c-2.407.9-4.849 3.525-6.843 8.263-2.918 7.099-1.83 12.423 3.477 13.851 5.309 1.428 5.752-2.667 5.35-2.989-.322-.26-.226-.721-2.597-.872-2.374-.151-3.5-1.73-3.382-5.411.102-2.48 1.482-6.767 4.035-8.359.76-.47 1.275-.46 1.566-.496 1.163-.146 1.855.815 1.953 1.026 1.721 3 3.144 1.177 3.052-1.056-.656-3.358-2.816-4.957-6.611-3.957z" fill="#fff"/><path d="m210.364 105.988c1.171-2.666 4.834-3.478 3.123 2.893-.537 4.373-4.181 11.653-3.919 12.597s4.945 1.901 6.271 2.031c1.324.132 3.215 1.595 2.218 2.532-.919 1.002-2.067.619-2.357.654s-11.18-1.445-10.684-3.502c.498-2.056.868-2.939 1.963-6.33 1.096-3.392 2.213-8.209 3.385-10.875z" fill="#fff"/><path d="m222.865 108.585c.655-2.014 3.141-2.305 3.366.275.155 1.992-1.952 9.389-1.836 12.95.251 1.533 1.767 2.473 3.015 1.731 1.636-1.234 2.832-5.619 3.756-9.154.316-1.749.405-3.156.824-4.024 1.676-2.803 3.732-1.033 3.474 2.497-.598 3.794-2.095 9.684-3.451 11.407-1.292 1.641-2.825 3.757-5.477 3.249-.684-.143-6.2-1.73-5.469-8.22.924-6.737 1.142-8.698 1.798-10.711z" fill="#fff"/><path d="m241.63 110.195c4.054-.49 6.741-.074 8.305 1.441.79 1.163.666 3.328-.344 4.784-.964 1.229-2.041 2.099-2.041 2.099 1.806 1.042 2.34 3.552 1.587 6.183-.752 2.631-4.125 3.906-9.097 3.397-1.642-.246-3.188-.948-3.029-1.487.401-1.012 2.048-14.475 2.048-14.475.208-.767.174-1.725 2.571-1.942zm.375 2.697-.088 4.456s4.57.188 5.049-2.092c.477-2.282-2.515-2.141-4.961-2.364zm-.838 7.585s-.972 5.083-.924 4.855c.112-.31 6.286 1.114 6.407-2.385.121-3.497-5.483-2.47-5.483-2.47z" fill="#fff"/></g><path d="m90 60-42 40.362 3.3788 1.505 41.1212-39.867z" fill="#000"/><path d="m75 72.658c.7 1.6999 7.4999 8.5999 3.7999 9.5999-3.6999.9999-2.3999 9.4998 4.9 7.5999 7.2999-1.9 9.5998-11.4999 2.5999-15.4999-6.9999-3.9999-11.2998-1.6999-11.2998-1.6999z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff;stroke:#000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round"/><path d="m62 81.658c.7 1.6999 7.4999 8.5999 3.7999 9.5999-3.6999.9999-2.3999 9.5001 4.9 7.5999 7.2999-1.9 9.5998-11.4999 2.5999-15.4999-6.9999-3.9999-11.2998-1.6999-11.2998-1.6999z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff;stroke:#000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round"/><path d="m49 90.658c.7 1.6999 7.4999 8.5999 3.7999 9.6-3.6998 1-2.3999 9.5 4.9001 7.6 7.2998-1.9 9.5998-11.5001 2.5998-15.5001-6.9999-3.9999-11.2998-1.6999-11.2998-1.6999z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff;stroke:#000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round"/></g></svg>`);
  hcFlag.scale([1.5, -1.5]);
  hcFlag.translate([635, 828]);
  drawTurtles([hcFlag]);
  DrawText("Introducing:\nThe Hack Club Blot!\n", [48, 789], 14);
  DrawText(
    `-> What is it?
****************************





-> How do you get one?
****************************`,
    [48, 665],
    7
  );
  DrawText(`
The Blot is an experimental, DIY drawing machine, created by Hack Club 
to inspire teens the digital art field. Although
it is possible to 3D print all the parts needed, kits
are avalible for all high schoolers who can submit a
piece of artwork to the Blot website!




  
1. Create it!
    Go to https://blot.hackclub.dev/ to learn how to
    draw using the Blot's easy to use code framework.
    
2. PR it!
    Clone the source repo, add your code and open a
    new pull request with your additions for a Hack
    Club staff to review.

3. Build it!
    If your submission is accepted, Hack Club will
    ship you a kit with all the parts needed to make
    your own drawing machine(a >$150 value!)`, [53, 616], 4.75);
  DrawText(`drawn w/ blot by geschmit :3`, [780, 14], 3);
})();

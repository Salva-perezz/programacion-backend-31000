import {
  red,
  blue,
  white,
  gray,
  bgRed,
  bgYellow,
  bgGreen,
  bgBrightMagenta,
  italic,
  bold,
} from "https://deno.land/std@0.160.0/fmt/colors.ts";

console.log(bgRed(blue(italic("Hello world"))));
console.log(bgYellow(red(bold("Hello world"))));
console.log(bgGreen(white(italic("Hello world"))));
console.log(bgBrightMagenta(gray(bold("Hello world"))));

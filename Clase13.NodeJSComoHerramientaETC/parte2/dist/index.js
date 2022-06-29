"use strict";
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
// class Color {
//     public color: RGB
//     constructor() {
//         this.color
//     }
//     setRandomColor(): void {
//         this.color = {
//         red: generateRandomNumber(0, 255), 
//         green: generateRandomNumber(0, 255), 
//         blue: generateRandomNumber(0, 255)
//     }
//     }
// }
// const newRandomColor: Color = new Color()
// newRandomColor.setRandomColor()
// console.log(newRandomColor.color)

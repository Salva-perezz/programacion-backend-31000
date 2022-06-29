const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Color {
    constructor() {
        this.color
    }

    setRandomColor() {
        this.color =  `RGB ${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)}`
    }
}

const randomColor = new Color

randomColor.setRandomColor()

console.log(randomColor)
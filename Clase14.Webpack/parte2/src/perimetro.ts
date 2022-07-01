export default class Perimetro {
    private dato: number
    private datoDos: number | undefined

    constructor(dato: number, datoDos?: number) {
        this.dato = dato
        this.datoDos = datoDos
    }

    cuadrado(): number {
        return this.dato * 4
    }

    rectangulo(): number {
        if (typeof this.datoDos === 'number') {
            return (this.dato * 2) + (this.datoDos * 2)
        } else {
            return 0
        }
    }

    circulo(): number {
        return (3.14 * 2) * this.dato
    }

}
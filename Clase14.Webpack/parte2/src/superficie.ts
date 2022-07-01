export default class Superficie {
    private dato: number
    private datoDos: number | undefined

    constructor(dato: number, datoDos?: number) {
        this.dato = dato
        this.datoDos = datoDos
    }

    cuadrado(): number {
        return this.dato * this.dato
    }

    rectangulo(): number {
        if (typeof this.datoDos === 'number') {
            return this.datoDos * this.dato
        } else {
            return 0
        }
    }

    circulo(): number {
        return (this.dato * this.dato) * 3.14
    }
}
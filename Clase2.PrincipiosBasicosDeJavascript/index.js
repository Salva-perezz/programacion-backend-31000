/* SOLUCION EJERCICIO Funciones y Closures */

function mostrarLista(lista) {
    if(mostrarLista.length) return lista.length;

    return "Lista vacia";
};

mostrarLista([1, 2, 3]);
mostrarLista([]);

(function(lista) {
    if(mostrarLista.length) console.log(lista.length);

    return console.log("Lista vacia");
})([1, 2, 3]);

function crearMultiplicador(numero1) {
    return function(numero2) {
        return numero1 * numero2;
    };
}

const multiplicador = crearMultiplicador(3);

const multiplicadorDuplicado = multiplicador(2);
const multiplicadorTriplicado = multiplicador(3);

console.log(`Duplicado: ${multiplicadorDuplicado}`);
console.log(`Triplicado: ${multiplicadorTriplicado}`);




/* SOLUCION EJERCICIO Clases */
class Contador {
    constructor(nombreResponsable) {
        this.nombreResponsable = nombreResponsable
        this.contador = 0
    }

    static valor = 0

    obtenerResponsable() {
        return this.nombreResponsable
    }
    obtenerCuentaIndividual () {
        return this.contador
    }
    obtenerCuentaGlobal() {
        return Contador.valor
    }

    contar() {
        this.contador++
        Contador.valor++
    }

}

const salva = new Contador("Salvador")
const pepe = new Contador("Pepe")
pepe.contar()
salva.contar()
console.log(salva.obtenerResponsable())
console.log(salva.obtenerCuentaGlobal())
console.log(salva.obtenerCuentaIndividual())
console.log(Contador.valor)
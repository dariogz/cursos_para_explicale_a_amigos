// Variables
let baseDeDatosDeBalance = {
    Graciela: 740
};
let baseDeDatosDeJugadas = {
    8: [
        {
            jugador: 'Graciela',
            monto: 480
        }
    ]
};

// Funcion
let realizarJugada = function(jugador, monto, numero) {
    // Agregar jugada al balance
    if (!baseDeDatosDeBalance[jugador]) {
        baseDeDatosDeBalance[jugador] = 0;
    }
    baseDeDatosDeBalance[jugador] += monto;

    // Agregar jugada al registro
    if (baseDeDatosDeJugadas[numero] === undefined) {
        baseDeDatosDeJugadas[numero] = new Array;
    }
    baseDeDatosDeJugadas[numero].push({
        jugador,
        monto
    });
}

// Ejecucion
realizarJugada('Carlos', 150, 4);
realizarJugada('Cristina', 1050, 10);
realizarJugada('Pepe', 740, 7);
realizarJugada('Carlos', 480, 5);
realizarJugada('Cristina', 300, 7);

console.log(baseDeDatosDeBalance);
console.log(baseDeDatosDeJugadas);
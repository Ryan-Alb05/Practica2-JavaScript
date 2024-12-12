const TIME_COOKING_OVEN = 40;

function calculateRemainingTimeOven(minutesElapsed) {
    const remainingTime = TIME_COOKING_OVEN - minutesElapsed;
    return remainingTime;
}

function calculatePreparationTime(layers) {
    const preparationTime = layers * 2;
    return preparationTime;
}

function calculateTotalWorkingTime(layers, minutesElapsed) {
    const preparationTime = calculatePreparationTime(layers);
    const totalWorkingTime = preparationTime + minutesElapsed;
    return totalWorkingTime;
}

// Solicitar el número de capas de la lasaña
const layers = parseInt(prompt("Introduce el número de capas de la lasaña: "), 10);
// Solicitar el tiempo que la lasaña ha estado en el horno
const minutesElapsed = parseInt(prompt("Introduce el tiempo que la lasaña ha estado en el horno en minutos: "), 10);

// Verificar que las entradas son válidas
if (layers >= 0 && minutesElapsed >= 0) {
    // Calcular el tiempo restante en el horno
    const remainingTime = calculateRemainingTimeOven(minutesElapsed);
    // Calcular el tiempo de preparación
    const preparationTime = calculatePreparationTime(layers);
    // Calcular el tiempo total de trabajo
    const totalWorkingTime = calculateTotalWorkingTime(layers, minutesElapsed);

    // Mostrar los resultados en un alert
    alert(
        "Resultados:\n" +
        "Tiempo restante en el horno: " + remainingTime + " minutos\n" +
        "Tiempo de preparación: " + preparationTime + " minutos\n" +
        "Tiempo total de trabajo: " + totalWorkingTime + " minutos"
    );
} else {
    // Mostrar un mensaje de error si las entradas no son válidas
    alert("Por favor, introduce valores válidos. Las capas y el tiempo deben ser mayores o iguales a 0.");
}
function calcularIMC(peso, altura) {
    if (altura === 0) return 0;
    return (peso / (altura * altura)).toFixed(2);
}

// Pequeno truque para funcionar tanto no navegador quanto no teste automatizado (Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = calcularIMC;
}

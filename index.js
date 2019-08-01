var sumatoria = function(n) {
    "use strict";
    return n * (n + 1) / 2;
};

var boton =
    document.getElementById("btnCalcular");
boton.onclick = function() {
    "use strict";
    let respuesta =
        document.getElementById("resultado");
    let valor = document.getElementById("numero").nodeValue;
    let resultado =
        sumatoria(parseInt(valor));
    respuesta.innerHTML = resultado;
};
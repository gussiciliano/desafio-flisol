function sonAnagramas(palabra1, palabra2) {
    const palabra1Lower = palabra1.toLowerCase();
    const palabra2Lower = palabra2.toLowerCase();
    const longitud = palabra1Lower.length;
    const longitud2 = palabra2Lower.length;
    
    let error = false;

    let i = 0;
    let palabra2Aux = palabra2Lower;
    let indice;
    while(i < longitud && !error) {
        indice = palabra2Aux.indexOf(palabra1Lower[i]);
        if (indice != -1) {
          palabra2Aux = palabra2Aux.substring(0, indice) + palabra2Aux.substring(indice + 1);
        }
        else {
            error = true;
        }
        i++
      }
    return !error && palabra2Aux.length == 0;
}

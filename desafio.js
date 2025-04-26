function sonAnagramas(palabra1, palabra2) {
    const palabra1Lower = palabra1.toLowerCase();
    const palabra2Lower = palabra2.toLowerCase();
    const longitud = palabra1Lower.length;
    let error = false;

    let i = 0;
    while(i < longitud && !error) {
        if (palabra1Lower[i] !== palabra2Lower[longitud - 1 - i]) {
          error = true;
        }
        i++
      }
    return !error;
}

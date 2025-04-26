Dos palabras son anagramas cuando se pueden re ordenar sus letras y generar una palabra nueva (en este caso no necesita tener sentido).

Por ejemplo "roma" es anagrama de "amor" y "linux" es anagrama de "luxni"

El archivo desafio.js tiene dos problemas:

1- Tiene un error de performance, que es contextual a las palabras que se pueden ingresar, el código puede ser más performante.

2- Hay un bug que también es contextual a las palabras que se pueden ingresar, relacionado con un error de tipeo del usuario que no se ve a simple vista. Este error no está en los ejemplos de console.log ¿cuál puede ser?

Se puede testear en:

https://www.mycompiler.io/es/new/nodejs

Ejemplos de testeo:

console.log(sonAnagramas("amor", "roma")); //debe ser true

console.log(sonAnagramas("amor", "rome")); //debe ser false

console.log(sonAnagramas("linux", "luxni")); //debe ser true

console.log(sonAnagramas("linux", "luxniluxni")); //debe ser false

console.log(sonAnagramas("linux", "LUXNI")); //debe ser true

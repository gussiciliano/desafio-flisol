El archivo desafio.js tiene dos problemas:

1- Tiene un bug que es contextual a las palabras que se pueden llegar a ingresar, y si se resuelve, el código queda más performante.
2- Hay otro bug que también es contextual a las palabras que se pueden ingresar, relacionado con un error de tipeo del usuario que no se ve a simple vista.

Se puede testear en:
https://www.mycompiler.io/es/new/nodejs

Se puede testear con:
console.log(sonAnagramas("linux", "xunil")); //debe ser true
console.log(sonAnagramas("linux", "xUnil")); //debe ser true
console.log(sonAnagramas("linux", "xunyl")); //debe ser false

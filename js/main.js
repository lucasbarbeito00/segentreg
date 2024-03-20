const librosComics = [
    {
        id: 1,
        nombre: "El Principito",
        editorial: "Ediciones Salamandra",
        tipo: "libro",
        añoPublicacion: 1943,
    },
    {
        id: 2,
        nombre: "Mafalda",
        editorial: "Ediciones de la Flor",
        tipo: "comic",
        añoPublicacion: 1964,
    },
    {
        id: 3,
        nombre: "Cien años de soledad",
        editorial: "Sudamericana",
        tipo: "libro",
        añoPublicacion: 1967,
    },
    {
        id: 4,
        nombre: "Watchmen",
        editorial: "DC Comics",
        tipo: "comic",
        añoPublicacion: 1986,
    },
    {
        id: 5,
        nombre: "El nombre de la rosa",
        editorial: "Editorial Planeta",
        tipo: "libro",
        añoPublicacion: 1980,
    },
    {
        id: 6,
        nombre: "Batman: The Dark Knight Returns",
        editorial: "DC Comics",
        tipo: "comic",
        añoPublicacion: 1986,
    },
    {
        id: 7,
        nombre: "Harry Potter y la piedra filosofal",
        editorial: "Bloomsbury",
        tipo: "libro",
        añoPublicacion: 1997,
    },
    {
        id: 8,
        nombre: "The Sandman",
        editorial: "DC Comics",
        tipo: "comic",
        añoPublicacion: 1989,
    },
    {
        id: 9,
        nombre: "El juego de Ender",
        editorial: "Tor Books",
        tipo: "libro",
        añoPublicacion: 1985,
    },
    {
        id: 10,
        nombre: "Y el viento se llevó lo que...",
        editorial: "Macmillan Publishers",
        tipo: "libro",
        añoPublicacion: 1936,
    },
];


//  ----------------------- CÓDIGO PARA FILTRAR POR TIPO ----------------------
const filtrarPorTipo = () => {
    const tipoObj = prompt("Introduzca un tipo (libro/comic):");
    const filtro = librosComics.filter(obj => obj.tipo === tipoObj);
    console.log(filtro); // se muestran por consola del navegador
}
filtrarPorTipo();


// ---------------------- CÓDIGO PARA BUSCAR POR NOMBRE -----------------------
const buscarPorNombre = () => {
    const nombreObj = prompt("Introduzca el nombre del libro o comic que desea comprar:");
    const filtro = librosComics.filter(obj => obj.nombre === nombreObj);
    console.log(filtro); // se muestran por consola del navegador
}
// buscarPorNombre();
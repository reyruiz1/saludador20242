function saludador({ nombre, genero, edad, idioma }) {
    let saludo = "";

    if (idioma === "es") {
        saludo = "Hola";
        if (genero) {
            if (genero === "masculino") {
                saludo += " señor";
            } else if (genero === "femenino") {
                saludo += " señora";
            } else {
                saludo += " estimado/a";
            }
        }
    } else if (idioma === "en") {
        saludo = "Hello";
        if (genero) {
            if (genero === "masculino") {
                saludo += " Mr.";
            } else if (genero === "femenino") {
                saludo += " Mrs.";
            } else {
                saludo += " dear";
            }
        }
    }

    if (nombre) {
        saludo += `, ${nombre}`;
    }

    if (edad) {
        saludo += ` de ${edad} años`;
    }

    saludo += idioma === "es" ? ". ¡Bienvenido/a!" : ". Welcome!";
    return saludo;
}

export default saludador;

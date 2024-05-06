var buttonIniciar = document.getElementById("buttonIniciar");
var contenedorInicial = document.getElementById("contenedorInicial");
var contenedorJuego = document.getElementById("contenedorJuego");
var buttonVerificar = document.getElementById("buttonRespuesta");
var buttonInfoPistas = document.getElementById("buttonInfo");
var contenedorInfoPistas = document.getElementById("contenedorInfoPistas");
var buttonRegresarPistas = document.getElementById("buttonRegresarPistas");
var letrasUsadas = document.getElementById("letrasUsadas");
var buttonVolverAJugar = document.getElementById("buttonVolverAJugar");
const segundosMax = 20;
var segundos = (segundosMax + 1);
var esCero = false;
var contador = document.getElementById("contador");

const listadoPalabras = [
    "acceso", "altura", "butaca", "bebida", "cabeza", "causas",
    "dormir", "dramas", "entero", "empleo", "famoso", "fiebre",
    "gritar", "goloso", "hechos", "hierro", "inicio", "inerte",
    "juicio", "joroba", "lluvia", "lograr", "morado", "marcha",
    "noches", "neutro", "objeto", "orilla", "piedad", "pedido",
    "quemar", "quince", "rocoso", "rostro", "sumiso", "sonido",
    "traste", "tesoro", "unidad", "usurpa", "vencer", "vivido",
    "escoba", "alegre", "musica", "bailar", "rapido", "diente",
    "paloma", "pestes", "luchar", "pintar", "tomate", "dulces",
    "mentir", "zapato", "bosque", "cereal", "comida", "trenza",
    "limpio", "grillo", "viento", "camisa", "templo", "suaves",
    "pescar", "pastel", "flores", "jueves", "ventas", "perlas",
    "cuerda", "cactus", "moneda", "patata", "planta", "cambio",
    "estilo", "grapas", "llamas", "verano", "tiempo", "humano",
    "puerta", "espejo", "sombra", "fuente", "flecha", "vestir",
    "escudo", "teatro", "doctor", "taller", "ciudad", "mantel",
    "silbar", "fresco", "barato", "salida"
];

const listadoPistas = [
    // Fila 1
    "Llave, clave, contraseña, bloqueado.",
    "Cima, superior, estatura, acrofobia.",
    "Paleta, reposo, dormir, cine.",
    "Fruta, mezcla, refrescante, bar.",
    "Idea, sentidos, razón, principal.",
    "Perú, razones, pasado, factores.",
    
    // Fila 2
    "Lúcido, onírico, Morfeo, parálisis.",
    "Llorar, telón, obra, emoción.",
    "Número, íntegro, finalizado, una pieza.",
    "Pala, puesto, estrés, ocupado.",
    "Estrella, notorio, polémica, representativo.",
    "Pirexia, ardor, malestar, caldo.",

    // Fila 3
    "Enojo, berrear, niño, protesta.",
    "Montones, dulce, empalagoso, necedad.",
    "Verdad, objetivo, historia, acto.",
    "Forja, sangre, derretir, electricidad.",
    "Génesis, embrión, arranque, amanecer.",
    "Muerto, pasivo, sin instinto, objeto.",

    // Fila 4
    "Balanza, decisión, disputa, resolución.",
    "Curva, anomalía, físico, adaptación.",
    "Cosecha, brisa, rocío, prosperidad.",
    "Medalla, habilidad, constancia, meta.",
    "Nobleza, ciruela, pintura, hinchazón.",
    "Paso, petición, ruta, inconformidad.",

    // Fila 5
    "Velar, silencio, vigilacia, insomnio.",
    "Equilibrado, imparcial, balance, centro.",
    "Herramienta, entidad, obra, artículo.",
    "Límite, final, barranco, delimitrar.",
    "Aflicción, perdón, sumisión, rogar.",
    "Compra, servicio, entrega, demanda.",

    // Fila 6
    "Incidente, combustible, fumar, resplandor.",
    "Efe, cumpleañera, etapa, 1111.",
    "Duro, gólem, planetas, firme.",
    "Identidad, semblante, máscara, fisionomía.",
    "Rendido, ceder, débil, esclavo.",
    "Timbre, ritmo, onda, vibración.",

    // Fila 7
    "Contenedor, doméstico, comida, diapasón.",
    "Preciado, reliquia, saqueo, oculto.",
    "Comunidad, uno solo, juntar, medidas.",
    "Desleal, quitar, reemplazar, apoderarse.",
    "Sobreponerse, juego, rivales, conquistar.",
    "Experiencia, sabiduría, antecedentes, recuerdo.",

    // Fila 8
    "Cerdas, palo, limpieza, castigo.",
    "Jocoso, festivo, resplandeciente, gozo.",
    "Oído, audio, bocina, nota.",
    "Movimiento, preciso, pies, ritmo.",
    "Inmediatamente, ligero, pronto, ágil.",
    "Leche, hilo, esmalte, moler.",

    // Fila 9
    "Paz, nido, divino, blanco.",
    "Infección, extendido, ratas, mortal.",
    "Encarar, golpe, furia, ring.",
    "Plasmar, imaginar, expresión, ilustrar.",
    "Salsa, festividad española, vitamina, básico.",
    "Adictivo, delicioso, azúcar, envoltura.",

    // Fila 10
    "Fraude, trampa, patraña, traidor.",
    "Caminar, cuero, comodidad, desgaste.",
    "Sendero, frondoso, ecosistema, colorido.",
    "Desayuno, pan, grano, cultivo.",
    "Nutrirse, chef, necesidad, rico.",
    "Nudo, pelo, estilo, tejido.",

    // Fila 11
    "Radiante, fresco, nuevo, de buen aspecto.",
    "Saltar, ruidoso, nocturno, antenas.",
    "Soplar, huracán, abrigo, despeinarse.",
    "Algodón, casual, playa, botones.",
    "Ritual, antiguo, mítico, prehispánico.",
    "Cómodo, apachurrable, ternura, cálido.",

    // Fila 12
    "Muelle, espécimen, mar, gancho.",
    "Crema, frutas, cumpleaños, decoración.",
    "Primavera, miel, aroma, belleza.",
    "Júpiter, cuarto, semana, laboral.",
    "Ascenso, éxito, publicidad, empresa.",
    "Mar, ostras, lujo, tesoro.",

    // Fila 13
    "Delgado, atar, nudo, tensión.",
    "Verde, flor, punzante, seco.",
    "Redondo, pago, hucha, cambio.",
    "Agricultura, frito, almidón, nutritivo.",
    "Polinización, botánica, clorofila, raíces.",
    "Modificar, diferente, dinero, trueque.",

    // Fila 14
    "Personalidad, tendencia, moda, diseño.",
    "Sujetar, oficina, papeles, gancho.",
    "Ignición, combustión, fogata, chimenea.",
    "Sol, relajación, playa, sudor.",
    "Duración, dimensión, momento, reloj.",
    "Sociedad, antropología, ser, hombre.",

    // Fila 15
    "Madera, seguro, entrada, bisagra.",
    "Baño, frágil, imagen, reflejar.",
    "Silueta, oscuridad, nube, tinieblas.",
    "Agua, plaza, origen, consulta.",
    "Dirección, apuntar, indicar, arco.",
    "Cambiarse, moda, elegir, ropa.",

    // Fila 16
    "Defensa, blindaje, medieval, emblema.",
    "Actuación, butacas, escenario, drama.",
    "Cirugía, receta, especialista, tratamiento",
    "Reparación, mantenimiento, mecánico, herramientas.",
    "Ruido, urbe, edificios, tráfico.",
    "Mesa, decorar, cubrir, textil.",

    // Fila 17
    "Melodía, soplar, agudo, comunicación.",
    "Refrigerar, ventilador, helado, clima.",
    "Rebaja, oferta, económico, ahorrar",
    "Viaje, partida, puerta, expulsión."
];

var arrayletrasUsadas = [];
var finDelJuego = false;
var correcto = false;
var indiceAleatorio = parseInt(Math.random()*100);
var palabraCorrecta = listadoPalabras[indiceAleatorio];
var pista = listadoPistas[indiceAleatorio];
var intentos = 6;
var errores = 0;
var palabraFormadaString = " ";
var palabraFormada = ["__", "__", "__", "__", "__", "__"];

function mostrarInfoPistas() {

    contenedorInicial.style.display = "none";
    contenedorInfoPistas.style.display = "flex";

}

function volverMenuPistas() {

    contenedorInicial.style.display = "flex";
    contenedorInfoPistas.style.display = "none";

}

function iniciarJuego() {

    
    contenedorInicial.style.display = "none";
    contenedorJuego.style.display = "flex";
    document.getElementById("pista").innerText = pista;
    contador.innerText = segundosMax;

}

function verificarletra() {

    correcto = false;
    let letraRecibida = document.getElementById("inputRespuesta").value;

    if ((letraRecibida.length == 1) && (errores < intentos)) {

        document.getElementById("resultado").innerText = "";

        segundos = (segundosMax + 1);
        cambiarContador();

        for (let i = 0; i <= palabraCorrecta.length; i++) {

            if (letraRecibida == palabraCorrecta.substring(i, (i+1))) {
                
                palabraFormada[i] = letraRecibida;
                correcto = true;

            }

        }

        if (correcto == true) {

            palabraFormadaString = ((palabraFormada.toString()).replaceAll(",", " ")).toUpperCase();
            document.getElementById("respuesta").innerText = palabraFormadaString;

        } else {

            document.getElementById("image" + errores).style.display = "none";
            errores++;

            let letraNueva = true;
            for (i = 0; i < arrayletrasUsadas.length; i++) {
                if (letraRecibida == arrayletrasUsadas[i]) {
                    letraNueva = false;
                    break;
                }
            }

            if (letraNueva == true) {
                arrayletrasUsadas.push(letraRecibida);
                let letrasUsadasString = arrayletrasUsadas.toString();
                letrasUsadasString = letrasUsadasString.replaceAll(",", ", ");
                letrasUsadas.innerText = letrasUsadasString;
            }
        }

    } else if ((letraRecibida.length == 0) && (errores < intentos)) {

        document.getElementById("resultado").innerText = "Introduzca una letra";

    }

    verificarFinal();
    
}

function verificarFinal() {

    if ((palabraFormadaString.replaceAll(" ", "")).toLowerCase() == palabraCorrecta) {

        finDelJuego = true;
        document.getElementById("resultado").innerText = "¡Haz ganado!";
        intentos = 0;

    } else if (errores == intentos) {

        finDelJuego = true;
        document.getElementById("resultado").innerText = "Haz perdido. Palabra correcta: " + palabraCorrecta;

    }

    if (finDelJuego == true) {
        contador.innerText = "0";
        contador.style.color = "#b3061f";
        document.getElementById("contenedorVolverAJugar").style.display = "flex";
    }

}

function volverAJugar() {

    segundos = (segundosMax + 1);
    esCero = false;
    arrayletrasUsadas = [];
    finDelJuego = false;
    correcto = false;
    indiceAleatorio = parseInt(Math.random()*100) % 42;
    palabraCorrecta = listadoPalabras[indiceAleatorio];
    pista = listadoPistas[indiceAleatorio];
    intentos = 6;
    errores = 0;
    palabraFormadaString = " ";
    palabraFormada = ["__", "__", "__", "__", "__", "__"];
    letrasUsadas.innerText = "";
    document.getElementById("inputRespuesta").value = "";
    document.getElementById("respuesta").innerText = "__ __ __ __ __ __";
    document.getElementById("pista").innerText = pista;
    document.getElementById("resultado").innerText = "";
    document.getElementById("contenedorVolverAJugar").style.display = "none";

    for (i = 0; i <=6; i++) {

        document.getElementById("image" + i).style.display = "block";

    }

}

function cambiarContador() {

    if (errores < intentos) {

        segundos--;
        contador.innerText = segundos;

        if (parseInt(contador.innerText) <= 5) {

            contador.style.color = "#b3061f";

        } else {

            contador.style.color = "#000";

        }

        if (parseInt(contador.innerText) == 0) { esCero = true; } else { esCero = false; }

        if (esCero == true) {

            document.getElementById("image" + errores).style.display = "none";
            errores++;
            segundos = (segundosMax + 1);

        }

        verificarFinal();

    }

}

buttonIniciar.addEventListener("click", iniciarJuego);
buttonVerificar.addEventListener("click", verificarletra);
buttonInfoPistas.addEventListener("click", mostrarInfoPistas);
buttonRegresarPistas.addEventListener("click", volverMenuPistas);
buttonVolverAJugar.addEventListener("click", volverAJugar);

setInterval(cambiarContador, 1000);
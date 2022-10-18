import React, { useRef, useState } from 'react'
import useForm from '../hooks/useForm'

const CuttingOptiimizer = () => {

    const miCanvas = useRef()

    var nombre;
    var empresa;
    var telefono;
    var email;
    var comentario;
    //var orientacion = "Horizontal";
    var total_peso;
    var no_total_cortes;

    const [orientacion, setOrientacion] = useState('Horizontal')
    const [areaUtilizada, setAreaUtilizada] = useState(0)
    const [areaInutilizada, setAreaInutilizada] = useState(0)

    const { anchoP, largoP, gramajeP, anchoC, largoC, deseadoC, onChange, reset } = useForm({
        anchoP: '',
        largoP: '',
        gramajeP: '',
        anchoC: '',
        largoC: '',
        deseadoC: ''
    })

    /* Optimizacion Maxima */

    const optimizacionMaxima = () => {

        if (validarForma() === 1) {
            setOrientacion('Maximo')
            var b = Math.max(anchoP, largoP);
            var h = Math.min(anchoP, largoP);
            var cb = Math.max(anchoC, largoC);
            var ch = Math.min(anchoC, largoC);

            var escala = 250 / b;
            var a1h = h;
            var a1b = b;
            var a2h, a2b, sumaCortes = 0;
            var corteA1, corteA2;
            var totalCortes;
            var acomodo1, acomodo2 = {
                a1b: "",
                a2b: "",
                a1h: "",
                a2h: "",
                sumaCortes: ""
            };

            /* clearCanvas(); */
            /*         $("#micanvas").attr({ width: b * escala, height: h * escala, style: "background-color: #ddd;" }); */

            const prueba = miCanvas.current
            Object.assign(prueba, { width: b * escala, height: h * escala, style: "background-color: #ddd;" })

            /*   $("#orientacion_v").removeClass('disabled');
              $("#orientacion_h").removeClass('disabled'); */

            /* Primero se acomoda el papel en H */
            var cortes = acomoda(b, h, "H", "M");

            totalCortes = cortes.cortesT;
            acomodo1 = {
                a1b: b,
                a2b: b,
                a1h: h,
                a2h: 0,
                sumaCortes: totalCortes,
                cortesH1: cortes.cortesH,
                cortesB1: cortes.cortesB,
                cortesT1: cortes.cortesT,
                cortesH2: 0,
                cortesB2: 0,
                cortesT2: 0
            };

            for (let x = 0; x <= cortes.cortesH; x++) {
                a2b = b;

                a2h = parseFloat(((ch * x) + cortes.sobranteH).toFixed(2));
                a1h = parseFloat((h - a2h).toFixed(2));

                corteA1 = acomoda(a1b, a1h, "H", "N");
                corteA2 = acomoda(a2b, a2h, "V", "N");

                sumaCortes = corteA1.cortesT + corteA2.cortesT;

                if (sumaCortes > totalCortes) {
                    totalCortes = sumaCortes;
                    acomodo1 = {
                        a1b: a1b,
                        a2b: a2b,
                        a1h: a1h,
                        a2h: a2h,
                        sumaCortes: totalCortes,
                        cortesH1: corteA1.cortesH,
                        cortesB1: corteA1.cortesB,
                        cortesT1: corteA1.cortesT,
                        cortesH2: corteA2.cortesH,
                        cortesB2: corteA2.cortesB,
                        cortesT2: corteA2.cortesT
                    };
                }
                //console.log("x: " + x + " corte A1: " + corteA1.cortesT + " corte A2: " + corteA2.cortesT + " cortes: " + sumaCortes);
            }

            //console.log(acomodo1.sumaCortes);

            totalCortes = cortes.cortesT;
            acomodo2 = { a1b: b, a2b: 0, a1h: h, a2h: h, sumaCortes: totalCortes, cortesH: totalCortes, cortesV: 0 };

            for (let x = 0; x <= cortes.cortesB; x++) {
                a2h = h;
                a1h = h;
                a2b = parseFloat(((cb * x) + cortes.sobranteB).toFixed(2));
                a1b = parseFloat((b - a2b).toFixed(2));

                corteA1 = acomoda(a1b, a1h, "H", "N");
                corteA2 = acomoda(a2b, a2h, "V", "N");

                sumaCortes = corteA1.cortesT + corteA2.cortesT;

                if (sumaCortes > totalCortes) {
                    totalCortes = sumaCortes;
                    acomodo2 = {
                        a1b: a1b,
                        a2b: a2b,
                        a1h: a1h,
                        a2h: a2h,
                        sumaCortes: totalCortes,
                        cortesH1: corteA1.cortesH,
                        cortesB1: corteA1.cortesB,
                        cortesT1: corteA1.cortesT,
                        cortesH2: corteA2.cortesH,
                        cortesB2: corteA2.cortesB,
                        cortesT2: corteA2.cortesT
                    };
                }
                //console.log("x: " + x + " corte A1: " + corteA1.cortesT + " corte A2: " + corteA2.cortesT + " cortes: " + sumaCortes);
            }

            //console.log(acomodo2.sumaCortes);

            if (acomodo2.sumaCortes > acomodo1.sumaCortes) {
                //Calculando el area
                calcularArea(b, h, cb, ch, acomodo2.sumaCortes);
                calcular(b, h, acomodo2.cortesT2, acomodo2.cortesT1, parseInt(acomodo2.sumaCortes), acomodo2.sumaCortes, "M");
                //console.log("Corte V: " + acomodo2.sumaCortes);
                //Dibuja 2 areas una al lado de otra
                dibujaCuadricula(acomodo2.cortesB1, acomodo2.cortesH1, cb, ch, 0, 0, escala);
                dibujaCuadricula(acomodo2.cortesB2, acomodo2.cortesH2, ch, cb, acomodo2.cortesB1 * cb * escala, 0, escala);
            } else {
                //Calculando el area
                calcularArea(b, h, cb, ch, acomodo1.sumaCortes);
                calcular(b, h, acomodo1.cortesT2, acomodo1.cortesT1, acomodo1.sumaCortes, parseInt(acomodo1.sumaCortes), "M");
                //console.log("Corte H: " + acomodo1.sumaCortes);
                //Dibuja 2 areas una arriba de otra
                dibujaCuadricula(acomodo1.cortesB1, acomodo1.cortesH1, cb, ch, 0, 0, escala);
                dibujaCuadricula(acomodo1.cortesB2, acomodo1.cortesH2, ch, cb, 0, acomodo1.cortesH1 * ch * escala, escala);
            }
        }

    }



    /* horientacion vertical */

    const horientacionVertical = () => {

        if (validarForma() === 1) {
            setOrientacion('Vertical')
            var b = Math.max(anchoP, largoP);
            var h = Math.min(anchoP, largoP);
            var cb = anchoC;
            var ch = largoC;
            var escala = 250 / b;
            var cortes, sobrante;
            var totalCortes;
            var cortesV, cortesH = 0;

            /* clearCanvas(); */

            const prueba = miCanvas.current
            Object.assign(prueba, { width: h * escala, height: b * escala, style: "background-color: #ddd;" })
            cortes = acomoda(b, h, "N", "V");
            totalCortes = cortes.cortesT;

            dibujaCuadricula(cortes.cortesB, cortes.cortesH, cb, ch, 0, 0, escala);

            if (cortes.sobranteB >= ch) {
                sobrante = acomoda(cortes.sobranteB, b, "H", "H");
                totalCortes += sobrante.cortesT;
                dibujaCuadricula(sobrante.cortesH, sobrante.cortesB, ch, cb, cortes.cortesB * cb * escala, 0, escala, "R");
            } else if (cortes.sobranteH >= cb) {
                sobrante = acomoda(cortes.sobranteH, h, "H", "H");
                totalCortes += sobrante.cortesT;
                dibujaCuadricula(sobrante.cortesB, sobrante.cortesH, ch, cb, 0, cortes.cortesH * ch * escala, escala, "R");
            } else {
                sobrante = {
                    cortesT: 0,
                    cortesB: 0,
                    cortesH: 0,
                    sobranteB: 0,
                    sobranteH: 0,
                    areaUtilizada: 0
                };
            }

            console.log("Cortes: " + cortes.cortesT + " Sobrante: " + sobrante.cortesT + " Total: " + cortes.cortesT + sobrante.cortesT);

            /*   $(this).addClass('disabled');
              $("#orientacion_h").removeClass('disabled'); */

            /*             clearCanvas(); */

            if (parseInt(cb) < parseInt(ch)) {
                cortesV = cortes.cortesT;
                cortesH = sobrante.cortesT;
            } else {
                cortesV = sobrante.cortesT;
                cortesH = cortes.cortesT;
            }

            //Calculando el area
            calcularArea(b, h, cb, ch, totalCortes);
            calcular(b, h, cortesV, cortesH, totalCortes, cortes.cortesT, "V");
        }

    }


    const orientacionHorizontal = () => {
        if (validarForma() === 1) {
            setOrientacion('Horizontal')
            var b = Math.max(anchoP, largoP);
            var h = Math.min(anchoP, largoP);
            var cb = anchoC;
            var ch = largoC;
            var escala = 250 / b;
            var cortes, sobrante;
            var totalCortes;
            var cortesV, cortesH = 0;

            /* clearCanvas(); */

            const prueba = miCanvas.current
            Object.assign(prueba, { width: b * escala, height: h * escala, style: "background-color: #ddd;" })

            cortes = acomoda(b, h, "N", "H");
            totalCortes = cortes.cortesT;

            dibujaCuadricula(cortes.cortesB, cortes.cortesH, cb, ch, 0, 0, escala);

            if (cortes.sobranteB >= ch) {
                sobrante = acomoda(cortes.sobranteB, h, "H", "H");
                totalCortes += sobrante.cortesT;
                dibujaCuadricula(sobrante.cortesH, sobrante.cortesB, ch, cb, cortes.cortesB * cb * escala, 0, escala, "R");
                //console.log("Sobro B");
            } else if (cortes.sobranteH >= cb) {
                sobrante = acomoda(cortes.sobranteH, b, "H", "H");
                totalCortes += sobrante.cortesT;
                dibujaCuadricula(sobrante.cortesB, sobrante.cortesH, ch, cb, 0, cortes.cortesH * ch * escala, escala, "R");
                //console.log("Sobro H");
            } else {
                sobrante = {
                    cortesT: 0,
                    cortesB: 0,
                    cortesH: 0,
                    sobranteB: 0,
                    sobranteH: 0,
                    areaUtilizada: 0
                };
            }

            //console.log("Cortes: " + cortes.cortesT + " Sobrante: " + sobrante.cortesT + " Total: " + cortes.cortesT + sobrante.cortesT);

            /* $(this).addClass('disabled');
            $("#orientacion_v").removeClass('disabled'); */

            if (parseInt(cb) < parseInt(ch)) {
                cortesV = cortes.cortesT;
                cortesH = sobrante.cortesT;
            } else {
                cortesV = sobrante.cortesT;
                cortesH = cortes.cortesT;
            }

            //Calculando el area
            calcularArea(b, h, cb, ch, totalCortes);
            calcular(b, h, cortesV, cortesH, totalCortes, cortes.cortesT, "H");

        }
    }


    const calcular = (b, h, cortesV, cortesH, totalCortes, utilizables, orientacion) => {
        var gramaje = gramajeP;
        var cortesDeseados = deseadoC;
        var pliegosP = 1;
        var pliegos = 0;

        if (orientacion === "H") {
            pliegos = Math.ceil(cortesDeseados / utilizables);
        } else if (orientacion === "V") {
            pliegos = Math.ceil(cortesDeseados / utilizables);
        } else {
            //Calculando el numero de pliegos necesarios
            pliegos = Math.ceil(cortesDeseados / totalCortes);
        }

        if (pliegos !== 0 && !isNaN(pliegos)) {
            pliegosP = pliegos;
        } else if (isNaN(pliegos)) {
            pliegos = 0;
        }

        /*Calculando el peso total b y h estan en centimetros es necesario convertirlos a metros y multiplicarlos 
         * por el gramaje (gr / m2)
         */
        total_peso = (pliegosP * (((b / 100) * (h / 100) * gramaje) / 1000)).toFixed(4);

        //Calculando el numero total de cortes en todos los pliegos
        no_total_cortes = totalCortes * pliegos;

        //Imprimiendo resultados
        /*         imprimirResultados(totalCortes, pliegos, no_total_cortes, cortesH, cortesV, total_peso, utilizables); */
    }

    const dibujaCuadricula = (cortesX, cortesY, width, height, coorX, coorY, escala, color) => {

        if (color === "R") {
            color = '#d9534f';
        } else {
            color = '#6dab3c';
        }

        /* var canvas = document.getElementById("micanvas"); */
        var context = miCanvas.current.getContext('2d');
        var coorY1 = coorY;
        var coorX1 = coorX;

        width = escala * width;
        height = escala * height;

        for (let x = 1; x <= cortesX; x++) {

            coorY = coorY1;

            for (let y = 1; y <= cortesY; y++) {

                context.beginPath();
                context.fillStyle = color;
                context.rect(coorX, coorY, width, height);
                context.fill();
                context.lineWidth = .5;
                context.strokeStyle = 'white';

                context.stroke();

                coorY = (height * y) + coorY1;
            }

            coorX = (width * x) + coorX1;
        }
    }

    const calcularArea = (ancho_papel, largo_papel, ancho_corte, largo_corte, cortes_en_pliego) => {
        var area_papel = ancho_papel * largo_papel;
        var area_corte = ancho_corte * largo_corte;

        var area_utilizada_cortes = cortes_en_pliego * area_corte;

        var porcentaje_area_utilizada = ((area_utilizada_cortes * 100) / area_papel).toFixed(2);
        var porcentaje_area_inutilizada = (100 - porcentaje_area_utilizada).toFixed(2);

        setAreaUtilizada(porcentaje_area_utilizada);
        setAreaInutilizada(porcentaje_area_inutilizada);
    }

    const validarForma = () => {
        var valida = 1;
        if (anchoP === '') {
            valida = 0;
        }

        if (largoP === '') {
            valida = 0;
        }

        if (anchoC === '') {
            valida = 0;
        }

        if (largoC === '') {
            valida = 0;
        }

        if (anchoP > 125 || largoP > 125) {
            valida = 0;
            alert("El valor máximo para ancho y/o largo es de 125 cm.")
        }

        return valida;
    }

    const clearCanvas = () => {
        /* var canvas = document.getElementById("micanvas"); */
        reset()
        setAreaUtilizada(0)
        setAreaInutilizada(0)
        var context = miCanvas.current.getContext('2d');

        context.clearRect(0, 0, miCanvas.current.width, miCanvas.current.height);
    }

    const acomoda = (d1, d2, acomodoCorte, acomodoPliego) => {
        /*
         * corte_ancoho y corte_largo siempre son constantes
         */
        var corteAncho = anchoC
        var corteLargo = largoC
        var cb = 1;
        var ch = 1;
        var b = 1;
        var h = 1;

        if (acomodoPliego === "V") {
            b = Math.min(d1, d2);
            h = Math.max(d1, d2);
        } else if (acomodoPliego === "H") {
            /* Acomodo del pliego en horizontal y para el calculo del maximo
             */
            b = Math.max(d1, d2);
            h = Math.min(d1, d2);
        } else {
            b = d1;
            h = d2;
        }

        if (acomodoCorte === 'H') {
            cb = Math.max(corteAncho, corteLargo);
            ch = Math.min(corteAncho, corteLargo);
        } else if (acomodoCorte === 'V') {
            cb = Math.min(corteAncho, corteLargo);
            ch = Math.max(corteAncho, corteLargo);
        } else {
            cb = corteAncho;
            ch = corteLargo;
        }

        var cortesT = (parseInt(b / cb)) * (parseInt(h / ch));
        var cortesB = parseInt(b / cb);
        var cortesH = parseInt(h / ch);
        var sobranteB = parseFloat((b - (cortesB * cb)).toFixed(2));
        var sobranteH = parseFloat((h - (cortesH * ch)).toFixed(2));
        var areaUtilizada = parseFloat(((cb * ch) * (parseInt(b / cb)) * (parseInt(h / ch))).toFixed(2));

        var cortes = {
            cortesT: cortesT,
            cortesB: cortesB,
            cortesH: cortesH,
            sobranteB: sobranteB,
            sobranteH: sobranteH,
            areaUtilizada: areaUtilizada
        };

        return cortes;
    }

    return (

        <div className="my-10 mx-10">
            <h2 className='text-black mb-5'>Tamaño del papel extendido</h2>
            <div className='flex gap-8 '>
                <div className="relative  w-full">
                    <input id='anchoP' value={anchoP} name='anchoP' onChange={onChange} className=' font-body pr-4 pb-2.5 pt-4 pl-5 w-full text-paragraph h-[60px] text-[15px] rounded-sm bg-secondary border-1 border-gray-300 outline-none focus:outline focus:outline-1 focus:outline-accent peer' type='text' placeholder=' ' />
                    <label htmlFor="anchoP" className="absolute font-body text-[15px] text-paragraph duration-300 transform -translate-y-4 scale-75 top-4 z-[1] origin-[0] bg-transparent peer-focus:bg-secondary border-gray-300 px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Ancho</label>
                </div>
                <div className="relative w-full">
                    <input id='largoP' value={largoP} name='largoP' onChange={onChange} className=' font-body pr-4 pb-2.5 pt-4 pl-5 w-full text-paragraph h-[60px] text-[15px] rounded-sm bg-secondary border-1 border-gray-300 outline-none focus:outline focus:outline-1 focus:outline-accent peer' type='text' placeholder=' ' />
                    <label htmlFor="largoP" className="absolute font-body text-[15px] text-paragraph duration-300 transform -translate-y-4 scale-75 top-4 z-[1] origin-[0] bg-transparent peer-focus:bg-secondary border-gray-300 px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Largo</label>
                </div>
                <div className="relative w-full">
                    <input id='gramajeP' value={gramajeP} name='gramajeP' onChange={onChange} className=' font-body pr-4 pb-2.5 pt-4 pl-5 w-full text-paragraph h-[60px] text-[15px] rounded-sm bg-secondary border-1 border-gray-300 outline-none focus:outline focus:outline-1 focus:outline-accent peer' type='text' placeholder=' ' />
                    <label htmlFor="gramajeP" className="absolute font-body text-[15px] text-paragraph duration-300 transform -translate-y-4 scale-75 top-4 z-[1] origin-[0] bg-transparent peer-focus:bg-secondary border-gray-300 px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Gramaje</label>
                </div>
            </div>


            <h2 className='text-black mb-5'>Tamaño de corte</h2>
            <div className='flex gap-8 '>
                <div className="relative  w-full">
                    <input id='anchoC' value={anchoC} name='anchoC' onChange={onChange} className=' font-body pr-4 pb-2.5 pt-4 pl-5 w-full text-paragraph h-[60px] text-[15px] rounded-sm bg-secondary border-1 border-gray-300 outline-none focus:outline focus:outline-1 focus:outline-accent peer' type='text' placeholder=' ' />
                    <label htmlFor="anchoC" className="absolute font-body text-[15px] text-paragraph duration-300 transform -translate-y-4 scale-75 top-4 z-[1] origin-[0] bg-transparent peer-focus:bg-secondary border-gray-300 px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Ancho</label>
                </div>
                <div className="relative w-full">
                    <input id='largoC' value={largoC} name='largoC' onChange={onChange} className=' font-body pr-4 pb-2.5 pt-4 pl-5 w-full text-paragraph h-[60px] text-[15px] rounded-sm bg-secondary border-1 border-gray-300 outline-none focus:outline focus:outline-1 focus:outline-accent peer' type='text' placeholder=' ' />
                    <label htmlFor="largoC" className="absolute font-body text-[15px] text-paragraph duration-300 transform -translate-y-4 scale-75 top-4 z-[1] origin-[0] bg-transparent peer-focus:bg-secondary border-gray-300 px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Largo</label>
                </div>

                <div className="relative w-full">
                    <input id='deseadoC' value={deseadoC} name='deseadoC' onChange={onChange} className=' font-body pr-4 pb-2.5 pt-4 pl-5 w-full text-paragraph h-[60px] text-[15px] rounded-sm bg-secondary border-1 border-gray-300 outline-none focus:outline focus:outline-1 focus:outline-accent peer' type='text' placeholder=' ' />
                    <label htmlFor="deseadoC" className="absolute font-body text-[15px] text-paragraph duration-300 transform -translate-y-4 scale-75 top-4 z-[1] origin-[0] bg-transparent peer-focus:bg-secondary border-gray-300 px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Corte deseado</label>
                </div>

            </div>
            <div className="my-5">
                <canvas ref={miCanvas}>
                </canvas>

            </div>

            <span className="label label-danger">{areaInutilizada}% sin utilizar</span>
            <span className="label label-success">{areaUtilizada}% utilizado</span>

            <div className="flex gap-x-4 ">
                <button className='px-4 py-1 text-black bg-green-600' onClick={optimizacionMaxima}>
                    Maximo
                </button>

                <button className='px-4 py-1 text-black bg-green-600' onClick={horientacionVertical}>
                    Vertical
                </button>

                <button className='px-4 py-1 text-black bg-green-600' onClick={orientacionHorizontal}>
                    horizontal
                </button>

                <button className='px-4 py-1 text-black bg-green-600' onClick={clearCanvas}>
                    reset
                </button>
            </div>
        </div>

    )
}

export default CuttingOptiimizer
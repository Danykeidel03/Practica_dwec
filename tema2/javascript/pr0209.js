let calle=prompt("Dime en que calle vives")
calle=String(calle);

if ( calle == "Calle Los Claveles" || calle == "Calle El Rosal" || calle == "Calle Las Hortensias" || calle == "Calle Las Margaritas") {
    console.log(`Tienes que tomar la Linea 1 para ir desde la ${calle} hasta el trabajo`);
    }else if ( calle == "Calle Teleno" || calle == "Calle Catoute" || calle == "Calle Peña Ubiña" || calle == "Calle Vizcocho") {
        console.log(`Tienes que tomar la Linea 2 para ir desde la ${calle} hasta el trabajo`);
        }else if ( calle == "Calle Astorga" || calle == "Calle La Bañeza" || calle == "Calle Benavente") {
            console.log(`Tienes que tomar la Linea 3 para ir desde la ${calle} hasta el trabajo`);
                }else {
                    console.log("Calle incorrecta");
                }
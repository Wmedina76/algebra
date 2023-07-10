function holaWmedina(){
    alert('hola WMedina')
}
function linea1() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // Dibujar la línea en el canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(400, 400);
    ctx.stroke();
}


function linea2() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // Dibujar la línea en el canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    ctx.beginPath();
    ctx.moveTo(400, 0);
    ctx.lineTo(0, 400);
    ctx.stroke();
}


function linea3() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // Dibujar la línea en el canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 400);
    ctx.stroke();
}

function linea4() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // Dibujar la línea en el canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(400, 200);
    ctx.stroke();
}

function resp(){
document.getElementById("res1").innerHTML = "La distancia es: "+
distancia_1(3.5);
}
function distancia_1(a){
//Paso1: cargar las cordenadas 
x1=0
x2=400
y1=0
y2=400
//Paso2: calculo la distancia entre dos puntos
dis=((x2-x1)**2+(y2-y1)**2)**0.5
//Retorno el valor calculado(distancia entre dos puntos)
return(dis);
}

function resp2(){
document.getElementById("res2").innerHTML = "La distancia es: "+
distancia_2(3.5);
}
function distancia_2(a){
//Paso1: cargar las cordenadas 
x1=400
x2=0
y1=0
y2=400
//Paso2: calculo la distancia entre dos puntos
dis=((x2-x1)**2+(y2-y1)**2)**0.5
//Retorno el valor calculado(distancia entre dos puntos)
return(dis);
}

function resp3(){
document.getElementById("res3").innerHTML = "La distancia es: "+
distancia_3(3.5);
}
function distancia_3(a){
//Paso1: cargar las cordenadas 
x1=200
x2=200
y1=0
y2=400
//Paso2: calculo la distancia entre dos puntos
dis=((x2-x1)**2+(y2-y1)**2)**0.5
//Retorno el valor calculado(distancia entre dos puntos)
return(dis);
}

function resp4(){
document.getElementById("res4").innerHTML = "La distancia es: "+
distancia_4(3.5);
}
function distancia_4(a){
//Paso1: cargar las cordenadas 
x1=0
x2=400
y1=200
y2=200
//Paso2: calculo la distancia entre dos puntos
dis=((x2-x1)**2+(y2-y1)**2)**0.5
//Retorno el valor calculado(distancia entre dos puntos)
return(dis);
}


function eliminar(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 400, 400);
}
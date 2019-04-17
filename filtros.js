function main() {
  console.log("Empezamos");

  var img = document.getElementById('img_original');
  var canvas = document.getElementById('display');

  var display_R = document.getElementById('display_R')
  var deslizador_R = document.getElementById('deslizador_R');
  var deslizador_G = document.getElementById('deslizador_G');
  var deslizador_B = document.getElementById('deslizador_B');


  // IDEA: establece el tamaño del canvas = que la imagen a preocesar
  canvas.width = img.width;
  canvas.height = img.height;
  // IDEA: Contexto del canvas para trabajar
  var ctx = canvas.getContext("2d");
  // IDEA: dibuja la imagen original en el canvas
  ctx.drawImage(img, 0, 0);

/////////// FILTRO R ////////////////////////
  deslizador_R.oninput = () => {
    display_R.innerHTML = deslizador_R.value
    ctx.drawImage(img, 0,0);
    //Obtener la imagen del canvas en pixeles
    // En Chrome este comando da error, utilizar Firefox
    // para funcionar en chrome añadir al directorio de chrome:
    //--allow-file-access-from-files
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //-- Obtener el array con todos los píxeles
    var data = imgData.data
    //-- Obtener el umbral de rojo del desliador
    umbral_R = deslizador_R.value
    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > umbral_R)
        data[i] = umbral_R;
    }
      //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }




































///////////////////// DATOS DE LA IMAGEN /////////////////////////////
/*
  console.log("Tamaño de data: " + data.length);
  npixels = canvas.width * canvas.height
  console.log("Anchura (en pixeles): " + canvas.width)
  console.log("Altura (en pixeles): " + canvas.height)
  console.log("Pixeles totales: " + npixels)
  //-- Puesto que cada pixel ocupa 4 bytes, el array de píxeles
  //-- tiene un tamaño de 4 * numero de pixeles
  console.log("Total de datos de la imagen: " + npixels * 4)
////////////////////////////////////////////////////////////////////
*/
}

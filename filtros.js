function main() {
  console.log("Empezamos")

  //-- Imagen original
  var img = document.getElementById('imagesrc')
  //-- Canvas
  var canvas = document.getElementById('display');

  //-- RGB
  Rojo = document.getElementById('Rojo')
  Verde = document.getElementById('Verde')
  Azul = document.getElementById('Azul')
  Gris = document.getElementById('Gris')
  //-- Valores RGB
  R_value = document.getElementById('R_value');
  V_value = document.getElementById('V_value');
  A_value = document.getElementById('A_value');

  // Tamaño canvas = imagen
  canvas.width = img.width;
  canvas.height = img.height;

  // Contexto canvas
  var ctx = canvas.getContext("2d");

  //Colocar imagen en canvas (no modificado)
  ctx.drawImage(img, 0,0);
  // Obtener la imagen del canvas en pixeles
  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Umbrales RGB
  function print_img(data){
    Umbral_R = Rojo.value
    Umbral_V = Verde.value
    Umbral_A = Azul.value
    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > Umbral_R){
        data[i] = Umbral_R;
      }
      if (data[i+1] > Umbral_V){
        data[i+1] = Umbral_V;
      }
      if (data[i+1] > Umbral_A){
        data[i+2] = Umbral_A;
      }
    }
  }

  //
  Rojo.oninput = () => {
    //-- Mostrar el nuevo valor del Rojo
    R_value.innerHTML = Rojo.value

    ctx.drawImage(img, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //Obtener el array con todos los píxeles
    var data = imgData.data
    print_img(data);
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
  Verde.oninput = () => {
    V_value.innerHTML = Verde.value
    ctx.drawImage(img, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    print_img(data)
    ctx.putImageData(imgData, 0, 0);
  }
  Azul.oninput = () => {
    A_value.innerHTML = Azul.value
    ctx.drawImage(img, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    print_img(data)
    ctx.putImageData(imgData, 0, 0);
  }

  Gris.onclick=()=>{
      var imgDataGris = ctx.getImageData(0, 0, canvas.width, canvas.height);
      //-- Obtener el array con todos los píxeles
      var data = imgDataGris.data;
      //-- Filtrar la imagen según el nuevo umbral
      for (var i = 0; i < data.length; i+=4) {
        var R = data[i];
        var V = data[i+1];
        var A = data[i+2];
        // CIE luminance for the RGB
        // The human eye is bad at seeing red and blue, so we de-emphasize them.
        var Brillo = (3*R + 4*V + A)/8;
        data[i] = data[i+1] = data[i+2] = Brillo
        }
        ctx.putImageData(imgDataGris, 0, 0);
}



}

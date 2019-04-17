function main() {
  console.log("Empezamos");


  var img = document.getElementById('img-original');
  var canvas = document.getElementById('display');

  // IDEA: establece el tamaño del canvas = que la imagen a preocesar
  canvas.width = img.width;
  canvas.height = img.height;

  // IDEA: Contexto del canvas para trabajar
  var ctx = canvas.getContext("2d");

  // IDEA: dibuja la imagen original en el canvas

  ctx.drawImage(img, 0, 0);


  // IDEA: obtener la imagen del canvas en pixeles --- !!!En Chrome este comando da error, utilizar Firefox
  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // IDEA: obtener el array con los pixeles
  var data = imgData.data;

  console.log("Tamaño de data:" + data.lenght);

  npixels = canvas.width * canvas.height
  console.log("Anchura (en pixeles): " + canvas.width)
  console.log("Altura (en pixeles): " + canvas.height)
  console.log("Pixeles totales: " + npixels)
}

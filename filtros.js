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
  ctx.drawImage(img,0,0);
}

function colorUno(titulo) {
  titulo = document.getElementsByTagName('h1')[0];
  titulo.style.backgroundColor = "#4d62d0";
  if (typeof titulo.children[0] !== 'undefined') {
    titulo.children[0].style.background = "inherit";
  }
}
// colorUno();

function colorDos(boton) {
  boton =document.getElementsByClassName("boton-accion")[0];
  boton.style.backgroundColor = "#149c5f";
  if (typeof boton.children[0] !== 'undefined') {
    boton.children[0].style.backgroundColor = "inherit";
  }
}
// colorDos();

function tamañoPaneles() {
  var contenido = document.querySelectorAll("[class^='item-']");
  for (var i = 0; i < contenido.length; i++) {
    contenido[i].style.width = "4%";
    contenido[i].style.backgroundColor = "#4d62d0";
  }
  for (var i = 1; i < contenido.length; i++) {
    contenido[i].style.display = "none";
  }
  menu = document.getElementsByClassName('main-row')[0];
  menu.style.width = "96%";
  menu.style.backgroundColor = "#fff";
  for (var i = 0; i < menu.children.length; i++) {
    menu.children[i].style.display = "block";
  }
}
// tamañoPaneles();

function reducirTamaño() {
  var reducir = document.getElementsByClassName('bottom-row')[0];
  reducir.style.width = "18%";
}
// reducirTamaño();

function aumentarTamaño() {
  var aumentar = document.getElementsByClassName('bottom-row')[0];
  aumentar.style.width = "20%";
}
// aumentarTamaño();

function reducirTamañoLetra(){
  var reducir = document.querySelectorAll("[class^='item-'] h1");
  for (var i = 0; i < reducir.length; i++) {
    reducir[i].style.fontSize = "small";
  }
}
// reducirTamañoLetra();

function aumentarTamañoLetra(){
  var aumentar = document.querySelectorAll("[class^='item-'] h1");
  for (var i = 0; i < aumentar.length; i++) {
    aumentar[i].style.fontSize = "xx-large";
  }
}
// aumentarTamañoLetra();

//
// function cambiarFondo(background) {
//   document.getElementsByTagName('body')[0].style.backgroundColor= "#4d62d0"  ;
//   var hijo = document.getElementsByTagName("body")[0].children[0];
// }
//
// function cambiarFondo(background) {
//   document.getElementsByTagName('body')[0].style.backgroundColor= "#149c5f"  ;
//   if (body.children[0]) {
//     document.getElementsByTagName('body.children[0]')[0].style.backgroundColor= "inherit";
//   }
// }
//
// function tamañoPanel() {
//   document.querySelector("div[class='item']").style.width= "4%";
//   document.querySelector("div[class='it em']").style.backgroundColor= "#4d62d0";
//
// }
function colorUno(titulo) {
  titulo = document.getElementsByTagName('h1')[0];
  titulo.style.backgroundColor = "#4d62d0";
  if (typeof titulo.children[0] !== 'undefined') {
    titulo.children[0].style.background = "inherit";
  }
}
colorUno();


function colorDos(boton) {
  boton =document.getElementsByClassName("container-botones")[0];
  boton.style.backgroundColor = "red";
  if (typeof boton.children[0] !== 'undefined') {
    boton.children[0].style.backgroundColor = "inherit";
  }
}
colorDos();

function tamañoPaneles(menu) {
  for (var i = 0; i < document.querySelectorAll("[class^='item-']").length; i++) {
    document.querySelectorAll("[class^='item-']")[i].style.width = "4%";
    document.querySelectorAll("[class^='item-']")[i].style.backgroundColor = "#4d62d0";
  }
  for (var i = 0; i < document.querySelectorAll("[class^='item-']").length; i++) {
    document.querySelectorAll("[class^='item-']")[i].style.display = "none";
  }
  menu = document.getElementsByClassName('main-row')[0];
  menu.style.width = "96%";
  menu.style.backgroundColor = "white";
  for (var i = 0; i < menu.children.length; i++) {
    menu.children[i].style.display = "block";
  }
}

function reducirTamaño(reducir) {
  reducir = document.getElementsByClassName('boton-accion')[2];
  reducir.style.width = "18%";
}
reducirTamaño();

function aumentarTamaño(aumentar) {
  aumentar = document.getElementsByClassName('boton-accion')[1];
  aumentar.style.width = "20%";
}
aumentarTamaño();
function reducirTamañoLetra(){
  document.querySelectorAll("[class^='item-'] h1")[0].style.fontSize = "small";
  document.querySelectorAll("[class^='item-'] h1")[1].style.fontSize = "small";
  document.querySelectorAll("[class^='item-'] h1")[2].style.fontSize = "small";
}

function aumentarTamañoLetra(){
  document.querySelectorAll("[class^='item-'] h1")[0].style.fontSize = "xx-large";
  document.querySelectorAll("[class^='item-'] h1")[1].style.fontSize = "xx-large";
  document.querySelectorAll("[class^='item-'] h1")[2].style.fontSize = "xx-large";
}

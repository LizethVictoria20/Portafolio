let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");
let blog = document.getElementById("blog");
let getBlog = document.getElementById("getBlog");
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");
let parrafo = document.getElementById("parrafo");
let dowland = document.getElementById("dowland");
console.log(getResume);

function remove() {
  about.classList.remove("view");
  getAbout.classList.remove("selected");
  resume.classList.remove("view");
  getResume.classList.remove("selected");
  works.classList.remove("view");
  getWorks.classList.remove("selected");
  blog.classList.remove("view");
  getBlog.classList.remove("selected");
  contact.classList.remove("view");
  getContact.classList.remove("selected");
  parrafo.classList.remove("view");
  dowland.classList.remove("selected");
}

getAbout.addEventListener("click", function(e) {
  //window.requestAnimationFrame(function() {
  //about.style.opacity = about.style.opacity + 0.05; //Hacer aniamciones y lo ejecutara a la velocidad 60 veces por segundo
  //});
  if (window.innerWidth > 1040) {
    e.preventDefault();
    remove("about");
    about.classList.add("view");
    //about.style.backgroundColor = "coral"; //Cambiar el color cuando se selecciona
    getAbout.classList.add("selected");
  }
});
getResume.addEventListener("click", function(e) {
  if (window.innerWidth > 1040) {
    e.preventDefault();
    remove();
    resume.classList.add("view");
    getResume.classList.add("selected");
  }
});
getWorks.addEventListener("click", function(e) {
  if (window.innerWidth > 1040) {
    e.preventDefault();
    remove();
    works.classList.add("view");
    getWorks.classList.add("selected");
  }
});
getBlog.addEventListener("click", function(e) {
  if (window.innerWidth > 1040) {
    e.preventDefault();
    remove();
    blog.classList.add("view");
    getBlog.classList.add("selected");
  }
});
getContact.addEventListener("click", function(e) {
  if (window.innerWidth > 1040) {
    e.preventDefault();
    remove();
    contact.classList.add("view");
    getContact.classList.add("selected");
  }
});

var email = document.getElementById("email");
var form = document.getElementById("form");

email.addEventListener("input", function(event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

// Modal
// ---------------------------------------------------
function esHijoDeLineDown(elemento) {
  if (elemento.tagName === "BODY") return false;
  if (elemento.tagName === "DIV" && elemento.className === "line-down")
    return true;
  return esHijoDeLineDown(elemento.parentElement);
}

const mostrarVentana = function(event) {
  if (esHijoDeLineDown(event.target)) {
    event.preventDefault();
    var ventana = document.getElementById("bgventana");
    ventana.style.display = "block";
  }
};

let openModal = document.getElementById("openModal");
openModal.addEventListener("click", mostrarVentana);

const ocultarVentana = function(event) {
  var ventana = document.getElementById("bgventana");
  ventana.style.display = "none";
};

let closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", ocultarVentana);

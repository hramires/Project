function abrirMenu() {
    var menu = document.getElementById("menuNeutro");
    if(menu.style.display == "none")
    menu.style.display = "block";
    else
    menu.style.display = "none";
}

function pontosMenu() {
    var menu = document.getElementById("menu");
    if(menu.style.display == "none"){
    menu.src="assets/menuPontosAtendimento.png";
    menu.style.display = "block";
    }
    else
    menu.style.display = "none";
}

function coopMenu() {
    var menu = document.getElementById("menu");
    if(menu.style.display == "none"){
    menu.src="assets/menuCoop.png";
    menu.style.display = "block";
    }
    else
    menu.style.display = "none";
}


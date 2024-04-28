
    /* menu-burguer */
function toggleMenu() {
    var navMobile = document.getElementById("nav-mobile");
    var menuIcon = document.getElementById("menu-mobile").getElementsByTagName("img")[0];
    var fotoAlunoImg = document.querySelector("#foto-aluno img");

    if (navMobile.style.display === "block") {
        navMobile.style.display = "none";
        menuIcon.src = "imagens/icon-hamburger.svg";
        fotoAlunoImg.style.marginTop = "0";
        
    } else {
        navMobile.style.display = "block";
        menuIcon.src = "imagens/icon-close.svg";
        fotoAlunoImg.style.marginTop = "80px";
    }
}

let imagemAtual = 0;
const imagens = document.querySelectorAll("#acontece-fotos .imagem-container");
const intervalo = 5000; 

function mostrarImagem(index) {
    imagens.forEach((imagem, i) => {
        if (i === index) {
            imagem.style.display = "block";
        } else {
            imagem.style.display = "none";
        }
    });
}

function mudarImagem(delta) {
    imagemAtual += delta;
    if (imagemAtual < 0) {
        imagemAtual = imagens.length - 1;
    } else if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }
    mostrarImagem(imagemAtual);
}

function avancarAutomaticamente() {
    setInterval(() => {
        mudarImagem(1);
    }, intervalo);
}

mostrarImagem(imagemAtual);
avancarAutomaticamente();


document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelectorAll('.bar');
    
    bars.forEach(bar => {
      const value = bar.getAttribute('data-value');
      bar.style.height = `${value}%`;
    });
  });
  

  function Html(){
    var escre = document.getElementById("escrever")
    escre.innerHTML = "/* Tenho dominio no desenvolvimento de sites, formularios e graficos.*/"
  }

  function Css(){
    var escre = document.getElementById("escrever")
    escre.innerHTML = "/* considero o css uma feramenta poderosa já que ele muda completamente o site, o dominio de boa parte da estilização me ajuda muito.*/"
  }

  function Js(){
    var escre = document.getElementById("escrever")
    escre.innerHTML = "/* interações são uma das melhores partes do site,tenho pleno dominio dessas interações */"
  }

  function Jogos(){
    var escre = document.getElementById("escrever")
    escre.innerHTML = "/* Durante o curso desenvolvi diversas habilidades programando jogos, como logica e criatividade.*/"
  }

  function Back(){
    var escre = document.getElementById("escrever")
    escre.innerHTML = "/* estou na fase de aprendizado do back com o projeto da mernBiblioteca */"
  }


  const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", ()=>{
  animeScroll();
})
window.onscroll = function() {
    const header = document.getElementById("header");
    const logo = document.getElementById("logo");
  
    // Se a tela for menor que 700px, oculta o logo
    if (window.innerWidth < 700) {
      logo.style.display = "none";
      return; // Encerra a função aqui para não executar o restante do código
    }
  
    // Caso contrário, aplica a lógica do scroll normalmente
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      header.style.height = "40px";
      logo.style.display = "none";
    } else {
      header.style.height = "70px";
      logo.style.display = "flex";
    }
  };
  
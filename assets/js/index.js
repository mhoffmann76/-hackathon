window.onload = function () {
  document.querySelector(".menuMobile").addEventListener("click", function () {
    if (document.querySelector(".menu nav ul").style.display == "flex") {
      document.querySelector(".menu nav ul").style.display = "none";
    } else {
      document.querySelector(".menu nav ul").style.display = "flex";
    }
  });
};

var scroll = new SmoothScroll('a[href*="#"]', 'a[href*="_blank"]', {
  speed: 500,
});

const txtSenha = document.getElementById("txtSenha");
const txtConfSenha = document.getElementById("txtConfSenha");

txtConfSenha.addEventListener("input", (event) => {
  if (txtSenha.value != txtConfSenha.value) {
    txtConfSenha.setCustomValidity("As senhas não conferem!");
    txtConfSenha.reportValidity();
  } else {
    txtConfSenha.setCustomValidity("");
  }
});

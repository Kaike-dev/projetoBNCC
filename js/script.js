const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");

    document.body.style.overflow = "hidden";
  });
}

if (closeBtn && sidebar) {
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");

    document.body.style.overflow = "";
  });
}

const headerElement = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    headerElement.classList.add("encolhido");
  } else {
    headerElement.classList.remove("encolhido");
  }

  const progressBars = document.querySelectorAll(".progress");

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  progressBars.forEach((bar) => {
    if (isInViewport(bar.closest(".progress-bar")) && !bar.dataset.loaded) {
    }
  });
});
// --- LÓGICA DO MODO NOTURNO ---
const themeToggleBtn = document.getElementById("theme-toggle");

if (themeToggleBtn) {
  const themeIcon = themeToggleBtn.querySelector("i");

  // Verifica se já estava no modo escuro
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (themeIcon) themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  // Ação de clique no botão
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {
      if (themeIcon) themeIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      if (themeIcon) themeIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "light");
    }
  });
}

//cidades parceiras

const slides = document.querySelector(".slides");
const imagens = document.querySelectorAll(".slides img");
const btnEsquerda = document.querySelector(".esquerda");
const btnDireita = document.querySelector(".direita");

let indice = 0;

function mostrarSlide() {
  const largura = imagens[0].clientWidth;
  slides.style.transform = `translateX(${-indice * largura}px)`;
}

// Botão direita
btnDireita.addEventListener("click", () => {
  indice++;
  if (indice >= imagens.length) {
    indice = 0;
  }
  mostrarSlide();
});

// Botão esquerda
btnEsquerda.addEventListener("click", () => {
  indice--;
  if (indice < 0) {
    indice = imagens.length - 1;
  }
  mostrarSlide();
});

// Rolagem automática
setInterval(() => {
  indice++;
  if (indice >= imagens.length) {
    indice = 0;
  }
  mostrarSlide();
}, 3000);

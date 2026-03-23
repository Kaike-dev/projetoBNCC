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

document.addEventListener("DOMContentLoaded", () => {
  const carrossel = document.querySelector(".carrossel .fotos");
  const imagens = document.querySelectorAll(".carrossel .fotos img");
  const prevBtn = document.querySelector(".carrossel .prev");
  const nextBtn = document.querySelector(".carrossel .next");

  let index = 0;

  function mostrarImagem(i) {
    const largura = document.querySelector(".carrossel").clientWidth;
    carrossel.style.transform = `translateX(${-i * largura}px)`;
  }

  function proximaImagem() {
    index = (index + 1) % imagens.length;
    mostrarImagem(index);
  }

  function imagemAnterior() {
    index = (index - 1 + imagens.length) % imagens.length;
    mostrarImagem(index);
  }

  nextBtn.addEventListener("click", proximaImagem);
  prevBtn.addEventListener("click", imagemAnterior);

  setInterval(proximaImagem, 3000);

  window.addEventListener("resize", () => mostrarImagem(index));
});

console.log("hallo");

// logic respondsive

const btnRes = document.querySelector(".nav-btn-responsive");
const menu = document.querySelector(".nav-menu");

btnRes.addEventListener("click", () => {
	menu.classList.toggle("active");
	btnRes.classList.toggle("cross");
});

// Navbar scroll
let navbar = document.querySelector(".navbar");
let navMenu = document.querySelector(".nav-menu")
window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
    navMenu.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    navMenu.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const switchBtn = document.querySelector(".btn-switch");
  const switchContainer = document.querySelector(".switch-container");
  const firstSubtext = document.querySelector(".subtext-currency.first");
  const secondSubtext = document.querySelector(".subtext-currency.second");

  let rotateDeg = 180;

  switchBtn.addEventListener("click", function () {
    rotateDeg += 180;
    switchBtn.style.transform = `rotate(${rotateDeg}deg)`;
    switchContainer.style.flexDirection =
      switchContainer.style.flexDirection === "column"
        ? "column-reverse"
        : "column";
    switchContainer.classList.toggle("switched");
    [firstSubtext.innerHTML, secondSubtext.innerHTML] = [
      secondSubtext.innerHTML,
      firstSubtext.innerHTML,
    ];
    if (rotateDeg >= 360) {
      rotateDeg = 0;
    }
  });
});

AOS.init({
  disable: function () {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
  duration: 1200,
  easing: "ease-in-out", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom",
});

// logic copy clipboard

const copyButtonLabel = "Components";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");

    button.innerText = copyButtonLabel;
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // visual feedback that task is completed
  button.innerText = "Code Copied!";

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 700);
}

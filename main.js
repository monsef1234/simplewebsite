// Toggle Menu in small screens
const menu = document.getElementById("menu");
const links = document.getElementsByClassName("links")[0];

const toogleLinks = () => {
  links.classList.toggle("toggle");
};
menu.addEventListener("click", (eo) => {
  toogleLinks();
});
// Scroll Events
const navs = document.querySelectorAll("li");
navs.forEach((nav) => {
  nav.addEventListener("click", (eo) => {
    eo.preventDefault();
    const childrenElement = nav.firstElementChild;
    const getId = childrenElement.getAttribute("href").slice(1);
    const Element = document.getElementById(`${getId}`);
    window.scrollTo({
      top: Element.offsetTop,
      left: 0,
    });
  });
});
const popups = document.querySelectorAll(".popup");
popups.forEach((popup, index) => {
  if (index % 2) {
    popup.style.transform = `translateX(-100vw)`;
  } else {
    popup.style.transform = `translateX(100vw)`;
  }
});
popups.forEach((popup) => {
  if (
    popup.getBoundingClientRect().top <
    window.innerHeight - popup.offsetHeight
  ) {
    popup.style.transform = `translateX(0)`;
  }
});
window.addEventListener("scroll", (eo) => {
  popups.forEach((popup) => {
    console.log(popup.offsetWidth);
    if (popup.getBoundingClientRect().top < window.innerHeight - 100) {
      popup.style.transform = `translateX(0)`;
    }
  });
});

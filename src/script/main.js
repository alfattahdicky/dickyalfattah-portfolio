const toggler = document.getElementById("toggle");
toggler.style.fontSize = "1.8rem";
toggler.style.color = "white";

toggler.addEventListener("click", () => {
  if (toggler.className === "bi bi-filter-right") {
    toggler.className = "bi bi-x";
  } else {
    toggler.className = "bi bi-filter-right";
  }
});

window.addEventListener("load", () => {
  document.body.className = "d-block";
});

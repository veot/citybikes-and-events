// Show help menu
document.getElementById("help-open-btn").addEventListener("click", () => {
  document.querySelector(".help-bg").style.display = "flex";
});

// Hide help menu
document.querySelector(".help-close-btn").addEventListener("click", () => {
  document.querySelector(".help-bg").style.display = "none";
});


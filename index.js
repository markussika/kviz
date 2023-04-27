// saglabā to checkboxu js mainīgajā!
const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandeler);

function toggleThemeHandeler() {
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
  } else {
    html.dataset.theme = "light";
  }
}

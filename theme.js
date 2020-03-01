const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

localStorage.setItem("theme", themeMap["dark"]);

const theme = localStorage.getItem("theme");
const bodyClass = document.body.classList;
theme && bodyClass.add(theme);

function toggleTheme() {
  console.log("Hola");
  const current = localStorage.getItem("theme");
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem("theme", next);
}

document.getElementById("themeButton").onclick = toggleTheme;

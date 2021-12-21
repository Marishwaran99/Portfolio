const htmlEl = document.querySelector("html");
const toggleBtn = document.querySelector(".toggle");
var theme = localStorage.getItem("theme") || "light";

if (theme === "dark") {
  htmlEl.dataset.theme = "dark";
} else {
  htmlEl.dataset.theme = "light";
}
toggleBtn.addEventListener("click", () => {
  console.log("switch theme clicked");
  toggleTheme();
});

const toggleTheme = () => {
  theme = localStorage.getItem("theme");
  if (theme === "dark") {
    htmlEl.dataset.theme = "light";
    console.log("switching to light");

    localStorage.setItem("theme", "light");
  } else {
    htmlEl.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
    console.log("switch to dark");
  }
};

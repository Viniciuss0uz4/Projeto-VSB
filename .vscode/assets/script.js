function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/2º avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/assets/1º Avatar Projeto DivLinks.png")
  }
}

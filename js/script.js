function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/img/1º Avatar Projeto DivLinks.png")
  } else {
    img.setAttribute("src", "assets/img/2º avatar-light.png")
  }
}

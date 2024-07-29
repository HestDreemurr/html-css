let itens = 
document.querySelector("menu#itens")

function menu() {
  if (itens.style.display == "none") {
    itens.style.display = "block"
  } else {
    itens.style.display = "none"
  }
}
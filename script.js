function toggleMode() {
  const html = document.documentElement



  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  html.classList.toggle("light")
  // para mudar a foto ao apertar o botao - 
 
  // pegar a tag img
  
  // substituir a imagem
  // se tiver light mode, adicionar a imagem light
  //se tiver sem light mode, manter a imagem normal
 
}
document.addEventListener("DOMContentLoaded", function () {
  let themeMeta = document.querySelector("meta[name='theme-color']")
  if (themeMeta) {
    // Tenta ajustar a cor para um valor escuro (ou claro) dependendo do tema
    themeMeta.setAttribute("content", "#000000") // Altere para a cor desejada
  } else {
    let newMeta = document.createElement("meta")
    newMeta.setAttribute("name", "theme-color")
    newMeta.setAttribute("content", "#000000") // Altere para a cor desejada
    document.head.appendChild(newMeta)
  }
})


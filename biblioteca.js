var todosLivros = []
var sinopse = document.getElementById("sinop")
var modal = document.getElementById("myModal");
var span = document.getElementById("close");
var txtSinopse =  document.getElementById("txtSinopse")
var campos = document.querySelectorAll("input")

function limpar(){
  campos.forEach(function (elem) {
    elem.value = ""
  })
}

function cadastrar() {
  let nome = document.getElementById("nomelivro").value
  let autor = document.getElementById("autorlivro").value
  let editora = document.getElementById("editoralivro").value
  let paginas = Number(document.getElementById("qtepag").value)
  let capalivro = document.getElementById("capa").value
  let divLivros = document.getElementById("todosLivros")

  todosLivros.push(
    livro = {
      nomeLivro: nome,
      autorLivro: autor,
      editoraLivro: editora,
      paginasLivro: paginas,
      capaLivro: capalivro,
      sinopse: sinopse
    })

  let cardLivro = document.createElement("div")
  let imgCapa = document.createElement("img")
  let btn = document.createElement("button")


  cardLivro.innerHTML = `Nome: ${nome}
  <br>Autor: ${autor}
  <br>Editora: ${editora}
  <br>Págs: ${paginas} `

  imgCapa.src = capalivro
  btn.innerHTML = "Sinopse"
  btn.id = "btn"


  divLivros.appendChild(cardLivro)
  cardLivro.appendChild(imgCapa)
  cardLivro.appendChild(btn)

  limpar()

  // let campos = document.querySelectorAll("input")
  // campos.forEach(function (elem) {
  //   elem.value = ""
  // })

  function showSinopse(event) {
    if (event.target.id == "btn") {
      txtSinopse.innerHTML = sinopse.value
      modal.style.display = "block";
      // alert(sinopse.value)
    }
  }

  function closeModal(event) {
    modal.style.display = "none";
  }

  divLivros.addEventListener("click", showSinopse)
  span.addEventListener("click", closeModal)
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function buscar() {
  let livro = document.getElementById("nomeBusca").value
  let divBusca = document.getElementById("busca")
  let resulBusca = document.getElementById("resulBusca")

  resulBusca.innerHTML = ""
  divBusca.appendChild(resulBusca)

  todosLivros.forEach(function (elem) {
    if (livro == elem.nomeLivro) {
      let cardLivro = document.createElement("div")
      let imgCapa = document.createElement("img")
      let btn = document.createElement("button")

      cardLivro.innerHTML = `Nome: ${elem.nomeLivro}
      <br>Autor: ${elem.autorLivro}
      <br>Editora: ${elem.editoraLivro}
      <br>Págs: ${elem.paginasLivro}`

      imgCapa.src = elem.capaLivro
      btn.innerHTML = "Sinopse"
      btn.id = "btn"

      resulBusca.appendChild(cardLivro)
      cardLivro.appendChild(imgCapa)
      cardLivro.appendChild(btn)

    }
  })



  // let campos = document.querySelectorAll("input")
  // campos.forEach(function (elem) {
  //   elem.value = ""
  // })

  function showSinopse(event) {
    if (event.target.id == "btn") {
      txtSinopse.innerHTML = sinopse.value
      modal.style.display = "block";
      // alert(sinopse.value)
    }
  }

  function closeModal(event) {
    modal.style.display = "none";
  }

  divBusca.addEventListener("click", showSinopse)
  span.addEventListener("click", closeModal)
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  limpar()
}
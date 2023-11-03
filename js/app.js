let amigos = [];
let btnAdiciona = document.getElementById("btn_adiciona");
let btnSorteia = document.getElementById("btn_sorteia");
let limiteMinimo = 0;

function limpaNome() {
  document.getElementById("nome-amigo").value = "";
  document.getElementById("nome-amigo").focus();
}
function limpaListas() {
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}

function adicionar() {
  if (document.getElementById("nome-amigo").value == "") {
    alert("Informe um nome.");
    return;
  }

  let nomeAmigo = document
    .getElementById("nome-amigo")
    .value.trim()
    .toUpperCase();
  let listaAmigos = document.getElementById("lista-amigos");

  if (amigos.includes(nomeAmigo)) {
    alert(`${nomeAmigo} já está na lista.`);
    limpaNome();
    return;
  } else {
    amigos.push(nomeAmigo);
  }
  if (listaAmigos.innerHTML == "") {
    listaAmigos.innerHTML = nomeAmigo;
  } else {
    listaAmigos.innerHTML = listaAmigos.innerHTML + ", " + nomeAmigo;
  }
  limpaNome();
  console.log(amigos.length);
}

function sortear() {
  console.log(amigos.length);
  if (amigos.length == 0) {
    alert("Não há nomes para sorteio");
    return;
  }
  embaralha(amigos);
  limiteMinimo = document.getElementById("quantidade-minima").value;
  if (limiteMinimo == 0) {
    alert("Defina o limite mínimo");
    return;
  }

  if (limiteMinimo == 1) {
    alert("O limite mínimo deve ser maior que 1");
    return;
  }

  let listaSorteio = document.getElementById("lista-sorteio");
  let textoFalta = "";

  for (i = 0; i < amigos.length; i++) {
    if (amigos.length < limiteMinimo) {
      if (limiteMinimo - amigos.length > 1) {
        textoFalta = "Faltam";
      } else {
        textoFalta = "Falta";
      }
      alert(
        `${limiteMinimo} nomes são necessários. ${textoFalta} ${
          limiteMinimo - amigos.length
        }.`
      );
      return;
    }
    if (i == amigos.length - 1) {
      listaSorteio.innerHTML =
        listaSorteio.innerHTML + amigos[i] + " --> " + amigos[0] + "<br>";
    } else {
      listaSorteio.innerHTML =
        listaSorteio.innerHTML + amigos[i] + " --> " + amigos[i + 1] + "<br>";
    }
  }
  addRemove('add');
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
  addRemove('remove');
}

function addRemove(value) {
  if (value == "remove") {
    limiteMinimo = 0;
    document.getElementById("quantidade-minima").value = 0;
    document.getElementById("num").innerHTML = 0;
    limpaListas();
    limpaNome();
    amigos = [];
    btnAdiciona.disabled = false;
    document.getElementById("quantidade-minima").disabled = false;
    btnAdiciona.classList.remove("inactive");
    btnSorteia.disabled = false;
    btnSorteia.classList.remove("inactive");
  } else {
    btnAdiciona.disabled = true;
    document.getElementById("quantidade-minima").disabled = true;
    btnAdiciona.classList.add("inactive");
    btnSorteia.disabled = true;
    btnSorteia.classList.add("inactive");
  }
}

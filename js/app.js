let amigos = [];

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

  let nomeAmigo = document.getElementById("nome-amigo").value.trim().toUpperCase();
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
}

function sortear() {
  embaralha(amigos);
  let limiteMinimo = 2;
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
  limpaListas();
  limpaNome();
  amigos = [];
}

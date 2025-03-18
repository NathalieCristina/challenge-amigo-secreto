let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('nombreAmigo');
    const nombre = input.value.trim();
    if (nombre) {
        amigos.push(nombre);
        input.value = '';
        document.getElementById('resultado').innerHTML = ''; 
        mostrarLista();
    }
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '<h3>Amigos añadidos:</h3>';
    lista.innerHTML += amigos.map(amigo => `<div>${amigo}</div>`).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nombreAmigo').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            agregarAmigo();
        }
    });
});

function sortearAmigo() {
    if (amigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        const resultado = document.getElementById('resultado');
        document.getElementById('listaAmigos').innerHTML = '';
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
        amigos = [];
    } else {
        alert('Primero debes agregar amigos a la lista');
    }
}


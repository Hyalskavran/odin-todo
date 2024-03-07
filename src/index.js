import './style.css'

function body() {
    const a = document.createElement('h1');
    a.innerText = "Test Header";

    document.body.appendChild(a);
}

body();
function init() {
    var output = document.getElementById("output");
    output.innerHTML += "Href: " + window.location.href
        + "<br>Protocal: " + window.location.protocol
        + "<br>Host: " + window.location.host
        + "<br>Path: " + window.location.pathname 
        + "<br>Hash: " + window.location.hash;
}

window.onload = init;
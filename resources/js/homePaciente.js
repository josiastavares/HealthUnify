const urlParams = new URLSearchParams(window.location.search);

const products = urlParams.get("name")

document.querySelector('#welcomeMessage').innerHTML += `${products}`

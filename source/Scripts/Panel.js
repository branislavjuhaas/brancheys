let Products = document.getElementById("Prods");
let Contacts = document.getElementById("Conts");
let About = document.getElementById("About");

Products.onclick = function () {
  window.open("subpages/products.html", "_self");
};

About.onclick = function () {
  window.open("subpages/about.html", "_self");
};

Contacts.onclick = function () {
  window.open("subpages/contacts.html", "_self");
};

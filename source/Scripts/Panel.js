let Products = document.getElementById("Prods");
let Contacts = document.getElementById("Conts");
let About = document.getElementById("About");
let Other = document.getElementById("Other");

Products.onclick = function () {
  window.open("Subpages/Products.html", "_self");
};

About.onclick = function () {
  window.open("Subpages/About.html", "_self");
};

Contacts.onclick = function () {
  window.open("Subpages/Contacts.html", "_self");
};

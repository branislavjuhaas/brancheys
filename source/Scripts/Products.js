let Download = document.getElementById("Download");
let Gasbag = document.getElementById("Gasbag");
let Morsica = document.getElementById("Morsica");
let Allay = document.getElementById("Allay");
let Title = document.getElementById("Title");
let ProductImage = document.getElementById("ProdImage");
let Description = document.getElementById("Description");
let Menu = document.getElementById("Menu");
let Combed = false;
let MsDos = document.createElement("button");
let Android = document.createElement("button");
let Arrow = document.createElement("t");
let Microbit = document.createElement("button");
let Tab = "GASBAG";

Gasbag.onclick = function () {
  Tab = "GASBAG";
  Title.innerHTML = Tab;
  ProductImage.src = "../Images/Products/Gasbag.png";
  Description.innerText =
    "Gasbag, game about you shooting balloons by legendary programmer Branislav Juhás. You can enjoy it on multiple scale of platforms. From random microcomputer Microbit to nostalgic Microsoft MS DOS or nice smartphone system, Android. ";
  Download.innerText = "Download";
};

Morsica.onclick = function () {
  Tab = "MORSICA";
  Title.innerHTML = Tab;
  ProductImage.src = "../Images/Products/Morsica.png";
  Description.innerText =
    "Morsica, aplication for legendary microcontroler Arduino by fabled developer Branislav Juhás. Pick your arduino uno and translate every text, that you want to Morse Code. Just connect it to your shipped nice console environment on Windows computer and start translating.";
  Download.innerText = "Download";
  if (Combed) {
    hide();
  }
};

Allay.onclick = function () {
  Tab = "ALLAY ENGINE";
  Title.innerHTML = Tab;
  ProductImage.src = "../Images/Products/Allay.png";
  Description.innerText =
    "Allay Engine, Revolutionary game engine for MS DOS is still in development, but you can look for wonderfull result soon.";
  Download.innerText = "Can't Download";
  if (Combed) {
    hide();
  }
};

Download.onclick = function () {
  if (Tab == "GASBAG") {
    if (!Combed) {
      show();
    } else {
      hide();
    }
  } else if (Tab == "MORSICA") {
    download("../Files/Morsica.zip", "Morsica.zip");
  } else if (Tab == "ALLAY ENGINE") {
  }
};

MsDos.onclick = function () {
  download("../Files/GDT.zip", "Gasbag.zip");
  hide();
};

Microbit.onclick = function () {
  download("../Files/GMB.zip", "Gasbag.zip");
  hide();
};

Android.onclick = function () {
  window.open(
    "https://play.google.com/store/apps/details?id=com.Brancheys.Gasbag",
    "_blank"
  );
  hide();
};

function download(fileUrl, fileName) {
  var a = document.createElement("a");
  a.href = fileUrl;
  a.setAttribute("download", fileName);
  a.click();
}

function hide() {
  Combed = false;
  Arrow.remove();
  Android.remove();
  MsDos.remove();
  Microbit.remove();
}

function show() {
  Combed = true;
  Arrow.innerHTML = "‹";
  Arrow.className = "menu";
  Menu.insertBefore(Arrow, Download);

  Android.innerHTML = "Android";
  Android.className = "menu";
  Menu.insertBefore(Android, Arrow);

  MsDos.innerHTML = "Ms Dos";
  MsDos.className = "menu";
  Menu.insertBefore(MsDos, Android);

  Microbit.innerHTML = "Microbit";
  Microbit.className = "menu";
  Menu.insertBefore(Microbit, MsDos);
}

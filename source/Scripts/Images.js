let Left = document.getElementById("Left");
let Right = document.getElementById("Right");
let Images = document.getElementById("Images");
let Indexs = 0;
let Max = 2;

Left.onclick = function () {
  if (Indexs > 0) {
    Indexs--;
    Images.src = "Images/Front/Front" + Indexs.toString() + ".png";
    if (Indexs == 0) {
      Left.style.display = "none";
    } else if (Indexs == Max - 1) {
      Right.style.display = "unset";
    }
  }
};

Right.onclick = function () {
  if (Indexs < Max) {
    Indexs++;
    Images.src = "Images/Front/Front" + Indexs.toString() + ".png";
    if (Indexs == Max) {
      Right.style.display = "none";
    } else if (Indexs == 1) {
      Left.style.display = "unset";
    }
  }
};

void Simage();
{
  Images.src = "Images/Front/Front1.png";
}

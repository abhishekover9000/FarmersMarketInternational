var overlay = document.getElementById("overLay");
var xpopup = document.getElementById("xPopup");
var ypopup = document.getElementById("yPopup");
var zpopup = document.getElementById("zPopup")

document.getElementById("x").onclick = function () {
    overlay.style.display = "block";
    xpopup.style.display = "block";
};
document.getElementById("y").onclick = function () {
    overlay.style.display = "block";
    ypopup.style.display = "block";
};
overlay.onclick = function () {
    overlay.style.display = "none";
    xpopup.style.display = "none";
    ypopup.style.display = "none";
};

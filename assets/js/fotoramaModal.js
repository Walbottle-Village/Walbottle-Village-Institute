// Get the modal
var modal = document.getElementById("fotoModal");
var btn = document.getElementById("fotoBtn");
var span = document.getElementsByClassName("fotoModalClose")[0];
btn.onclick = function() {
modal.style.display = "block";
}
span.onclick = function() {
	modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {modal.style.display = "none";}
}
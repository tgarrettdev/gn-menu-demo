//JavaScript code
function showPopup() {
  var popup = document.getElementById("popup");
  var readMore = document.getElementById("readMore");
  var img = document.getElementById("image");
  popup.style.display = "block";
  readMore.style.display = "none";
}

function closePopup() {
  var popup = document.getElementById("popup");
  var readMore = document.getElementById("readMore");
  popup.style.display = "none";
  readMore.style.display = "block";
}



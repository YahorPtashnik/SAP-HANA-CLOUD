goHome.onclick = function() {
    document.location.href = "index.html"
}

insertFlexBox.onclick = function() {
document.getElementById("body").innerHTML = "<div class='main-container'><div class='flex-first-raw'><div class='first-raw-item red ff-item'></div><div class='first-raw-item orange fs-item'></div></div><div class='flex-second-raw'><div class='second-raw-item green'></div></div><div class='flex-third-raw'><div class='third-raw-item brown'></div><div class='third-raw-item blue ts-item'></div><div class='third-raw-item purple'></div></div></div>";
}
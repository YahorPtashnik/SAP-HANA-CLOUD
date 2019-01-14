var i = 0;
for (i; i < 9; i++) {
    if (i % 2 == 0) {
        var secel = document.createElement("div");
        secel.classList.add("item");
        secel.innerHTML = '<div class="item" onclick="generateChatMsg(' + i + ')"><img src="IMG/URAS.jpg" alt=""><div class="name">URAS</div></div>';
        var cont2 = document.getElementById("scroll-list");
        cont2.appendChild(secel);
    } else {
        var secel = document.createElement("div");
        secel.classList.add("item");
        secel.innerHTML = '<div class="item" onclick="generateChatMsg(' + i + ')"><img src="IMG/MAKSON.jpg" alt=""><div class="name">MAKS</div></div>';
        var cont2 = document.getElementById("scroll-list");
        cont2.appendChild(secel);
    }
}

function generateChatMsg(param) {
    var cont = document.getElementById("chat");
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
    for (var i = 0; i < 9; i++) {
        if (param % 2 == 0) {
            var el = document.createElement("div");
            el.classList.add("chat");
            el.innerHTML = '<div class="message"><div> <img src="IMG/URAS.jpg"></div><div class="message-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem animimollitia accusamus sit aliquam sint repudiandae, corrupti temporibus alias amet laudantium at provident hic facilis quisquam illo fugit tempore natus!</p></div></div><div class="answer"><div class="answer-text"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima reprehenderit doloremque, ipsam corporis voluptates eaque iusto? Repudiandae doloribus rerum officiis vitae nisi cumque dolores qui quo quidem veniam! Tenetur, fugit.</p></div><div class="answer-avatar"><img src="IMG/MAKSON.jpg" alt=""></div></div>';
            cont.appendChild(el);
        } else {
            var el = document.createElement("div");
            el.classList.add("chat");
            el.innerHTML = '<div class="message"><div> <img src="IMG/MAKSON.jpg"></div><div class="message-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div><div class="answer"><div class="answer-text"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima reprehenderit doloremque, ipsam corporis voluptates eaque iusto? Repudiandae doloribus rerum officiis vitae nisi cumque dolores qui quo quidem veniam! Tenetur, fugit.</p></div><div class="answer-avatar"><img src="IMG/URAS.jpg" alt=""></div></div>';
            var cont = document.getElementById("chat");
            cont.appendChild(el);
        }
    }
}
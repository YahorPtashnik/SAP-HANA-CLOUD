function App() {
    this.data;
}
var url = "http://localhost:3000/posts"

function a() {
    this.userId;
    this.id;
    this.title;
    this.body;
}

App.prototype.getAll = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status == 200) {
        this.data = JSON.parse(xhr.response);
    }
}
displayAll = function () {
    app.getAll();
    var i = 0;
    var rows = '';
    var el = document.getElementById('data');
    for (i; i < app.data.length; i++) {
        rows += '<tr>';
        rows +=
            '<td>' + app.data[i].userId + '</td>' +
            '<td>' + app.data[i].id + '</td>' +
            '<td>' + app.data[i].title + '</td>' +
            '<td>' + app.data[i].body + '</td>' +
            '<td><button class="table-btn" onclick="deleteObj(' + app.data[i].id + ')">Delete</button></td>' +
            '<td><button class="table-btn" onclick="changeObj(' + app.data[i].id + ')">Edit</button></td>';
        rows += '</tr>';
    }
    return el.innerHTML = rows;
}

deleteObj = function (id) {
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url + '/' + id, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();
}

changeObj = function (id) {
    document.location.href = ("pp.html" + "?rowID=" + id);
}

goToForm = function () {
    document.location.href = "pp.html";
}
var app = new App();
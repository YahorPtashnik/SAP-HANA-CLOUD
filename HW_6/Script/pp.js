function App() {
    this.data;
}
var uri = new URL(window.location.href);
var url = "http://localhost:3000/posts"

function Post() {
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

createObj = function () {
    var newPost = new Post();

    var xhr = new XMLHttpRequest();
    if (uri.searchParams.get('rowID')) {
        newPost.userId = document.getElementById("userId").value;
        newPost.title = document.getElementById("title").value;
        newPost.body = document.getElementById("body").value;
        var newData = JSON.stringify(newPost);
        xhr.open('PUT', url + "/" + uri.searchParams.get('rowID'), false);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(newData);
    } else {
        newPost.userId = document.getElementById("userId").value;
        newPost.title = document.getElementById("title").value;
        newPost.body = document.getElementById("body").value;
        var newData = JSON.stringify(newPost);
        xhr.open('POST', url, false);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(newData);
    }
}
var app = new App();
app.getAll();
retObj = function () {
    var retO;
    for(var i = 0; i<app.data.length; i++) {
        if(app.data[i].id == uri.searchParams.get('rowID')) {
            retO = app.data[i];
            break;
        }
    }
    return retO;
}
if(uri.searchParams.get('rowID')){
    var ob = retObj();
    var rowID = uri.searchParams.get('rowID') - 1;
    document.getElementById("id").value = uri.searchParams.get('rowID');
    document.getElementById("userId").value = ob.userId;
    document.getElementById("title").value = ob.title;
    document.getElementById("body").value = ob.body;
} else {
    document.getElementById("id").value = app.data[app.data.length - 1].id + 1;
}
function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            showPic(this);
            return false;
        }
    }
}
function showPic(whicpic) {
    if (!document.getElementById("placeholder")) return false;
    var sourse = whicpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", sourse);
    var text = whicpic.getAttribute("title");
    //var description = document.getElementById("description");
    //description.firstChild.nodeValue = text;
    if (document.getElementById("description")) {
        var txt = whicpic.getAttribute("title");
        var description = document.getElementByid("description");
        description.firstChild.nodeValue = txt;
    }
    return true;
}
function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);
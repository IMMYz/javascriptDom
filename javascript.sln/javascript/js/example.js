window.onload = function () {
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML = "<p>I inserted <em>this<em> content.</p>";
}
window.onload = function () {
    var para = document.createElement("p");
    var info = "nodeName: ";
    info += para.nodeName;
    info += " nodeType: ";
    info += para.nodeType;
    alert(info);
}
//window.onload = function(){
//    var para = document.createElement("p");
//    var textdiv = document.getElementById("testdiv");
//    textdiv.appendChild(para);
//    var txt = document.createTextNode("hello world!");
//    para.appendChild(txt);
//}
//document.getElementById("textdiv").appendChild(document.createElement("p"));一步到位写法
//window.onload = function () {
//    var para = document.createElement("p");
//    var txt = documeng.creatTextNode("hello world 222");
//    para.appendChild(txt);
//    var testdiv = document.getElementById("testdiv");
//    testdiv.appendChild(para);
//}顺序兑换 子节点先行连接再连接最上级结点

window.onload = function () {
    var para = document.createElement("p");
    var txt1 = document.createTextNode("This is ");
    para.appendChild(txt1);
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode("my");
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);
    var txt3 = document.createTextNode("content");
    para.appendChild(txt3);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}
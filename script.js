function squareDiv(){
    var div = document.createElement("div");
    div.setAttribute("class","square");
    div.appendChild(document.createTextNode('hello'));
    return div;
}

function createGrid(){
    var container = document.createElement("div");
    container.setAttribute("id","container");
    title.appendChild(text);
    var Div =  document.createElement("div");
    Div.setAttribute("class","grid");
    Div.setAttribute("id","grid");
    for(var i=0;i<256;i++){
       Div.appendChild(squareDiv());
    }
container.appendChild(Div);
return container;
}
var title = document.createElement("h4");
var text = document.createTextNode('The ultimate grid');
document.body.appendChild(title);
document.body.appendChild(createGrid());

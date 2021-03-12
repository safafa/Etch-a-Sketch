var Grid;
function squareDiv(){
    var div = document.createElement("div");
    div.setAttribute("class","square");
    return div;
}

function sizeButton(){
    var btn = document.createElement('button');
    btn.textContent ='Number of boxes';
    btn.style.color = 'black';
    btn.setAttribute('onclick','{getNumber()}');
    return btn;  
}
function getNumber(){
    number = prompt("Please enter number between 1 and 100 ", "16");
     if(number <= 0 || number > 100){
         getNumber();
        }else{
            New = createGrid(number); 
            document.body.replaceChild(New , Grid);
             Grid = New;
             }
}

function createGrid(number){
    var container = document.createElement("div");
    container.setAttribute("id","container");
    title.appendChild(text);
    var Div =  document.createElement("div");
    Div.setAttribute("class","grid");
    Div.setAttribute("id","grid");
    Div.style.gridTemplateColumns = "repeat(" + number +", auto)";
    Div.style.gridTemplateRows = " auto";
    for(var i=0;i<number * number;i++){
       Div.appendChild(squareDiv());
    }
container.appendChild(Div);
return container;
}
var title = document.createElement("h4");
var text = document.createTextNode('The ultimate grid');
document.body.appendChild(title);
document.body.appendChild(sizeButton());
Grid = createGrid(16);
document.body.appendChild(Grid);

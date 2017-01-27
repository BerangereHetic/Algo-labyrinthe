var grille = document.querySelector('.grille');

var x = parseInt(prompt("Entrez un nombre entre 2 et 10 ?"));
var posX = 0;
var posY = 0;

function init(){
    
}

function labyrinthe(){
    do{
        var posX = randomPos();
        var posY = randomPos();
    }while(!((posX==1 || posX==x) || (posY==1 || posY==x)));
    
    posX--;
    posY--;
    
    for (var i=0; i<x; i++){
        grille.innerHTML += '<div class="square square-'+i+'"></div>';
        
        var square = grille.querySelectorAll('.square');
        for (var j=0; j<x; j++){
            if(i==posX && j==posY){
                square[i].innerHTML += '<div class="square-column square-column-'+j+' yellow"></div>';
            }else square[i].innerHTML += '<div class="square-column square-column-'+j+'"></div>';
            
        }
    }
    
}

function randomPos(){
    return Math.floor((Math.random()*x)+1);
}

init(x);
labyrinthe(x, posX, posY);
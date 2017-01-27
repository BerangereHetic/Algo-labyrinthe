var grille = document.querySelector('.grille');

var x = parseInt(prompt("Entrez un nombre entre 2 et 10 ?"));
/*var posX = 0;
var posY = 0;*/

function labyrinthe(){
    for (var i=0; i<x; i++){
        grille.innerHTML += '<div class="square"></div>';
    }
    
    var square = grille.querySelectorAll('.square');
    
    for (var i=0; i<x; i++){
        for (var j=0; j<x; j++){
            square[i].innerHTML += '<div class="squareColumn"></div>';
        }
    }
    
}

function randomPos(){
    return Math.floor(Math.random()*x ) + 1;
}

function init(){
    for(var i=0; i<20; i++){
        do{
            var posX = randomPos();
            var posY = randomPos();
        }while(!((posX==0 && posX==(x-1)) && (posY==0 && posY==(x-1))));
        console.log('x' + posX);
        console.log('y' + posY);
    }
    
    
}

labyrinthe(x);
init();

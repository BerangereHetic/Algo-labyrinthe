var grille = document.querySelector('.grille');

var x = parseInt(prompt("Entrez un nombre entre 2 et 10 ?"));
var posX = 0;
var posY = 0;
var way = 0;

do{
    var posX = randomPos();
    var posY = randomPos();
}while(!((posX==0 || posX==(x-1)) || (posY==0 || posY==(x-1))));

function labyrinthe(){
    
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
    return Math.floor((Math.random()*x));
}

function randomWay(){    
    return Math.floor((Math.random()*4)+1);    
}

function waySelected(){
    do{
        var way = randomWay();
        console.log('hey');
    }
    while(
        (posX==0 && way==1) || 
        (posX==(x-1) && way==3) || 
        (posY==0 && way==2) || 
        (posY==(x-1) && way==4) ||
        ((way==1 || way==2) && (posX==0 && posY==0)) ||
        ((way==1 || way==4) && (posX==0 && posY==(x-1))) ||
        ((way==2 || way==3) && (posX==(x-1) && posY==0)) ||
        ((way==3 || way==4) && (posX==(x-1) && posY==(x-1)))
    );
    console.log(way);
    console.log(posX, posY);
    
}

waySelected();
labyrinthe();
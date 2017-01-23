var grid = [];
var container = document.querySelector('.container');

function laby()
{
    var x =  prompt("Combien de case voulez-vous ?");
    for (var i=0; i<x; i++)
    {
          container.innerHTML += '<div class="square"><div class="square"></div></div>';
    }
}

laby();
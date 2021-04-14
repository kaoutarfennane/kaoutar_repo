function style() {
    this.couleur=couleur;
}
this.couleur=document.getElementById("style").nodeValue;

function ajoute(){
var texte=document.getElementById("zone");
texte.setAttribute("style","color:"+this.couleur);
}

function supprime(){
    var texte = document.getElementById("zone");
    texte.setAttribute("style","color:red");

    //les couleurs ne s'affichent pas 
}
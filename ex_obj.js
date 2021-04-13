
function Document(NumEng, Titre)
{
    this.NumEng=NumEng;
    this.Titre=Titre;
}

function livre(NumEng,Titre,Auteur,NbrPage)
{
    Document.call(this,NumEng,Titre)
    this.Auteur=Auteur;
    this.NbrPage=NbrPage;

   this.PagesLivre = function PagesLivre ()
{
    switch(true){
        case( this.NbrPage<100) :
        display('le nombre de pages est inférieur à 100');
        break;
        case (this.NbrPage<200) :
            display('le nombre de pages est inférieur à 200 ');
            break;
        default :
        display('le nombre de pagess est supérieur à 300');
    }       
}
}
function Revue(NumEng,Titre,mois,Annee)
{
    Document.call(this,NumEng,Titre)
    this.mois=mois;
    this.Annee=Annee;
}
function Dictionnaire(NumEng,Titre,Langue)
{
    Document.call(this,NumEng,Titre)
    this.Langue=Langue;

}
livre.prototype=object.create(Document.prototype);
Revue.prototype=object.create(Document.prototype);
Dictionnaire.prototype=object.create(Document.prototype);

let AtomicHabits = new livre(25,"Atomic Habits","james Clear",255);
AtomicHabits.PagesLivre();

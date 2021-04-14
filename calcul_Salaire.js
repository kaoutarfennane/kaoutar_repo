function Person(name,gender,salaire,chargesPers,allocation)
{
    this.name=name;
    this.gender=gender;
    this.salaire=salaire;
    this.chargesPers=chargesPers;
    this.allocation=allocation;

    this.assurance = function()
    {
        return this.salaire*(7/100)
        //console.log('fct assurance'+this.salaire);
    }
    this.pension = function()
    {
        return this.salaire*(5/100)
        //console.log('fct pension'+this.salaire);
    }
    this.Isallocation = function()
    {
        if(this.allocation===true)
        {
            (this.salaire+=150) || (this.salaire+=100)
        }
        return this.salaire
        ////console.log('fct isallocation'+this.salaire);
    }

  

    this.impots = function() {
        var val=18;
        if(this.gender==='woman')
        {
            val-=2;
        }
        switch(chargesPers){
            case 3 :
                val-=1;
                break;
                case 4:
                    val-=2;
        }

       
        return this.salaire*(val/100)
        //console.log('fct impots'+this.salaire);
    }
    
    this.salaireNet = function ()
    {
        //console.log('fct salaire net'+this.salaire+" pension "+this.pension()+"assurance"+this.assurance());
        return this.salaire -this.assurance() -this.pension()
       
    }
}

let Per1 = new Person('Wendy','woman',3000,3,true);
let Per2 = new Person('Peter','man',4000,1,false);
let Per3 = new Person('Luc','man',1000,0,true);
let Per4 = new Person('tania','woman',1500,2,false);

   
Per1.salaireNet(); 
console.log(Per2.salaireNet());
console.log(Per3.salaireNet());
console.log(Per4.salaireNet());

// Erreur !! 





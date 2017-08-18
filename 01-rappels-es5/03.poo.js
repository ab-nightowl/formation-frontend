function personne(nom, prenom, pseudo) {
	this.nom = nom;
	this.prenom = prenom;
	this.pseudo = pseudo;
	this.getNomComplet = function() {
		return this.nom + " " + this.prenom + " " + this.pseudo;
	}
}

var jules = new personne('LEMAIRE', 'Jules', 'jules77');
var paul = new personne('LEMAIRE', 'Paul', 'paul44');

var afficherPersonne = function(personne){
    console.log("Nom :", personne.nom, "| Prénom :", personne.prenom, "| Pseudo :", personne.pseudo, "| Nom complet :", personne.getNomComplet());
};

afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = 'jules44';
console.log(jules.getNomComplet());

console.log(jules.age);
personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);
jules.age = 30;
console.log(jules.age);

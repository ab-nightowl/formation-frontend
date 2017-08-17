var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function(ville) {
	console.log(ville);
});

var lettreADansToutesLesVilles = function(ville) {
	return ville.includes('a');
}
console.log('lettreADansToutesLesVilles == ' + villes.every(lettreADansToutesLesVilles));

var auMoinsUneVilleAvecUnTiret = function(ville) {
	return ville.includes('-');
}
console.log('auMoinsUneVilleAvecUnTiret == ' + villes.some(auMoinsUneVilleAvecUnTiret));

var villesSansTiretSansEspace = function(ville) {
	return !ville.includes('-', ' ');
}
console.log(villes.filter(villesSansTiretSansEspace));

var villesMajusculeSeTerminantParS = villes.filter(function(ville) {
	return ville.indexOf('s') == ville.length-1;
}).map(function(ville) {
	return ville.toUpperCase();
});
console.log(villesMajusculeSeTerminantParS);

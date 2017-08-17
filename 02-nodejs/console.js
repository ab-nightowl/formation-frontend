var moduleService = require('./service.js');

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function afficherMenu() {
	console.log('*** Application Conférence ***');
	console.log('1. Liste de tous les présentateurs');
	console.log('2. Top présentateurs');
	console.log('3. Liste des sessions');
	console.log("4. Détail d'une session");
	console.log("5. Sortir");
}

afficherMenu();

function gererChoixUtilisateur() {
	rl.question('Quel est votre choix ? ', (answer) => {
		switch(`${answer}`) {
		  	case '1' :
		  		console.log('*** Tous les présentateurs ***');
		  		console.log('PRENOM - NOM :');
		  		moduleService.listerPresentateurs().forEach(function(p) {
		  			console.log('- ' + p.firstname + ' ' + p.lastname);
		  		});
		  		break;
		  	
		  	case '2' :
		  		console.log('*** Top présentateurs ***');
		  		console.log('PRENOM - NOM :');
		  		moduleService.listerTopPresentateurs().forEach(function(p) {
		  			console.log('- ' + p.firstname + ' ' + p.lastname);
		  		});
		  		break;
		  	
		  	case '3' :
		  		console.log('*** Toutes les sessions ***');
		  		console.log('TITRE :');
		  		moduleService.listerToutesLesSessions().forEach(function(s) {
		  			console.log('- ' + s.id + ' :	' + s.title);
		  		});
		  		break;
			
			case '4' :
		  		rl.question("Entrez un id de session svp : ", (idSession) => {
		  			var session = moduleService.trouverSession(`${idSession}`);
		  			console.log('Description : ', session.desc, '\nPrésentateur : ', session.speakers);
		  			
		  			rl.close();
			  		afficherMenu();
					gererChoixUtilisateur();
		  		});
		  		break;

		  	case '5' :
		  		rl.close();
		  		break;
		}

		if (`${answer}` != ('4' || '5')) {
			console.log('Veuillez choisir un numéro présent dans le menu ci-dessous svp.')
			afficherMenu();
			gererChoixUtilisateur();
		};

	});

}

gererChoixUtilisateur();



var moduleDevFest2015 = require('./data/devfest-2015.js');

function listerTousLesPresentateurs() { 
	return moduleDevFest2015.speakers;
}
exports.listerPresentateurs = listerTousLesPresentateurs;


function listerToutesLesSessions() {
	return moduleDevFest2015.sessions;
}
exports.listerToutesLesSessions = listerToutesLesSessions;


function trouverSession(idSession) {
	return moduleDevFest2015.sessions.find(function(session) {
        return session.id == idSession;
    });
}
exports.trouverSession = trouverSession;


exports.listerTopPresentateurs = function() {
	return moduleDevFest2015.speakers.filter(function(speaker) {return speaker.topspeaker == true});
}

/* 

Autre méthode : 

exports = {
	"trouverSession" : trouverSession,
	listerTopPresentateurs : function() {
		return moduleDevFest2015.speakers.filter(function(speaker) {return speaker.topspeaker == true});
	}
}

*/


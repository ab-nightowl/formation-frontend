export default class RaceService {
	
	constructor() {
		// la valeur de shirt est inspirée de la codification Bootstrap pour un choix aisé des couleurs
		this.walkers = [
			{ name: 'Paul', progress:0, shirt:'info' },
			{ name: 'Jean', progress:0 , shirt:'success'},
			{ name: 'Julie', progress:0 ,shirt: 'danger'}
		]
	}
	
	update(name, progress) {
		let walker = this.walkers.find(walker => walker.name == name)
		walker.progress += progress
	}
	
	list() {
		return this.walkers
	}
}

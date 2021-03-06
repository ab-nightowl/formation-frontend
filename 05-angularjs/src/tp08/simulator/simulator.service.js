export default class SimulatorService {

	constructor(RaceService, $interval) {
		this.RaceService = RaceService
		this.$interval = $interval
		this.walkers = this.RaceService.list()
	}

	start() {
		// TODO modifier de manière aléatoire la position des compétiteurs toutes les secondes
		// Utiliser le service RaceService
		let stopTime = this.$interval(() => {
		    let min = 10;
		    let max = 30;

		    this.walkers.forEach(w => {
		    	let rand = Math.floor(Math.random() * (max-min)/2) + min
		      	this.RaceService.update(w.name, rand);
		    })

		    if(this.walkers.find(w => w.progress >= 100)) {
		      	this.$interval.cancel(stopTime);
		    }

		}, 1000);

	}
}

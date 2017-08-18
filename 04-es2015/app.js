let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId);

/*
Affectation nouvelle valeur à const impossible :

citiesId = []
console.log(citiesId);
*/

citiesId.push("tokyo");
console.log(citiesId);

function getWeather(cityId) {
	let city = cityId.toUpperCase();
	let temperature = 20;
	return { city, temperature }
}

const weather = getWeather(favoriteCityId);
console.log(weather);

const { city, temperature } = weather;
console.log(city, '\n', temperature);

const [ parisId, nycId, ...otherCitiesId ] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(otherCitiesId);


class Trip {
	constructor(id, name, imageUrl) {
		this.id = id;
		this.name = name;
		this.imageUrl = imageUrl;
	}

	get price() {
		return this._price;
	}

	set price(newPrice) {
		this._price = newPrice;
	}

	toString() {
		return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`;
	}

	static getDefaultTrip() {
		return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
	}
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip);
console.log( parisTrip.name);

parisTrip.price = 100;

console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());



class FreeTrip extends Trip {
	constructor(id, name, imageUrl, price = 0) {
		super(id, name, imageUrl);
		this.price = price;
	}

	toString() {
		return 'Free' + super.toString();
	}

}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nanges.jpg');
console.log(freeTrip.toString());



class TripService {
	constructor() {
		this.tripsSet = new Set(
			[
				new Trip('paris', 'Paris', 'img/paris.jpg'),
				new Trip('nantes', 'Nantes', 'img/nanges.jpg'),
				new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
			]);

	}
	
	findByName(tripName) {
	// TODO return promise
		return new Promise( (resolve, reject) => {
			setTimeout( () => {

				this.tripsSet.forEach( (trip) => {
					if (trip.name === tripName) {
						resolve(trip);
					}
				});
				reject(`No trip with name ${tripName}`);
			}
			, 2000);
		});
	}

}


class PriceService {
	constructor() {
	// TODO Map of 2 trips
		this.pricesMap = new Map(
			[
				['paris', 100],
				['rio-de-janeiro', 800]
			]);
	}
	
	findPriceByTripId(tripId) {
	// TODO return promise
		return new Promise( (resolve, reject) => {
			setTimeout( () => {

				if (this.pricesMap.has(tripId)) {
					let price = this.pricesMap.get(tripId);
					resolve(price);
				} else {
					reject(`No price found for id ${tripId}`);
				}
				
			}
			, 2000);
		});
	}
}


console.log("\n****** Promesses ******\n");

const tripService = new TripService();
const priceService = new PriceService();

const prom1 = tripService.findByName('Paris');
const prom2 = tripService.findByName('Toulouse');

prom1.then( trip => {
	console.log(`Trip found: Trip ${trip}`);
	}, error => {
		console.log(error);
	}
);
prom2.then( trip => {
	console.log(`Trip found: Trip ${trip}`);
	}, error => {
		console.log(error);
	}
);

const prom3 = priceService.findPriceByTripId('rio-de-janeiro');
const prom4 = priceService.findPriceByTripId('nantes');

prom3.then( price => {
	console.log(`Price found : ${price}`);
	}, error => {
		console.log(error);
	}
);
prom4.then( price => {
	console.log(`Price found : ${price}`);
	}, error => {
		console.log(error);
	}
);


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


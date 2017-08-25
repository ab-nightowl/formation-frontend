export default class TripsService {
	constructor(apiUrls, $resource) {
		this.$resource = $resource
		this.apiUrls = apiUrls
	}

	findAll() {
		let tripResource = this.$resource(this.apiUrls.light, {}, {})
		return tripResource.query()
	}
	
}

TripsService.$inject = ['apiUrls', '$resource']

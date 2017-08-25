export default class StepsService {
	constructor(apiUrls, $resource) {
		this.$resource = $resource
		this.apiUrls = apiUrls
	}

	findStepsByTripId(tripId) {
		
		let tripResource = this.$resource(this.apiUrls.full+'/:tripId', {tripId:"@id"}, {
			'update': { method: 'PUT'}
		})

		let tripResourceTrouve = tripResource.get({tripId: tripId})

		return tripResourceTrouve.$promise.then(r => {
			return r.steps
		})
	}
}

StepsService.$inject = ['apiUrls', '$resource']

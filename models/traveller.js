const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(function(journey) {
     return journey.startLocation} )
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(function(journey) {
     return journey.endLocation} )
};

Traveller.prototype.getJourneysByTransport = function (transport) {
 return this.journeys.filter((journey) => {
    return journey.transport === transport}
 )
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(function(journey) {
    return journey.distance > minDistance
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce(function(tot, journey) {
    return tot += journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let allTransport = this.journeys.map(function(journey)  {return journey.transport})
  const unique = allTransport.filter((transport, item) =>
  allTransport.indexOf(transport) === item)
  return unique
}

// use the filter method to only check if the index of the current item is
// equal to the first index of the item in the array and only add the item if it does.
module.exports = Traveller;

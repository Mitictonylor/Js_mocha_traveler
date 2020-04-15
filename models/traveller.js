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

};


module.exports = Traveller;

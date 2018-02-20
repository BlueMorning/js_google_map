const Capital = function(name, country, stats, coordinates){
  this.country      = country;
  this.name         = name;
  this.stats        = stats;
  this.coordinates  = coordinates;
}

Capital.prototype.getCoordinatesForGoogleMap = function(){
  return {lat: this.coordinates.latitude, lng: this.coordinates.longitude};
}

Capital.prototype.getContentStringForGoogleMap = function(){
  return `<div style="width: 200px"><p><h1>${this.name}</h1> is the capital of <h2>${this.country}</h2></p>`+
         `<section>
          <p> Total population: ${this.stats.population}<br/>
              Density: ${this.stats.populationDensity}<br/>
              Total area: ${this.stats.totalArea}</p>
         </section></div>`;
}

const MapWrapper = function(container, coordinates, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coordinates,
    zoom: zoom
    });    
};

MapWrapper.prototype.addMarker = function(coords){
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    title: 'Here we go !'
  });
};

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    this.addMarker({lat: event.latLng.lat(), lng: event.latLng.lng()});
  }.bind(this));
};

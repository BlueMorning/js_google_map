const MapWrapper = function(container, coordinates, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coordinates,
    zoom: zoom
    });
};

MapWrapper.prototype.addMarker = function(capital){
  const marker = new google.maps.Marker({
    position: capital.getCoordinatesForGoogleMap(),
    map: this.googleMap,
    title: `${capital.name} (${capital.country})`
  });

  marker.addListener('click', function() {
            new google.maps.InfoWindow({content: capital.getContentStringForGoogleMap()}).open(this.googleMap, marker);
  }.bind(this));

};

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    this.addMarker({lat: event.latLng.lat(), lng: event.latLng.lng()});
  }.bind(this));
};


MapWrapper.prototype.addLocalMarker = function(position){
  const marker = new google.maps.Marker({
    position: position,
    map: this.googleMap,
    title: "Your are here !"
  });
}

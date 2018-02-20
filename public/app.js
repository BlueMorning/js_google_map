const initialize = function(){

  let coordinates = {lat: 40.712784, lng: -74.005941};
  let zoom        = 20;
  displayMap(coordinates, zoom);
  setNewMapCoordinates();
}

function displayMap(coordinates, zoom){
  let container   = document.getElementById('main-map');
  const mainMap   = new MapWrapper(container, coordinates, zoom);
  mainMap.addMarker(coordinates);
  mainMap.addClickEvent();
}

function setNewMapCoordinates(){
  let center = {lat: Math.floor(Math.random() * 70), lng: Math.floor(Math.random() * 70)};
  displayMap(center, Math.floor(Math.random() * 10));
  setTimeout(setNewMapCoordinates, 5000);
}



document.addEventListener("DOMContentLoaded", initialize);

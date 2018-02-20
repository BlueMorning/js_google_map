// const initialize = function(){
//
//   let coordinates = {lat: 40.712784, lng: -74.005941};
//   let zoom        = 20;
//   displayMap(coordinates, zoom);
//   setNewMapCoordinates();
// }
//
// function displayMap(coordinates, zoom){
//   let container   = document.getElementById('main-map');
//   const mainMap   = new MapWrapper(container, coordinates, zoom);
//   mainMap.addMarker(coordinates);
//   mainMap.addClickEvent();
// }
//
// function setNewMapCoordinates(){
//   let center = {lat: Math.floor(Math.random() * 70), lng: Math.floor(Math.random() * 70)};
//   displayMap(center, Math.floor(Math.random() * 10));
//   setTimeout(setNewMapCoordinates, 5000);
// }

let capitalsList=[];

const intializePage = function(){

  initializeCapitalsList();
  addCapitalsToSelectList();
  addEventListenerCapitalSelected();


}


const initializeCapitalsList = function(){

  let paris = new Capital("Paris", "France", new CapitalStats(2206488, 21000, 105.4), new CapitalCoordinates(48.8567, 2.3508));
  capitalsList.push(paris);

  let berlin = new Capital("Berlin", "Germany", new CapitalStats(3671000, 4100, 891), new CapitalCoordinates(52.516667, 13.388889));
  capitalsList.push(berlin);

  let nassau = new Capital("Nassau", "Bahamas", new CapitalStats(274400, 1300, 207), new CapitalCoordinates(25.066667, -77.333333));
  capitalsList.push(nassau);



  capitalsList.sort(function(capitalA, capitalB){
    if(capitalA.name < capitalB.name){
      return -1;
    }
    else if(capitalA.name > capitalB.name){
      return 1;
    }
    else{
      return 0;
    }
  })
}

const addCapitalsToSelectList = function(){

  const select = document.getElementById('select-capital-list');

  let optionBydefault = document.createElement("option");
  optionBydefault.innerText = "Select a capital";
  optionBydefault.value     = "";
  select.appendChild(optionBydefault);

  capitalsList.forEach(function(capital){
    let option       = document.createElement("option");
    option.innerText = capital.name;
    option.value     = capital.name;
    select.appendChild(option);
  })
}

const addEventListenerCapitalSelected = function(){
  document.getElementById('select-capital-list').addEventListener("change", findCapitalOnGoogleMap);
}

const findCapitalOnGoogleMap = function(event){

  let capitalSelected = findCapitalByName(this.value);

  if(capitalSelected != null)
  {
    let coordinates     = {lat: capitalSelected.coordinates.latitude, lng: capitalSelected.coordinates.longitude};
    let container       = document.getElementById('main-map');
    const mainMap       = new MapWrapper(container, coordinates, 10);
    mainMap.addMarker(coordinates);
  }
}

const findCapitalByName = function(name){
  return capitalsList.filter(function(capital){
    return capital.name == name
  })[0] || null;
}

document.addEventListener("DOMContentLoaded", intializePage);

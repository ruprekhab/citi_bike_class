// let newYorkCoords = [40.73, -74.0059];
// let mapZoomLevel = 12;
// URL
url = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json"

d3.json(url).then(createMarkerLayer)

function createMarkerLayer(response){
  console.log(response);
  console.log('lat',response.data.stations[0].lat)


  // Create a baseMaps object to hold the lightmap layer.

  // Create an overlayMaps object to hold the bikeStations layer.
  let bikeStations = [];

  for (let i=0; i< response.data.stations.length; i++) {

      
      let lat = response.data.stations[i].lat;
      let lng = response.data.stations[i].lon;
      bikeStations.push(L.marker([lat, lng]));
    }
    
      //let makerLayer = L.layerGroup(bikeStations);

      createMap(L.layerGroup(bikeStations));
    }

 


// Create the createMap function.
function createMap(makerLayer){




  // Create the tile layer that will be the background of our map.
 let baseLayer= L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
//.addTo(myMap);

let baseMaps = {
  "Station" : baseLayer
}

let overlayer = {
  "bike Station" : makerLayer
}

let myMap = L.map("map-id", {
  center: [40.73, -74.0059],
  zoom: 12,
  layers:[baseLayer,makerLayer]
});

L.control.layers(baseMaps,overlayer, {collapsed: false}).addTo(myMap);




}
 



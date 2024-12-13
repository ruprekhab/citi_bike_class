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
 



  // bikeMarkers.push(
  //   L.marker([40.73, -74.0059]).bindPopup("<h3>Station 1</h3><p>Capacity: 25</p>"),
  //   L.marker([40.75, -74.002]).bindPopup("<h3>Station 2</h3><p>Capacity: 30</p>")
  //  );


   // Create a layer group using the bike markers




  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.

// Create the createMarkers function.

  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.


    // for (let i=0; i< response.data.stations.length; i++) {
    //   let lat = response.data.stations[i].lat;
    //   console.log('lat',lat);
    //   let lng = response.data.stations[i].lon;
    //   console.log('lon', lng);
    //   L.marker([lat, lng])
      // .addTo(myMap);
    
  
  // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.



// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.

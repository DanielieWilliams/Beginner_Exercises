mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
    zoom: 4,
    center: [-122.4350112,38.404419]
});


var markerOptions = {
    color: "black",
    draggable: true
};

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-122.4350112,38.404419])
    .addTo(map);



var popup = new mapboxgl.Popup()
    .setLngLat([-122.4350112,38.404419])
    .setHTML("<p>The French Laundry</p>")
    .addTo(map);

marker.setPopup(popup).togglePopup();


//try this also use for each loop and create array//
// var marker = new mapboxgl.Marker()
//     .setLngLat(coordinates)
//     .addTo(map)
//     .setPopup(popup);
// popup.addTo(map);


geocode("6640 Washington Street\n" +
    "Yountville, California, 94599", mapboxToken).then(function(result){
    console.log(result);
    map.setCenter(result);
    map.setZoom(2);


});

reverseGeocode({lng: -122.4350112, lat: 38.4044195}, mapboxToken).then(function(result){
    console.log(result);
});


////////////////////////////HARD CODE RESTAURANT 1///

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-97.7470346, 30.2639621])
    .addTo(map);



var popup = new mapboxgl.Popup()
    .setLngLat([-97.7285351, 30.2628459])
    .setHTML("<p>iL Brutto</p>")
    .addTo(map);

marker.setPopup(popup).togglePopup();


geocode("1601 E 6th St, Austin, TX 78702", mapboxToken).then(function(result){
    console.log(result);
    map.setCenter(result);
    map.setZoom(10);


});

reverseGeocode({lng: 30.2628459, lat: -97.7285351}, mapboxToken).then(function(result){
    console.log(result);
});
//
// ///////////////HARDCODE RESTAURANT 2/////
//
var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-97.7470346, 30.2639621])
    .addTo(map);



var popup = new mapboxgl.Popup()
    .setLngLat([-97.7470346, 30.2639621])
    .setHTML("<p>Emmer & Rye</p>")
    .addTo(map);

marker.setPopup(popup).togglePopup();


geocode("SkyHouse, 51 Rainey St #110, Austin, TX 78701", mapboxToken).then(function(result){
    console.log(result);
    map.setCenter(result);
    map.setZoom(10);


});

reverseGeocode({lng: 30.2639621, lat: -97.7470346}, mapboxToken).then(function(result){
    console.log(result);
});



///Load Data/////
var restaurants = {
    type: "Restaurant List",
    features: [
        {
            name: "Emmer & Rye",
            geometry: {
                type: "Point",
                coordinates: [
                    -97.7470346, 30.2639621
                ]
            },
            properties: {
                phoneFormatted: "(512) 366-5530",
                phone: "5123665530",
                address: "51 Rainey",
                city: "Austin",
                country: "United States",

                postalCode: "78701",
                state: "TX"
            }
        },
        {
            name: "iL Brutto",
            geometry: {
                type: "Point",
                coordinates: [
                    -97.7285351, 30.2628459
                ]
            },
            properties: {
                phoneFormatted: "(512) 580-8779",
                phone: "5125808779",
                address: "1601 E 6th St",
                city: "Austin",
                country: "United States",

                postalCode: "78702",
                state: "TX"
            }
        },


                ]


        };

    ///FOR EACH!!///

restaurants.features.forEach(function(store, i) {
    restaurants.properties.id = [i]
        .setLngLat(-97.7470346, 30.2639621)
        .addTo(map)
        .setPopup(popup);
    map.setZoom(2);
    popup.addTo(map);

},

    restaurants.properties.id = [i]
        .setLngLat(-97.7285351, 30.2628459)
        .addTo(map)
        .setPopup(popup);
    map.setZoom(2);
    popup.addTo(map);







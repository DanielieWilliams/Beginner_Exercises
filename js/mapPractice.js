mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
    zoom: 8,
    center: [-122.4350112, 38.404419]
});

var markerOptions = {
    color: "black",
    draggable: true
};

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-122.4350112, 38.404419])
    .addTo(map);



var popup = new mapboxgl.Popup()
    .setLngLat([-122.4350112,38.404419])
    .setHTML("<p>The French Laundry</p>")
    .addTo(map);

marker.setPopup(popup).togglePopup();

geocode("1601 E 6th St, Austin, TX 78702", mapboxToken).then(function(result){
    console.log(result);
    map.setCenter(result);
    map.setZoom(8);

    ////// .map
    // .markerOptions
    // .marker
    // .popup

});

reverseGeocode({lng: 30.2628459, lat: -97.7285351}, mapboxToken).then(function(result){
    console.log(result);
});


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
restaurants.features.forEach(function(store, i){
    restaurants.properties.id = i;
});

map.on('load', function (e) {
    /* Add the data to your map as a layer */
    map.addLayer({
        "id": "locations",
        "type": "symbol",
        /* Add a GeoJSON source containing place coordinates and information. */
        "source": {
            "type": "geojson",
            "data": stores
        },
        "layout": {
            "icon-image": "restaurant-15",
            "icon-allow-overlap": true,
        }
    });
});

function buildLocationList(data) {
    data.features.forEach(function(store, i){
        /**
         * Create a shortcut for `store.properties`,
         * which will be used several times below.
         **/
        var prop = store.properties;

        /* Add a new listing section to the sidebar. */
        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        /* Assign a unique `id` to the listing. */
        listing.id = "listing-" + prop.id;
        /* Assign the `item` class to each listing for styling. */
        listing.className = 'item';

        /* Add the link to the individual listing created above. */
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = "link-" + prop.id;
        link.innerHTML = prop.address;

        /* Add details to the individual listing. */
        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.city;
        if (prop.phone) {
            details.innerHTML += ' · ' + prop.phoneFormatted;
        }
    });
}

function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
    });
}

function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>Sweetgreen</h3>' +
            '<h4>' + currentFeature.properties.address + '</h4>')
        .addTo(map);
}

link.addEventListener('click', function(e){
    var clickedListing = data.features[this.dataPosition];
    flyToStore(clickedListing);
    createPopUp(clickedListing);

    var activeItem = document.getElementsByClassName('active');
    if (activeItem[0]) {
        activeItem[0].classList.remove('active');
    }
    this.parentNode.classList.add('active');
});
map.on('click', function(e) {
    /* Determine if a feature in the "locations" layer exists at that point. */
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['locations']
    });

    /* If yes, then: */
    if (features.length) {
        var clickedPoint = features[0];

        /* Fly to the point */
        flyToStore(clickedPoint);

        /* Close all other popups and display popup for clicked store */
        createPopUp(clickedPoint);

        /* Highlight listing in sidebar (and remove highlight for all other listings) */
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        var listing = document.getElementById('listing-' + clickedPoint.properties.id);
        listing.classList.add('active');
    }
});

function addMarkers() {
    /* For each feature in the GeoJSON object above: */
    stores.features.forEach(function(marker) {
        /* Create a div element for the marker. */
        var el = document.createElement('div');
        /* Assign a unique `id` to the marker. */
        el.id = "marker-" + marker.properties.id;
        /* Assign the `marker` class to each marker for styling. */
        el.className = 'marker';

        /**
         * Create a marker using the div element
         * defined above and add it to the map.
         **/
        new mapboxgl.Marker(el, { offset: [0, -23] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });
}
el.addEventListener('click', function(e){
    /* Fly to the point */
    flyToStore(marker);
    /* Close all other popups and display popup for clicked store */
    createPopUp(marker);
    /* Highlight listing in sidebar */
    var activeItem = document.getElementsByClassName('active');
    e.stopPropagation();
    if (activeItem[0]) {
        activeItem[0].classList.remove('active');
    }
    var listing = document.getElementById('listing-' + marker.properties.id);
    listing.classList.add('active');
});
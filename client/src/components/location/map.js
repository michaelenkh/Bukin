var map;
var infowindow;
var pyrmont;

function initMap(loc) {
    console.log(loc)
    loc = { lat: 41.891583, lng: -87.632472 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 16
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: loc,
        radius: 500,
        type: ['beauty_salon']
    }, callback);
}

function initMap1(loc) {
    console.log(loc)

    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 16
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: loc,
        radius: 1000,
        type: ['beauty_salon']
    }, callback);
}


function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

var x = document.getElementById("bookNow");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);


    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {

    pyrmont = { lat: position.coords.latitude, lng: position.coords.longitude };

    initMap1(pyrmont);
}



function createMarker(place) {
    console.log(place);
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location

    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + 'Rating: ' + place.rating + '<br><a>Address: ' + place.vicinity + '</a');
        infowindow.open(map, this);
    });
}
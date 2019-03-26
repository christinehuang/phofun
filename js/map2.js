// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {

    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(25.042563, 121.543560),
        disableDefaultUI: true,
        styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffbb00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ffbb00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#ffbb00"
            }
        ]
    }
   ]
    };



    var mapElement = document.getElementById('map2');
    var image = {
     url: 'http://pgnini.org/phofun/images/map-icon.svg',
    scaledSize: new google.maps.Size(40, 60),
     }
    var map2 = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(25.042563, 121.543560),
        map: map2,
        optimized: false,
        icon: image
    });
}

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {

    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(22.657937, 120.285922),
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
    url: 'http://pgnini.org/kindness-test/images/map-icon-60.svg',
    scaledSize: new google.maps.Size(140, 200),
     }
    var map2 = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(22.657937, 120.285922),
        map: map2,
        optimized: false,
        icon: image
    });
}
function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -16.4897, lng: -68.1193};

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 12,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}
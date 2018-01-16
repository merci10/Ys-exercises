var resetBtn = document.getElementById('reset');
var mapZone = document.getElementById('map');

function initMap() {
  var map = new google.maps.Map(mapZone, {
    zoom: 15,
    center: {lat: 35.685176, lng: 139.710052}
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
      resetBtn.addEventListener('click', function(){
        initMap(results[0].geometry.location);
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

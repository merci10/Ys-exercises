'use strict';
var map;
var marker;
var infowindow;

function initMap() {
  var firstLocation = {lat: 35.685176, lng: 139.710052};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: firstLocation
  });
  var geocoder = new google.maps.Geocoder();


  map.addListener('click', function(e){
    // クリックした箇所の緯度経度を取得
    var location = e.latLng;
    // マーカーが存在していれば消す
    if (marker) clearMarker();
    addMarker(location);
    // geocoderでクリックした箇所の詳しい住所情報を取得する
    geocoder.geocode({'location': location}, function(results, status) {
      if (status === 'OK') {
        openInfowindow(results[0]);
      }
    })
  })
}

function openInfowindow(results) {
  var address = results.formatted_address;
  var lat = results.geometry.location.lat();
  var lng = results.geometry.location.lng();
  var contentString = '<dl>' +
    '<dt>■住所</dt>' +
    '<dd>' + address + '</dd>' +
    '<dt>■緯度・経度</dt>' +
    '<dd>' + lat + ', ' + lng + '</dd>' +
    '</dl>';
  infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  infowindow.open(map, marker);
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

function addMarker(location) {
  marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

function clearMarker() {
  marker.setMap(null);
}

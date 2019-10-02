// Initialize and add the map
function initMap() {
  //Your location
  const loc = { lat: -34.428519, lng: 19.415843 };

  //Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });

  //The maker, position at location
  const maker = new google.maps.Marker({ positin: loc, map: map });
}

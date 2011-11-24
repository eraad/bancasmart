$(document).bind('mobileinit', function(){
  $.extend(  $.mobile , {
    defaultPageTransition: 'fade',
    loadingMessage: 'Cargando',
    pageLoadErrorMessage: 'Error cargando la p&aacute;gina...'
  });
});

$('#agencias').live('pageinit', function(){
  success({coords: {latitude: 1, longitude: -2}});
});

var puntos = [

]

function success(position) {
  var map;
  var latlng = new google.maps.LatLng('-0.066352', '-78.466136');
  var myOptions = {
    zoom: 10,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
  var h = $('body').height();
  $('#map_canvas').css('width', '100%');
  $('#map_canvas').css('height', h-70);
  var marker = new google.maps.Marker({
    position: latlng, 
    map: map, 
    title:"You are here!"
  });
}

function error(msg) {
  alert(msg);
}

function drawMap() {
  
}

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Marine Dataset Kit @ 2022'
}),
latlng = L.latLng(-0.0996802,-7.1036029);

var map = L.map('map', {center: latlng, zoom: 2, layers: [tiles]});

map.attributionControl.setPrefix(false)

var markers = L.markerClusterGroup();

for (var i = 0; i < addressPoints.length; i++) {
var a = addressPoints[i];
var title = a[2];
var captureDateTxt = a[3];
var numOfVideos = a[4];
var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
marker.bindPopup("<video width='100%' autoplay='true' ><source src='MarineData_files/videos/cut_3.webm' type='video/webm'> type='video/mp4'></video><p> <span>" +title+"</span><br> Capture On: " + captureDateTxt + "<br> Number of Videos: " + numOfVideos + "</p>",
{
    minWidth: 300,
    autoPan: true,
    autoPanPaddingTopLeft: L.point(30,40),
    keepInView: true,
});
markers.addLayer(marker);
}

map.addLayer(markers);
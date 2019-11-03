var mapboxTiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
        {attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,});
        var map = L.map('map')
        .addLayer(mapboxTiles)
        .setView([22.3193,114.1694], 13);


        var marker = L.marker([22.3193,114.1694], {draggable: true})
        .bindPopup( '<a href="https://en.wikipedia.org/wiki/North_Point" target="_blank">North Point</a>')
        .addTo(map);



var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/app240IewSUXfB0Q4/Map?api_key=keyqCeiJ2hCd2sEpn";

var data = [];
$.getJSON(airtable_read_endpoint, function(result) {
    $.each(result.records, function(key,value) {
        items = {};
        items["Name"] = value.fields.Name;
        items["Lat"] = value.fields.Lat;
        items["Lng"] = value.fields.Lng;
        items["img_url"] = value.fields.img_url;
        data.push(items);
            console.log(items);
        });
        
        for (var i in data) {
            var latlng = L.latlng({ lat: data[i].Lat, lng: data[i].Lng});
            L.marker( latlng )
            .bindPopup(data[i].Name + '<img src="' + data[i].img_url+'"width = "80px">')
            .addTo(map);}
        
        
        });

 L.geoJson(marker).addTo(map);

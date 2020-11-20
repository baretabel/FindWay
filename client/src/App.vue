<template>

    <div>
        <v-container class="fill-height">
            <SideBar />
        </v-container>
        <div id="mapid" ref="mapElement"></div>
    </div>

</template>

<script>
import L from 'leaflet';
import SideBar from './components/drawer/SideBar';

    export default {
      name: 'App',
        components: {
            SideBar
        },
        data() {
            return {
                drawer: false,
            }
        },
        mounted() {
            var mymap = L.map(this.$refs['mapElement']).setView([-20.880991, 55.449446], 13);
            
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieW91diIsImEiOiJja2hlaHp6YnkwOHRqMzFwNWlmdmhtN3h4In0.e3EQyB9RFf547diSz_Xt0Q', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery :copyright: <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom:18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'your.mapbox.access.token'
            }).addTo(mymap);

            // Options for the marker
            var markerOptions = {
                title: "MyLocation",
                clickable: true,
                draggable: true
            }
            var marker = L.marker([-20.880991, 55.449446], markerOptions).addTo(mymap);
            marker.draggable;
            marker.bindPopup("<b>Hello world!</b><br>I am a popup.");   
            // var addressSearchResults = new L.LayerGroup().addTo(mymap);

            // On click show popup
            // var popup = L.popup();
            function onMapClick(e) {
                marker = L.marker([e.latlng.lat, e.latlng.lng], markerOptions).addTo(mymap);
            }
            // marker.on('click', removeMarker);
            mymap.on('click', onMapClick);
        }
    }

</script>

<style>
#mapid { height: 96vh; }
#sideBar {
    z-index: 9999;
    background-color: none;
}
#btn-sideBar{
    position: fixed;
    z-index: 9998;
}

.sideBar-items {
    height: 100%;
}
</style>

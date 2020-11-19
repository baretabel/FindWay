<template>

    <div>
        <!-- <side-bar /> -->
        <div id="mapid" ref="mapElement"></div>
    </div>

</template>
<script>
import SideBar from '../components/drawer/SideBar';
import L from 'leaflet';

    export default {
        components: {
            SideBar,
        },
        mounted() {
            var mymap = L.map(this.$refs['mapElement']).setView([-21.253359, 55.431355], 13);
            
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieW91diIsImEiOiJja2hlaHp6YnkwOHRqMzFwNWlmdmhtN3h4In0.e3EQyB9RFf547diSz_Xt0Q', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery :copyright: <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom:18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'your.mapbox.access.token'
            }).addTo(mymap);

            var marker = L.marker([-21.253359, 55.431355]).addTo(mymap);
            marker.bindPopup("<b>Hello world!</b><br>I am a popup.");   
            var addressSearchResults = new L.LayerGroup().addTo(mymap);
        }
    }

</script>
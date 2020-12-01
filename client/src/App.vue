<template>

    <div>
        <v-container-fluid class="fill-height">
            <SideBar @setMarker="setMarker"/>
        </v-container-fluid>
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
                location: {
                  latitude: -20.880991,
                  longitude: 55.449446
                },
              marker: undefined,
              markerOptions: undefined,
              mymap : undefined
            }
        },
        mounted() {
          this.mymap = L.map(this.$refs['mapElement']).setView([-20.880991, 55.449446], 13)

          L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieW91diIsImEiOiJja2hlaHp6YnkwOHRqMzFwNWlmdmhtN3h4In0.e3EQyB9RFf547diSz_Xt0Q', {
              attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery :copyright: <a href="https://www.mapbox.com/">Mapbox</a>',
              maxZoom:18,
              id: 'mapbox/streets-v11',
              tileSize: 512,
              zoomOffset: -1,
              accessToken: 'your.mapbox.access.token'
          }).addTo(this.mymap);

          // Options for the marker
          this.markerOptions = {
              title: "MyLocation",
              clickable: true,
              draggable: true
          }
          this.marker = L.marker([this.location.latitude, this.location.longitude], this.markerOptions).addTo(this.mymap);
          // this.marker.draggable;
          // this.marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
          // var addressSearchResults = new L.LayerGroup().addTo(mymap);

          // On click show popup
          // var popup = L.popup();
          // function onMapClick(e) {
          //     this.marker = L.marker([e.latlng.lat, e.latlng.lng], this.markerOptions).addTo(this.mymap);
          // }
          // marker.on('click', removeMarker);
          // this.mymap.on('click', onMapClick);
        },
      methods : {
        setMarker(location) {
          let greenIcon = L.icon({
            iconUrl: 'map-marker.png',
              options: {
                iconColor: 'green',
              }
          });
          this.location = location

          this.marker.remove()

          this.marker = L.marker([this.location.latitude, this.location.longitude], {icon: greenIcon}).addTo(this.mymap);
        }
      }
    }

</script>

<style>
#mapid { height: 96vh; }

nav {
  width: 100%;
  display: flex;
  justify-content: end;
}
#btn-sideBar{
    position: fixed;
    z-index: 9998;
    margin: 5px;
}

.sideBar-items {
    height: 100%;
}
.container {
  padding: 0 !important;
}
</style>

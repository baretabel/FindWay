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
              mymap : undefined,
              drawMap : [
                [
                  [//All World
                    [90, -180],
                    [90, 180],
                    [-90, 180],
                    [-90, -180]
                  ],
                  [// Saint-Denis
                    [-20.896094202327, 55.375863528729],
                    [-20.882986388171, 55.394036917298],
                    [-20.874440484519, 55.421141873335],
                    [-20.871364130562608, 55.44965028762818],
                    [-20.882341920577, 55.502079518399],
                    [-20.911634326555, 55.507304218581],
                    [-20.922363956399, 55.513068631875],
                    [-20.936455014075, 55.501582350011],
                    [-20.970606365504, 55.490805191991],
                    [-20.988794971872, 55.491010134145],
                    [-20.993355884985, 55.480142895002],
                    [-21.002251689156, 55.477496906162],
                    [-21.009928584234, 55.468887949541],
                    [-21.015120564276, 55.461144439045],
                    [-21.001345667221, 55.451961587332],
                    [-20.992013858698, 55.43953411936],
                    [-20.983318185699, 55.419412781816],
                    [-20.98179857228, 55.403694622206],
                    [-20.956669460011, 55.40716560768],
                    [-20.935979058912, 55.391745643379],
                    [-20.925003636364, 55.388652586783],
                    [-20.90991541857, 55.379073619095],
                    [-20.896094202327, 55.375863528729]
                  ]
                ],
              ]

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

          let polygonSaintDenis = L.polygon(this.drawMap, {color: 'blue'}).addTo(this.mymap);

          this.mymap.fitBounds(polygonSaintDenis.getBounds());

          // Options for the marker
          this.markerOptions = {
              title: "MyLocation",
              clickable: true,
              draggable: true
          }
          this.marker = L.marker([this.location.latitude, this.location.longitude], this.markerOptions).addTo(this.mymap);
          this.marker.draggable;
          this.marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
          // var addressSearchResults = new L.LayerGroup().addTo(mymap);

          // On click show popup
          function onMapClick(e) {
            console.log(e)
          }
          // marker.on('click', removeMarker);
          this.mymap.on('click', onMapClick);
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

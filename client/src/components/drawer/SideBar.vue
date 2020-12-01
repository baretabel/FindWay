<template>
  <v-card id="sidebar-card">
    <v-btn v-if="!drawer" icon elevation="3" id="btn-sideBar" class="btn-transparent" @click="drawer = !drawer">
      <v-icon>mdi-loupe</v-icon>
    </v-btn>
    <v-navigation-drawer app v-model="drawer" absolute temporary right id="sidebar">

      <div id="sidebar-content" class="sideBar-items">
        <div id="sidebar-header">

          <div class="d-flex flex-row align-center justify-center">
            <v-btn-toggle class="btn-toggle" v-model="path">
              <v-btn icon id="walk-path" class="btn-transparent" rounded value="walk" @click="selectStylePath($event)">
                <v-icon>mdi-walk</v-icon>
              </v-btn>
              <v-btn icon id="bike-path" class="btn-transparent" rounded value="bike" @click="selectStylePath($event)">
                <v-icon>mdi-bike</v-icon>
              </v-btn>
              <v-btn icon id="car-path" class="btn-transparent" rounded value="car" @click="selectStylePath($event)">
                <v-icon>mdi-car</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>

          <div class="btn-close">
            <v-btn icon class="btn-transparent">
              <v-icon @click="drawer = !drawer">mdi-close</v-icon>
            </v-btn>
          </div>

        </div>

        <div v-if="errorStr">
          <p class="msg-error">{{ errorStr }}</p>
        </div>

        <div id="sidebar-body">
          <div class="row">
            <div class="input-gps">
              <v-btn class="btn no-btn" @click="getLocalisation">
                <v-icon>mdi-crosshairs-gps</v-icon>
                <p>Me localiser</p>
              </v-btn>
            </div>
            <div class="input-start">
              <v-autocomplete v-model="model" persistent-hint prepend-icon="mdi-city" placeholder="Mon point de depart">
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in"></v-slide-x-reverse-transition>
                </template>
              </v-autocomplete>
            </div>
            <div class="input-end">
              <v-autocomplete v-model="model" persistent-hint prepend-icon="mdi-city" placeholder="Ma destination">
                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition mode="out-in"></v-slide-x-reverse-transition>
                </template>
              </v-autocomplete>
            </div>
          </div>
        </div>

        <div id="sidebar-footer">
          <small class="sidebar-footer-small text-center">Vous pouvez cliquez sur la carte pour adapter votre parcour</small>
          <v-btn class="sidebar-footer-btn">Commencer ></v-btn>
        </div>

      </div>

    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        model: null,
        path: undefined,
        stylePath: '',
        location: {},
        gettingLocation: false,
        errorStr: null,
      }
    },
    methods: {
      selectStylePath(event) {
        this.stylePath = event.currentTarget.value;
        console.log(this.stylePath)
      },
      getLocalisation() {
        navigator.geolocation.getCurrentPosition(pos => {
          this.gettingLocation = false;
          this.location = {'latitude' : pos.coords.latitude, 'longitude' : pos.coords.longitude};
          this.$emit('setMarker', this.location)
        }, err => {
          this.gettingLocation = false;
          this.errorStr = err.message;
        })
      }
    }
  }
</script>

<style>
/* Sidebar */
#sidebar-card {
  width: 100%;
  height: 100%;
  justify-content: end;
  display: flex;
}

#sidebar {
  z-index: 9999;
  background: transparent;
  height: auto !important;
  box-shadow: none;
}

#sidebar-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

#sidebar-content {
  background: lightblue;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px blue solid;
}

#sidebar-body {
  overflow: auto;
}
#sidebar-body .row {
  margin-right: 0 !important;
}

#sidebar-footer {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}

.sidebar-footer-small {
  font-size: 12px;
  padding: 5px;
}

.btn-close {
  display: flex;
  justify-content: end;
}

#btn-sideBar {
  margin: 10px !important;
  transform: rotate(-90deg);
}

.btn-toggle {
  background: none !important;
}

.btn-transparent {
  margin-right: 5px;
  background: none !important;
  box-shadow: none !important;
  border-radius: 25px !important;
}

#btn-sideBar i {
  font-size: 50px;
}

.no-btn {
  background: none !important;
  box-shadow: none !important;
  height: auto;
}
.input-gps, .input-start, .input-end {
  display: flex;
  justify-content: center;
  align-content: baseline;
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
}

.v-item--active, .v-btn--active {
  background: lightgreen !important;
}

.v-item--active i, .v-btn--active i {
  color: darkgreen !important;
}

.msg-error {
  background: lightcoral;
  border: 0.5px black solid;
  padding: 10px;
  font-size: 12px;
  margin: 5px;
  color: black;
}

.v-navigation-drawer__border {
  background: none !important;
}
</style>

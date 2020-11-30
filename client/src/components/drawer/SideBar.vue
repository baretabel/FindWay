<template>
  <nav>
    <v-btn icon elevation="3" id="btn-sideBar" class="btn-transparent" @click="drawer = !drawer">
      <v-icon>mdi-loupe</v-icon>
    </v-btn>
    <v-navigation-drawer v-model="drawer" absolute temporary right id="sideBar" :width="500" class="navigation-drawer">
      <div id="sidebar-body" class="sideBar-items d-flex flex-column align-content-space-around justify-center">
        <div class="btn-close">
          <v-btn icon class="btn-transparent">
            <v-icon @click="drawer = !drawer">mdi-close</v-icon>
          </v-btn>
        </div>
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
        <br>
        <div class="row">
          <div class="input-gps">
            <v-btn class="no-btn">
              <v-icon>mdi-crosshairs-gps</v-icon>
              <p>Me localiser</p>
            </v-btn>
          </div>
          <div class="input-start">
            <v-autocomplete v-model="model" :items="states" persistent-hint prepend-icon="mdi-city" placeholder="Mon point de depart">
              <template v-slot:append-outer>
                <v-slide-x-reverse-transition mode="out-in"></v-slide-x-reverse-transition>
              </template>
            </v-autocomplete>
          </div>
          <div class="input-end">
            <v-autocomplete v-model="model" :items="states" persistent-hint prepend-icon="mdi-city" placeholder="Ma destination">
              <template v-slot:append-outer>
                <v-slide-x-reverse-transition mode="out-in"></v-slide-x-reverse-transition>
              </template>
            </v-autocomplete>
          </div>
        </div>
        <div class="drawer-footer py-5">
          <p class="p-drawer-footer">Vous pouvez cliquez sur la carte pour adapter votre parcour</p>
          <v-btn class="btn-drawer-footer">Commencer le parcours ></v-btn>
        </div>
      </div>

    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        model: null,
        path: undefined,
        stylePath: '',
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ],
      }
    },
    methods: {
      selectStylePath(event) {
        this.stylePath = event.currentTarget.value;
      }
    }
  }
</script>

<style>

#sideBar {
  z-index: 9999;
  background: transparent;
  height: auto !important;
  width: auto !important;
  box-shadow: none;
}

#sidebar-body {
  background: lightblue;
  height: auto;
  padding: 10px;
  border-radius: 20px;
}

.btn-close {
  display: flex;
  justify-content: end;
}

#btn-sideBar {
  background: white;
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

.navigation-drawer {
  padding: 15px;
  height: auto;
}
.drawer-footer {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.p-drawer-footer {
  font-size: 16px;
  padding: 5px;
}
.btn-drawer-footer {
  margin-top: 10px;
}
.no-btn {
  background: none !important;
  box-shadow: none !important;
  height: auto;
}
.input-gps, .input-start, .input-end {
  display: flex;
  justify-content: start;
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
</style>

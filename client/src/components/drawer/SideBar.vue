<template>
  <nav>
    <v-btn icon elevation="3" id="btn-sideBar" class="btn-transparent" @click="drawer = !drawer">
      <v-icon class="md-36">mdi-menu</v-icon>
    </v-btn>
    <v-navigation-drawer v-model="drawer" absolute temporary right id="sideBar" :width="500" class="navigation-drawer">
      <div id="sidebar-body" class="sideBar-items d-flex flex-column align-content-space-around justify-center">
        <div class="btn-close">
          <v-btn icon class="btn-transparent">
            <v-icon @click="drawer = !drawer">mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="d-flex flex-row align-center justify-center">
          <v-btn icon id="walk-path" class="btn-transparent" rounded @click="pathChoice('walk')">
            <v-icon>mdi-walk</v-icon>
          </v-btn>
          <v-btn icon id="bike-path" class="btn-transparent" rounded @click="pathChoice('bike')">
            <v-icon>mdi-bike</v-icon>
          </v-btn>
          <v-btn icon id="car-path" class="btn-transparent" rounded @click="pathChoice('car')">
            <v-icon>mdi-car</v-icon>
          </v-btn>
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
      close() {
        this.drawer = false;
      },
      pathChoice(path) {
        console.log(path)
        let walkPath = document.getElementById('walk-path')
        let bikePath = document.getElementById('bike-path')
        let carPath = document.getElementById('car-path')

        if(path === 'walk') {
          walkPath.classList.add('select-path');
          bikePath.classList.remove('select-path');
          carPath.classList.remove('select-path');
        }
        if(path === 'bike') {
          bikePath.classList.add('select-path');
          walkPath.classList.remove('select-path');
          carPath.classList.remove('select-path');
        }
        if(path === 'car') {
          carPath.classList.add('select-path');
          walkPath.classList.remove('select-path');
          bikePath.classList.remove('select-path');
        }
      },
      actions: {

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
  background: transparent;
  margin: 10px !important;
}

.select-path {
  border: 0.5px green solid;
}
.select-path i {
  color: green !important;
}

.btn-transparent {
  margin-right: 5px;
  background: none !important;
  box-shadow: none !important;
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
</style>

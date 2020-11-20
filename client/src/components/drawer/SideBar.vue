<template>
  <nav >
    <v-btn elevation="3" id="btn-sideBar" @click="drawer = !drawer">button</v-btn>
    <v-navigation-drawer v-model="drawer" absolute temporary id="sideBar" :width="450">
      <div class="sideBar-items d-flex flex-column py-14 align-content-space-around justify-center">
        <div class="d-flex flex-row align-center justify-center">
          <v-btn>1</v-btn>
          <v-btn>2</v-btn>
          <v-btn>3</v-btn>
        </div>
        <div>
          <v-autocomplete v-model="model" :items="states" persistent-hint prepend-icon="mdi-city">
            <template v-slot:append-outer>
              <v-slide-x-reverse-transition mode="out-in"></v-slide-x-reverse-transition>
            </template>
          </v-autocomplete>
          <v-autocomplete v-model="model" :items="states" persistent-hint prepend-icon="mdi-city">
            <template v-slot:append-outer>
              <v-slide-x-reverse-transition mode="out-in"></v-slide-x-reverse-transition>
            </template>
          </v-autocomplete>
        </div>
        <p>Vous pouvez cliquez sur la carte pour adapter votre parcour</p>
        <v-btn>Commencer le parcours ></v-btn>
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
  }
</script>

<style>

</style>
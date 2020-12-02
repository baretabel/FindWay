<template>
  <v-main class="container">
    <h1>Dashboard FindWay</h1>
    <div class="d-flex">
      <v-form v-model="valid" id="form-file" action="upload" method="post" enctype="multipart/form-data">
        <label for="file">Fichier (GeoJSON)</label>
        <input
            type="file"
            id="file"
            @change="onFileSelect"
        >
        <v-btn
            id="form-btn"
            color="success"
            @click="upload"
        >
          Envoyer
        </v-btn>
      </v-form>
    </div>
  </v-main>
</template>

<script>
import Axios from "axios";

  export default {
    data() {
      return {
        file: undefined,
        valid: false
      }
    },
    methods : {
      onFileSelect(e) {
        if (e.target.files[0].type === 'application/geo+json') {
          this.file = e.target.files
        }
      },
      upload() {
        Axios.post('http://localhost:3000/api/upload', {
          file: this.file,
        })
            .then(({data}) => {
              console.log(data)
            })
            .catch((err) => {
              console.log(err)
            });
      }
    }
  }
</script>
<style>
#form-file {
  display: flex;
  flex-direction: column;
}
#form-file label{
  font-size: 24px;
  margin-bottom: 5px;
}
#form-file input{
  margin-bottom: 5px;
}
</style>

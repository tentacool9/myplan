<template>
<div class="home">
  <div class="jumbotron jumbotron-fluid" style="margin-top: 0px; padding-top: 0px; padding-bottom: 10px; background-color : rgb(41, 237, 204)">
  <div class="container" >
  <div class="display-4">
      
      <img  src="../assets/myplanLogo.png" width="325" height="175">
  </div>
    <p class="lead">A modern solution to a modern problem.</p>
  </div>
  </div>
  <div class="container-fluid">
      <div class="row" style="padding: 40px; margin-bottom: 40px">
      <div class="col-md-6 offset-md-3"> 
      <div class="input-group input-group-lg container">
            <div class="input-group-prepend">
            <span @click="change(search)" class="input-group-text" id="inputGroup-sizing-lg">Search</span>
            </div>
            <input v-model="search" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Find the best plan for your destination...">
      </div>
      </div>
      </div>
      <div>
          <p class="lead" style="font-size: 25px">OUR TOP DESTINATIONS</p>
      </div>
      <div class="row">
            <div @click="change(country.name)" v-for="country in countryObjects" class="col-sm-3"><DestinationBox v-bind:locationName="country.name" v-bind:imgLink="country.img" ></DestinationBox></div>
      </div>
    </div>
</div>
</template>

<script>
import DestinationBox from '../components/DestinationBox.vue'
export default {
    
  name: 'Home',

  components: {
    DestinationBox,
  },
  data()  {
      return {
        countryObjects: require('../db.js'),
        search: ""
      }
  },
    
  methods: {
    change: function(location) {
        this.$store.state.selectedLocation = location;
        this.$router.push('/order');
    }
  }
}
</script>
<style>


</style>
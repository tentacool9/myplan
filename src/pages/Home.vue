<template>
<div class="home">
  <div class="jumbotron jumbotron-fluid" style="margin-top: 0px; padding-top: 0px; padding-bottom: 10px; background-color : rgb(41, 237, 204)">
  <div class="container" >
  <div class="display-1">
      myplan
      <!-- <img  src="../assets/myplanLogo.png" width="325" height="175"> -->
  </div>
    <p class="lead">save money by purchasing local data plans</p>
  </div>
  </div>
  <div class="container-fluid">
      <div class="row" style="padding: 40px; margin-bottom: 40px;">
      <div class="col-md-6 offset-md-3"> 
      <div class="input-group input-group-lg container">
            <div class="input-group-prepend">
            <span  @click="change(search)" class="input-group-text" id="inputGroup-sizing-lg">search</span>
            </div>
            <input v-model="search"  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="find the best plan for your destination...">
      </div>
      </div>
      </div>
      <div>
          <p class="lead" style="font-size: 25px">top destinations</p>
      </div>
      <div class="row">
            <div @click="change(country.country)" v-for="country in countryObjects" class="col-sm-3" v-bind:key="country.country"><DestinationBox    v-bind:locationName="country.country" v-bind:imgLink="country.img" ></DestinationBox></div>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import DestinationBox from '../components/DestinationBox.vue'
import VueSweetalert2 from 'vue-sweetalert2';
export default {
    
  name: 'Home',

  components: {
    DestinationBox,
  },
  data()  {
      return {
        countryObjects: null,
        search: ""
      }
  },
    
  methods: {
    change: function(location) {
        this.$store.state.selectedLocation = location;
        
        axios.get('http://localhost:3000/countryPlans/?name=' + location + "&plan=" + this.$store.state.nextPlan).then(response => {
          this.$store.state.planArray = response.data;
          if(this.$store.state.planArray.length > 0) {
            this.$router.push('/order');
          
            this.$store.state.nextPlan = this.$store.state.planArray[this.$store.state.planArray.length-1].id;
              console.log(this.$store.state.nextPlan)
          } else {
            this.$swal("No plans found", "Try another location", "error");
          }
        }).catch(error =>  this.$swal("Something happened", "Were working on it...", "error"));
        
    }
  },

  mounted() {

    axios.get('http://localhost:3000/topCountries').then(response => (this.countryObjects = response.data));
  }
}
</script>
<style>
.form-control::placeholder {
  color: black;
  font-weight: 200;
  font-size: 18px
}

</style>
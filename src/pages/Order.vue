<template>
  <div class="order">
    <div class="jumbotron jumbotron-fluid" style="background-color: white;margin-bottom: 0">
      <div class="container">
        <h1 class="display-2">{{this.$store.state.selectedLocation}}</h1>
        <p class="lead">We want to find you good deals, but we need to know what youre looking for.</p>
      </div>
    </div>

<div  class="contaxiner-fluid" style="background-color: white; padding: 5px; margin-bottom: 60px; line-height: 50px;">
<div class="lead" style="        
border-top: 1px;
border-top-color: grey;
border-top-style: solid;background-color: white ;  " @click="f => {this.filter = !this.filter}">{{this.filter == false ? '[click to open filter]' : '[close filter]'  }}</div>
<!-- The expanding filter -->
<!-- transition to be implemented -->
<transition  name="slide-fade">
  <div class="container" style="margin-top: 30px;" v-if="this.filter" >
  <form style="display: flex; flex-direction: row; justify-content: space-between">
      <div class="form-group lead filter" style="text-align: left" id="Calls">
        <label for="Calls" class="lead" style="">Call Minutes:</label>
          <div class=" " v-for="option in callOptions.array" v-bind:key="callOptions.type + option[0]" >
              <input type="radio" v-bind:id="option[0] + callOptions.type" name="customRadioInline6" class="custom-control-input" >
              <label class="custom-control-label" @click="filterAdd(option, callOptions.type)"  v-bind:for="option[0] + callOptions.type">{{option[0]}}-{{option[1]}}Min</label>
          </div>
      </div>
      <div class="form-group lead filter" style="text-align: left;" id="Data">
            <label for="Data" class="lead" style="">Data</label>
          <div v-for="option in dataOptions.array" v-bind:key="dataOptions.type + option[0]"  >
              <input type="radio" v-bind:id="dataOptions.type + option[0]" name="customRadioInline3" class="custom-control-input">
              <label class="custom-control-label" @click="filterAdd(option, dataOptions.type)" v-bind:for="dataOptions.type + option[0]">{{option[0]}}-{{option[1]}}GB</label >
          </div>
      </div>
      <div class="form-group lead filter" style="text-align: left" id="Price">
            <label for="Price" class="lead">Price</label>
          <div v-for="option in priceOptions.array" v-bind:key="priceOptions.type + option[0]"  >
              <input type="radio" v-bind:id="priceOptions.type + option[0]" name="customRadioInline4" class="custom-control-input">
              <label class="custom-control-label" @click="filterAdd(option, priceOptions.type)" v-bind:for="priceOptions.type + option[0]">{{option[0]}}-{{option[1]}}$</label>
          </div>
      </div>
      <div class="form-group filter lead" style="text-align: left" id="Texting">
            <label for="Texting" class="lead" style="">Texting</label>
          <div v-for="option in textOptions.array" v-bind:key="priceOptions.type + option[0]">
              <input type="radio" v-bind:id="option[0] + textOptions.type" name="customRadioInline5" class="custom-control-input">
              <label class="custom-control-label"  @click="filterAdd(option, textOptions.type)" v-bind:for="option[0] + textOptions.type">{{option[0]}}-{{option[1]}} Messages</label>
          </div>
      </div>
      <!-- Hardcoded -->
      <div class="form-group" style="text-align: left; margin-left: 30px" id="For how long?" >
            <label class="lead" for="For how long?">For how long?</label>
          <div class=" " style="display: ;">
              <input type="radio" id="customRadioInline3" name="customRadioInline2" class="custom-control-input">
              <label class="lead custom-control-label" for="customRadioInline3" @click='filterAdd(30,"time")'>30 Days / 1 Month</label>
          </div>
          <div class="" style="margin-bottom: 100px">
              <input type="radio" id="customRadioInline4" name="customRadioInline2" class="custom-control-input">
              <label class="lead custom-control-label" for="customRadioInline4" @click='filterAdd(14,"time")' >14 Days</label>
          </div>
      </div>
      


    </form>
          <div class="lead" @click="queryFilter()">[click to find a match]</div>
        
    </div>
</transition>
<!-- End of expanding filter -->
<!-- The Modal -->

<div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalScrollableTitle">Quick checkout</h5>
        <button @click="close" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <CheckOut></CheckOut>
      </div>
      <div class="modal-footer">
        <button @click="close" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
      
<!-- The plan table -->
    <div class="container">
    <div class="row">
      <div v-bind:key="data.id" v-for="data in planArray" class="col-md-3"  style="margin-bottom: 50px"><DataBox :company="data.company" :pricing="data.price" :info="data.information"></DataBox></div>
    </div>
    </div>
    <div @click="more()">Click here for more</div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import store from '../store';
import CheckOut from '../components/CheckOut.vue'
import DataBox from '../components/DataBox.vue';
export default {
  name: 'Order',
  components : {
      DataBox,
      CheckOut
  },
  
  data()  {
      return {
          datas : [
              {company: "Bell", pricing: "30$"},
              {company: "Fido", pricing: "30$"},
              {company: "Verizon", pricing: "30$"},
              {company: "Rogers", pricing: "30$"},
              {company: "Bell", pricing: "30$"},
              {company: "Bell", pricing: "30$"},
              {company: "Bell", pricing: "30$"},
              {company: "Bell", pricing: "30$"},
              {company: "Bell", pricing: "30$"},
              {company: "Bell", pricing: "30$"},
              
          ],
          callOptions: {type: "calls", array: [[0,250],[250,500],[500,1000]]},
          dataOptions: {type: "data", array: [[0,1],[1,3],[3,5]]},
          priceOptions: {type: "price", array: [[0,5],[5,10],[10,20],[20,30],[30,40],[40,50]]},
          textOptions: {type: "text", array: [[0,250],[250,500],[500,1000]]},
          filter: false,
          filterChosen: {}
      }
  },

  methods: {
      close: function() {
          $('#exampleModal').hide('slow');
      },   
      more: function() {
        console.log(this.nextPlan);
        axios.get('http://localhost:3000/countryPlans/?name=' + this.selectedLocation + "&plan=" + this.nextPlan).then(response => {
          console.log(response.data)
          
          if(response.data.length > 0) {
            console.log("here")
            this.$store.state.planArray = this.$store.state.planArray.concat(response.data);
            this.$store.state.nextPlan = this.$store.state.planArray[this.$store.state.planArray.length-1].id
            console.log(this.nextPlan);
          } else {
            this.$swal("No plans found", "Try another location", "error");
          }
        })
      },
      filterAdd: function(option, type) {
        if (this.filterChosen[type] != undefined) {
          delete this.filterChosen[type];
        } else {
          this.filterChosen[type] = option;

        }
        console.log(this.filterChosen)
      },
      queryFilter: function() {
        
        if (this.filterChosen != undefined) {
          var queryString = "?"
          var filterObj = Object.assign(this.filterChosen)
          Object.keys(filterObj).forEach(function(key,index) {
            queryString += key + '=' + filterObj[key] + '&'
          });
          console.log(this.filterChosen)
          console.log(this.$store.state.selectedLocation)
          axios.get("http://localhost:3000/countryPlansFiltered/" + queryString.substring(0,queryString.length-1) + '&name=' + this.$store.state.selectedLocation ).then(response => {
            this.$store.state.planArray = response.data;
          })
        }
      },
  },


  computed : {
    ...mapState(['planArray','nextPlan','selectedLocation'])
  },

  mounted() {
      axios.get("https://jsonip.com?callback=?").then(response => { 
      // parse the data from the response
      var info =  JSON.parse(response.data.match(/{.*}/)[0]);
      axios({
      method: 'post',
      url: 'http://localhost:3000/clientData',
      data: {
        cli: info.ip,
        choice: this.$store.state.selectedLocation
      }
      });
    })
  }
}
</script>

<style>
.filter {
  border-radius: 10px;
  border-width: 0.5px;
  border-color: grey;
  border-style: solid;
  padding-left: 30px;
  padding-right: 10px;
}
    


</style>
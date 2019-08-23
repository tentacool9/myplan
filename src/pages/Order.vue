<template>
  <div class="order">
    <div class="jumbotron jumbotron-fluid" style="background-color: white;margin-bottom: 0">
      <div class="container">
        <h1 class="display-4">{{this.$store.state.selectedLocation}}</h1>
        <p class="lead">We want to find you good deals, but we need to know what youre looking for.</p>
      </div>
    </div>
<div  class="contaxiner-fluid" style="background-color: white; padding: 5px; margin-bottom: 60px; line-height: 50px;">
<button type="button" class="btn  btn-light lead filter" style="padding-left: 10px;" @click="f => {this.filter = !this.filter}">{{this.filter == false ? "Find a plan that matches you" : "Close filter"  }}</button>
    
  <div class="container" style="margin-top: 30px" v-if="this.filter">
  <form style="display: flex; flex-direction: row; justify-content: space-between">
      <div class="form-group filter" style="text-align: left" id="Calls">
        <label for="Calls" style="font-weight: 700">Call Minutes:</label>
          <div class=" " v-for="option in callOptions" v-bind:key="option" >
              <input type="radio" v-bind:id="option" name="customRadioInline6" class="custom-control-input" >
              <label class="custom-control-label" v-bind:for="option">{{option}}</label>
          </div>
      </div>
      <div class="form-group filter" style="text-align: left;" id="Data">
            <label for="Data" style="font-weight: 700">Data</label>
          <div v-for="option in dataOptions" v-bind:key="option" class="" >
              <input type="radio" v-bind:id="option" name="customRadioInline3" class="custom-control-input">
              <label class="custom-control-label" v-bind:for="option">{{option}}</label >
          </div>
      </div>
      <div class="form-group filter" style="text-align: left" id="Price">
            <label for="Price" style="font-weight: 700">Price</label>
          <div v-for="option in priceOptions" v-bind:key="option" class=" " >
              <input type="radio" v-bind:id="option" name="customRadioInline4" class="custom-control-input">
              <label class="custom-control-label" v-bind:for="option">{{option}}</label>
          </div>
      </div>
      <div class="form-group filter" style="text-align: left" id="Texting">
            <label for="Texting" style="font-weight: 700">Texting</label>
          <div v-for="option in textOptions" v-bind:key="option" class=" " >
              <input type="radio" v-bind:id="option" name="customRadioInline5" class="custom-control-input">
              <label class="custom-control-label" v-bind:for="option">{{option}}</label>
          </div>
      </div>
      <!-- Hardcoded -->
      <div class="form-group" style="text-align: left; margin-left: 30px" id="For how long?" >
            <label for="For how long?">For how long?</label>
          <div class=" " style="display: ;">
              <input type="radio" id="customRadioInline3" name="customRadioInline2" class="custom-control-input">
              <label class="custom-control-label" for="customRadioInline3">30 Days / 1 Month</label>
          </div>
          <div class="" style="margin-bottom: 100px">
              <input type="radio" id="customRadioInline4" name="customRadioInline2" class="custom-control-input">
              <label class="custom-control-label" for="customRadioInline4">14 Days</label>
          </div>
      </div>
      


    </form>
          <button type="button" class="btn btn-success">Find me a match</button>
        
    </div>


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
          callOptions: ['0-250 Minutes','250-500 Minutes','500-1000 Minutes','Unlimited Calls'],
          dataOptions: ['0-1GB','1-3GB','3-5GB','Unlimited'],
          priceOptions: ['0-5$','5-10$','10-20$','20-30$','30-40$','40-50$',"I don't really care"],
          textOptions: ['0-250 Messages','250-500 Messages','500-1000 Messages','Unlimited Messaging'],
          filter: false,
          choiceString: "",

      }
  },

  methods: {
      close() {
          $('#exampleModal').hide('slow');
      },   
      more() {
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
  },


  computed : {
    ...mapState(['planArray','nextPlan','selectedLocation'])
  }
}
</script>

<style>
.filter {
  border-radius: 10px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  padding-left: 30px;
  padding-right: 10px;
}
    


</style>
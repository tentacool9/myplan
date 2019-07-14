<template>
  <div class="order">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">{{this.$store.state.selectedLocation}}</h1>
        <p class="lead">We want to find you good deals, but we need to know what youre looking for.</p>
      </div>
    </div>
<div class="contaxiner-fluid" style="background-color: white; padding: 20px; margin-bottom: 60px; line-height: 50px;"><div class="container"><form>
      <div class="form-group">
    <p>Where will you be traveling?</p>
     <select class="form-control" id="exampleFormControlSelect1">
          <option>Only in New York</option>    
          <option>America wide</option>
          <option>America & Canada</option>
        </select>
    <p>What are you looking for?</p>
        <label style="float: left" for="customRange1">Price</label>
        <label style="float: right" for="customRange1">Quality / Rating</label>
    <input type="range" class="custom-range" id="customRange1">
        <div class="row">
        <div class="col-md-2 offset-md-3">
        <label for="from" >Traveling from:</label> 
        <input type="date" id="from" style="border-radius: 10px; border-style: solid; border-width: 0.5px; border-color: gray">
        </div>
        <div class="col-md-2" style="font-size: 60px; font-weight: 900; margin-top: 25px;"> > </div>    
        <div  class="col-md-2 ">
        <label for="until"> Until:</label>  
        <input type="date" id="until" style="border-radius: 10px; border-style: solid; border-width: 0.5px; border-color: gray">
        </div>
        </div>
      </div>

    </form>
        
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
      <div v-for="data in datas" class="col-md-3"  style="margin-bottom: 50px"><DataBox :company="data.company" :pricing="data.pricing"></DataBox></div>
    </div>
    </div>
  </div>
</template>

<script>

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
              
          ]  
      }
  },

  methods: {
      close() {
          $('#exampleModal').hide('slow');
      }
  }
}
</script>

<style>

    

</style>
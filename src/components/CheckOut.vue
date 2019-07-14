<template>
  <div class="checkout">
 <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
      <p class ="form-group col-md-4 offset-md-4">What type of card?</p>
    <select class="form-control" id="exampleFormControlSelect1">
          <option>Debit</option>    
          <option>Mastercard</option>
          <option>Visa</option>
    </select>
    <div class="form-group col-md-12">
      <label for="inputZip">Card Number</label>
      <input type="text" class="form-control" id="inputNumber">
    </div>
      
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div @click="$swal('Purchase complete');"  class="btn btn-primary">Checkout</div>
</form>
    </div>
</template>

<script>

export default {
  name: 'Checkout',
  props: ['company','pricing','info'],
  data()  {
      return {

      }
  },
    
  methods: {

  }
}
</script>
<style>
</style>
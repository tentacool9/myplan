<template>
  <div class="data">
      <div class="card" >
          <img src="" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">{{company}}</h5>
            <p class="card-text money">{{pricing}}<strong>$</strong></p>
            <p class="card-text" style="height: 150px;border-style: solid; border-width: 0.5px; border-color: gainsboro; border-radius: 5px; padding: 10px">{{info}}</p>
            
            <a @click="activate" class="btn btn-primary" style="color: white; ">Buy</a>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'DataBox',
  props: ['company','pricing','info'],
  data()  {
      return {

      }
  },
    
  methods: {
      activate() {
          $('#exampleModal').show('slow');
      }
  }
}
</script>
<style>


    

</style>
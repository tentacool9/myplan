<template>
  <div class="effect">
   <div class="card cardFix">
  <img v-bind:src='imgLink' class="card-img-top" width='150' height='150'>
  <div class=" cardEdit card-body">
      <p class="displayText">{{locationName}}</p>
</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'DestinationBox',
  props: ['locationName','imgLink'],
  data()  {
      return {
          isOn: false
      }
  }
}
</script>
<style>
    .displayText {
        font-size: 20px;
        color: black;
        margin-bottom: 10px;
    }
    .cardEdit {
        padding: 0px;
        padding-bottom: 0px;
        margin-bottom: 0px !important;
        margin-top: 10px;
    }
    
    .cardFix {
        opacity: 1;
        border-width: 0;
        margin-bottom: 100px;
    }
    @keyframes shine {
      10% {
        opacity: 1;
        transition-timing-function: ease;
      }
      100% {
        opacity: 0.4;
      }
    }
    
    .effect {
        opacity: 1;
        -webkit-transition: opacity 1s;
    }
    .effect:hover {
        opacity: 0.6;
        -webkit-transition: opacity 1s; 
    }
    

</style>
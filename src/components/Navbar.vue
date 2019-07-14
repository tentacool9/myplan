<template>
  <div class="navigation">
      <nav class="navbar navbar-expand-lg">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About us</a>
      </li>
    </ul>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['locationName','imgLink'],
  data()  {
      return {

      }
  }
}
</script>
<style>
    .navigation {
        background-color :  rgb(41, 237, 204);
    }
    
    .nav-link {
        color: black;
    }
    
    li {
        border-bottom: 1px;
        border-bottom-color: black;
        border-bottom-style: solid;

        margin-right: 10px;
        
    }

    

</style>
<template>
  <div class="bg">
      <!-- Navbar  -->
      <app-navbar></app-navbar>

      <!-- Main -->
      <transition 
        appear
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight">
                <router-view></router-view>
      </transition>

  </div>
</template>

<script>

import Navbar from './components/Navbar';


export default {
  components:{
    appNavbar : Navbar,
  }
}
</script>

<style scoped>
  .bg{
    background-image: url('./assets/bg.jpg');
    opacity: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  }
</style>

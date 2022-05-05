<script>
import TheNavbar from '@/components/TheNavbar.vue'
export default {
  components: {
    TheNavbar
}
}
</script>

<template>
<button onclick="topFunction();" id="myBtn" title="Remonter">Top</button>
<TheNavbar/>



<div>
<router-view></router-view>
</div>
</template>

<style>
@import "http://fonts.googleapis.com/css?family=Open+Sans:300,400,700";
@import "https://unpkg.com/aos@2.3.1/dist/aos.css";
@import "https://use.fontawesome.com/releases/v5.15.0/css/all.css";
</style>

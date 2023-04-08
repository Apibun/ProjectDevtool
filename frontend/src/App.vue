<script setup>
import Navbar from "./components/Navbar.vue";
// import Homepage from "./views/Homepage.vue";
</script>
<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <!-- <Homepage /> -->
  </div>
</template>
<!-- <template>
  <div>
    <h1>My Vue 3 App</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/Agency">About</router-link>
    <router-view></router-view>
  </div>
</template> -->

<style scoped></style>

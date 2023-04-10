<template>
  <div id="app">
    <nav
      class="navbar"
      style="background: linear-gradient(180deg, #32AFA9 0%, rgba(50, 168, 175, 0.6) 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);"
      role="navigation"
      aria-label="main navigation"
    >

    <div><img src="./assets/Webicon.png" alt="WebIcon" class="mt-2 ml-3" style="width: 50px; height: 50px;"></div>
    
      <div id="navbar" class="navbar-menu">
        <div class="navbar-start "><p class="navbar-item "> WATER.7</p></div>
        <div class="navbar-end ">
          <a class="navbar-item"> <router-link to="/" class="has-text-black">Home</router-link> </a>
          <a class="navbar-item">
            <router-link to="/agency" class="has-text-black">แจ้งหน่วยงาน</router-link>
          </a>
          <a class="navbar-item" >
            <router-link to="/project" class="has-text-black">โครงการ </router-link></a
          >
          <a class="navbar-item" >
            <router-link to="/product" class="has-text-black">ผลิตภัณฑ์ </router-link>
          </a>

          <a class="navbar-item"><router-link to="/news" class="has-text-black">ข่าวสาร </router-link> </a>

          <img src="./assets/Notificationicon.png" alt="Notificationicon" class="mt-4 mr-3" style="width: 30px; height: 30px;">
          <img src="./assets/Usericon.png" alt="Usericon" class="mt-4 mr-3" style="width: 30px; height: 30px;">
          <img src="./assets/Menuicon.png" alt="Menuicon" class="mt-5 mr-3 " style="width: 25px; height: 20px;">
        </div>
      </div>
    </nav>
    <router-view :key="$route.fullPath" />

    <!-- <footer>
      <div style="background: linear-gradient(180deg, #32AFA9 0%, rgba(50, 168, 175, 0.6) 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); height: 60px;"></div>
    </footer> -->
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Anuphan');
  body,button{
    font-family: 'Anuphan';
  }

</style>

<script>
export default {
  data() {
    return {
      role:'seller'
    };
  },
};
</script>

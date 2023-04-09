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
        <div class="navbar-start "><a class="navbar-item "> WARTER.7</a></div>
        <div class="navbar-end ">
          <a class="navbar-item"> <router-link to="/">Home</router-link> </a>
          <a class="navbar-item">
            <router-link to="/agency">แจ้งหน่วยงาน</router-link>
          </a>
          <a class="navbar-item" >
            <router-link to="/project">โครงการ </router-link></a
          >
          <a class="navbar-item" >
            <router-link to="/product">ผลิตภัณฑ์ </router-link>
          </a>


          <a class="navbar-item" >ข่าวสาร </a>
          <img src="./assets/Notificationicon.png" alt="Notificationicon" class="mt-4 mr-3" style="width: 30px; height: 30px;">
          <img src="./assets/Usericon.png" alt="Usericon" class="mt-4 mr-3" style="width: 30px; height: 30px;">
          <img src="./assets/Menuicon.png" alt="Menuicon" class="mt-5 mr-3 " style="width: 25px; height: 20px;">
        </div>

        <!-- <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons" >
              <a class="button is-light">
                <router-link to="/login">Log in</router-link></a
              >
            </div>
            <div >
              <a class="button is-primary">
                <strong><router-link to="/signup">Sign up</router-link></strong>
              </a>
            </div>
          </div>
        </div> -->
      </div>
    </nav>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      role:'seller'
    };
  },
};
</script>

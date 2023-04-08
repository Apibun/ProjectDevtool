<template>
  <header>
    <v-card class="mx-auto" max-width="448">
      <v-layout>
        <v-app-bar color="#32AFA9" density="compact">
          <template v-slot:prepend>
            <img src="../assets/Webicon.png" style="width: 60px" />
          </template>

          <v-app-bar-title class="text-h4">WATER.7</v-app-bar-title>
          <ul class="navbar">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/agency">แจ้งหน่วยงาน</router-link></li>
            <!-- <li><router-link>โครงการ</router-link></li>
            <li><router-link>ผลิตภัณฑ์</router-link></li>
            <li><router-link>ข่าวสาร</router-link></li> -->
          </ul>
          <template v-slot:append>
            <img
              src="../assets/Notificationicon.png"
              style="width: 45px; padding: 10px"
            />
            <img
              src="../assets/Usericon.png"
              style="width: 60px; padding: 10px"
            />
            <img
              src="../assets/Menuicon.png"
              style="width: 50px; padding: 10px"
            />
          </template>
        </v-app-bar>
      </v-layout>
    </v-card>
  </header>
</template>
<script>
import { RouterLink } from "vue-router"; // Import the router-link component
export default {
  components: {
    RouterLink, // Register the router-link component
  },
};
</script>
<style scoped>
.v-toolbar {
  justify-content: center;
  height: 72px;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  padding: 20px;
  color: #000;
  font-weight: bold;
}

.navbar {
  display: flex;
}
</style>

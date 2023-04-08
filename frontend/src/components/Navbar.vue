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
            <li><a href="">Home</a></li>
            <li><a href="">แจ้งหน่วยงาน</a></li>
            <li><a href="">โครงการ</a></li>
            <li><a href="">ผลิตภัณฑ์</a></li>
            <li><a href="">ข่าวสาร</a></li>
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
export default {};
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

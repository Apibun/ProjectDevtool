<script setup>
import Navbar from "./components/Navbar.vue";
</script>
<template>
  <div>
    <Navbar />
    <section>
      <div class="flexcontainer" style="padding-top: 100px">
        <h1 class="text-h3" style="color: #63b224">Water Hyacinth Problem</h1>
      </div>
      <div class="flexcontainer">
        <img src="./assets/Waterhyacinth.png" />
      </div>
      <div class="flexcontainer" style="padding-top: 40px">
        <p
          class="text-h5 font-weight-bold ma-5 mb-16"
          style="max-width: 650px; text-align: center"
        >
          วัชพืชต่างถิ่น (invasive species) ที่แพร่ระบาดรุกราน
          ก่อให้เกิดความเสียหายต่อพืชพื้นเมืองและระบบนิเวศของประเทศไทย
          ก่อให้เกิดปัญหาทั้งในด้านการเกษตร การชลประทาน และส่งผลต่อสุขภาพอนามัย
          ทำให้การควบคุมวัชพืชดังกล่าวเป็นไปได้ยาก
        </p>
      </div>
      <div
        class="flexcontainer"
        style="padding-top: 40px; background-color: #dbf29d"
      >
        <v-row no-gutters>
          <v-col>
            <!-- <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet> -->
            <v-row class="mb-3" style="padding-left: 35%">
              <img
                src="./assets/Lettericon.png"
                style="width: 80px; padding-right: 35px"
              />
              <!-- <div class="textbox">
                <p class="text-h5">แจ้งหน่วยงาน</p>
              </div> -->
              <p class="text-h5 mt-2">
                <span class="textbox font-weight-bold">แจ้งหน่วยงาน</span>
              </p>
            </v-row>
            <v-row class="mb-6" style="padding-left: 42%; max-width: 700px">
              <p class="text-h6 font-weight-bold">
                ผู้ที่ประสบปัญหาเกี่ยวกับผักตบชวาสามารถร้องเรียนกับหน่วยงานที่
                เกี่ยวข้องได้
              </p>
            </v-row>
          </v-col>
          <v-col>
            <!-- <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet> -->
            <v-row class="mb-3" style="padding-left: 20%">
              <img
                src="./assets/Coinicon.png"
                style="width: 80px; padding-right: 35px"
              />
              <!-- <div class="textbox"> -->
              <p class="text-h5 mt-2">
                <span class="textbox font-weight-bold">โครงการ</span>
              </p>
              <!-- </div> -->
            </v-row>
            <v-row class="mb-6" style="padding-left: 27%; max-width: 550px">
              <p class="text-h6 font-weight-bold">
                โครงการที่ช่วยในการแก้ปัญหาผักตบชวา เช่น การสร้างอาชีพ
                การนำไปแปรรูปเป็นผลิตภัณฑ์
              </p>
            </v-row>
          </v-col>
        </v-row>
        <!-- <img
          src="./assets/Lettericon.png"
          style="width: 80px; padding-right: 40px"
        />
        <div class="textbox">
          <p class="text-h5">แจ้งหน่วยงาน</p>
        </div> -->
      </div>
    </section>
  </div>
</template>

<style scoped>
.flexcontainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.textbox {
  background-color: #9eade2;
  padding: 10px 50px;
  border-radius: 7px;
}
</style>

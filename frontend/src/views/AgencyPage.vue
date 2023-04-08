<template>
  <section>
    <div style="margin-top: 100px">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-text-field
              v-model="searchQuery"
              append-inner-icon="mdi-magnify"
              style="background-color: #eeeeee"
              hide-details="auto"
            >
              <template v-slot:label>
                <label class="custom-label">{{ searchLabel }}</label>
              </template>
            </v-text-field>
            <!-- <v-list>
              <v-list-item v-for="item in filteredItems" :key="item.id">
                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list> -->
          </v-col>
        </v-row>
        <v-row class="mt-10" align="center" justify="center">
          <template v-for="item in carditems" :key="item.id">
            <v-col cols="12" md="3" sm="6">
              <v-card
                class="mx-auto"
                max-width="300"
                color="#FFFDDE"
                style="border-radius: 20px"
              >
                <v-img
                  class="align-end text-white"
                  height="200"
                  :src="item.image"
                  cover
                />
                <!-- <v-card-title>Tell us about the project.</v-card-title> -->
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-text>
                  <div>
                    We ask you to fill out a short job order form to help us get
                    a clearer grasp of your project. Don’t worry, there’ll be
                    guide questions.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-col>
                    <v-dialog
                      v-model="item.dialog"
                      width="auto"
                      max-width="700"
                      class="text-center"
                    >
                      <template v-slot:activator="{ props }">
                        <!-- <v-btn color="primary" v-bind="props">
                          Open Dialog
                        </v-btn> -->
                        <v-btn
                          variant="flat"
                          block
                          color="#BCE29E"
                          v-bind="props"
                          >Read more.</v-btn
                        >
                      </template>
                      <v-card>
                        <v-toolbar color="#FFC074">
                          <template v-slot:append>
                            <v-btn
                              icon="mdi-close"
                              style="color: #da1e28"
                              @click="item.dialog = false"
                            ></v-btn> </template
                        ></v-toolbar>
                        <v-card-title class="text-h5 font-weight-bold mt-5"
                          >รายละเอียดโครงการ</v-card-title
                        >
                        <v-img class="mx-10" :src="item.image" />
                        <!-- <v-card-text>
                          {{ item.id }}
                        </v-card-text> -->
                        <v-card-text class="text-h6 font-weight-bold"
                          >โครงการจิตอาสาพัฒนา สายน้ำแห่งรัตนโกสินทร์
                          กำจัดผักตบชวาบึงห้วยกลอย เทศบาลตำบลชุมพร
                        </v-card-text>
                        <div class="text-start">
                          <v-card-text>
                            รัฐบาลได้มีนโยบายให้ความสำคัญในการดำเนินการกำจัดผักตบชวา
                            เพื่อแก้ไขปัญหาผักตบชวา
                            และปัญหาด้านสิ่งแวดล้อมนับวันจะมีปัญหาเพิ่มขึ้นโดยเฉพาะปัญหาวัชพืชและผักตบชวาที่ทำให้น้ำเน่าเสียกีดขวางการสัญจรการไหลระบายของน้ำและทำให้แหล่งน้ำตื้นเขินกระทรวงมหาดไทยได้มอบนโยบายการแก้ไขปัญหาผักตบชวา
                          </v-card-text>
                          <v-card-text class="text-h6 font-weight-bold">
                            ข้อมูลติดต่อ
                          </v-card-text>
                          <v-card-text>
                            สำนักงานเทศบาลตำบลชุมพร 223 หมู่ 10 ตำบลชุมพร
                            อำเภอเมยวดี จังหวัดร้อยเอ็ด 45250 โทรศัพท์ สำนักปลัด
                            043-030517
                          </v-card-text>
                        </div>
                      </v-card>
                    </v-dialog>
                    <!-- <v-btn variant="flat" block color="#BCE29E"
                      >Read more.</v-btn
                    > -->
                  </v-col>
                  <v-col>
                    <v-btn variant="flat" block color="#FF9494">Report</v-btn>
                  </v-col>
                </v-card-actions>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        { id: 4, name: "Item 4" },
        { id: 5, name: "Item 5" },
      ],
      searchLabel: "ค้นหา",
      carditems: [
        {
          id: 1,
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Tell us about the project.",
          detail:
            "We ask you to fill out a short job order form to help us get a clearer grasp of your project. Don’t worry, there’ll be guide questions.",
          fulldetail:
            "รัฐบาลได้มีนโยบายให้ความสำคัญในการดำเนินการกำจัดผักตบชวา เพื่อแก้ไขปัญหาผักตบชวา และปัญหาด้านสิ่งแวดล้อมนับวันจะมีปัญหาเพิ่มขึ้นโดยเฉพาะปัญหาวัชพืชและผักตบชวาที่ทำให้น้ำเน่าเสียกีดขวางการสัญจรการไหลระบายของน้ำและทำให้แหล่งน้ำตื้นเขินกระทรวงมหาดไทยได้มอบนโยบายการแก้ไขปัญหาผักตบชวา",
          dialog: false,
        },
        {
          id: 2,
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Tell us about the project.",
          detail:
            "We ask you to fill out a short job order form to help us get a clearer grasp of your project. Don’t worry, there’ll be guide questions.",
          fulldetail:
            "รัฐบาลได้มีนโยบายให้ความสำคัญในการดำเนินการกำจัดผักตบชวา เพื่อแก้ไขปัญหาผักตบชวา และปัญหาด้านสิ่งแวดล้อมนับวันจะมีปัญหาเพิ่มขึ้นโดยเฉพาะปัญหาวัชพืชและผักตบชวาที่ทำให้น้ำเน่าเสียกีดขวางการสัญจรการไหลระบายของน้ำและทำให้แหล่งน้ำตื้นเขินกระทรวงมหาดไทยได้มอบนโยบายการแก้ไขปัญหาผักตบชวา",
          dialog: false,
        },
        {
          id: 3,
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Tell us about the project.",
          detail:
            "We ask you to fill out a short job order form to help us get a clearer grasp of your project. Don’t worry, there’ll be guide questions.",
          fulldetail:
            "รัฐบาลได้มีนโยบายให้ความสำคัญในการดำเนินการกำจัดผักตบชวา เพื่อแก้ไขปัญหาผักตบชวา และปัญหาด้านสิ่งแวดล้อมนับวันจะมีปัญหาเพิ่มขึ้นโดยเฉพาะปัญหาวัชพืชและผักตบชวาที่ทำให้น้ำเน่าเสียกีดขวางการสัญจรการไหลระบายของน้ำและทำให้แหล่งน้ำตื้นเขินกระทรวงมหาดไทยได้มอบนโยบายการแก้ไขปัญหาผักตบชวา",
          dialog: false,
        },
        {
          id: 4,
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Tell us about the project.",
          detail:
            "We ask you to fill out a short job order form to help us get a clearer grasp of your project. Don’t worry, there’ll be guide questions.",
          fulldetail:
            "รัฐบาลได้มีนโยบายให้ความสำคัญในการดำเนินการกำจัดผักตบชวา เพื่อแก้ไขปัญหาผักตบชวา และปัญหาด้านสิ่งแวดล้อมนับวันจะมีปัญหาเพิ่มขึ้นโดยเฉพาะปัญหาวัชพืชและผักตบชวาที่ทำให้น้ำเน่าเสียกีดขวางการสัญจรการไหลระบายของน้ำและทำให้แหล่งน้ำตื้นเขินกระทรวงมหาดไทยได้มอบนโยบายการแก้ไขปัญหาผักตบชวา",
          dialog: false,
        },
        {
          id: 5,
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          title: "Tell us about the project.",
          detail:
            "We ask you to fill out a short job order form to help us get a clearer grasp of your project. Don’t worry, there’ll be guide questions.",
          fulldetail:
            "รัฐบาลได้มีนโยบายให้ความสำคัญในการดำเนินการกำจัดผักตบชวา เพื่อแก้ไขปัญหาผักตบชวา และปัญหาด้านสิ่งแวดล้อมนับวันจะมีปัญหาเพิ่มขึ้นโดยเฉพาะปัญหาวัชพืชและผักตบชวาที่ทำให้น้ำเน่าเสียกีดขวางการสัญจรการไหลระบายของน้ำและทำให้แหล่งน้ำตื้นเขินกระทรวงมหาดไทยได้มอบนโยบายการแก้ไขปัญหาผักตบชวา",
          dialog: false,
        },
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {},
};
</script>

<style scoped>
.custom-label {
  color: #2f2f2f;
  font-weight: bold;
}

.v-label {
  opacity: 1;
}
</style>

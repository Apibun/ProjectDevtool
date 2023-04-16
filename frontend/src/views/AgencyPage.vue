<template>
  <div>
    <h1 class="is-size-2 mt-6 has-text-centered has-text-weight-bold">
      หน่วยงาน
    </h1>
    <div class="column is-half is-offset-one-quarter mb-6">
      <div class="level">
        <input
          class="input"
          type="text"
          placeholder="ค้นหา"
          v-model="SearchQuery"
        />
        <button class="button ml-1 has-background-info" @click="search">
          ค้นหา
        </button>
      </div>
    </div>
    <div class="columns is-multiline mt-4" style="margin: 0 5%">
      <template v-if="SearchQuery === ''">
        <div class="column is-3" v-for="item in carditems" :key="item.id">
          <div class="card" style="background-color: #fffdde">
            <div class="card-image pt-4">
              <figure
                class="image"
                style="display: flex; justify-content: center"
              >
                <img
                  :src="item.image"
                  alt="Placeholder image"
                  style="
                    min-width: 200px;
                    min-height: 200px;
                    max-width: 250px;
                    max-height: 250px;
                  "
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 has-text-centered">
                    {{ item.title }}
                  </p>
                </div>
              </div>
              <div class="content" v-if="item.detail.length > 200">
                {{ item.detail.substring(0, 197) + "..." }}
              </div>
            </div>
            <footer class="card-footer">
              <button
                class="button card-footer-item is-medium has-text-weight-bold is-white"
                style="background-color: #bce29e; color: #2f2f2f"
                @click="openModal(item)"
              >
                Read More.
              </button>
              <button
                class="button card-footer-item is-medium has-text-weight-bold is-white"
                style="background-color: #ff9494; color: #2f2f2f"
                color="#2F2F2F"
                @click="openModalReport(item)"
              >
                Report
              </button>
            </footer>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="column is-3" v-for="item in filteredItems" :key="item.id">
          <div class="card" style="background-color: #fffdde">
            <div class="card-image pt-4">
              <figure
                class="image"
                style="display: flex; justify-content: center"
              >
                <img
                  :src="item.image"
                  alt="Placeholder image"
                  style="
                    min-width: 200px;
                    min-height: 200px;
                    max-width: 250px;
                    max-height: 250px;
                  "
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 has-text-centered">
                    {{ item.title }}
                  </p>
                </div>
              </div>
              <div class="content" v-if="item.detail.length > 200">
                {{ item.detail.substring(0, 197) + "..." }}
              </div>
            </div>
            <footer class="card-footer">
              <button
                class="button card-footer-item is-medium has-text-weight-bold is-white"
                style="background-color: #bce29e; color: #2f2f2f"
                @click="openModal(item)"
              >
                Read More.
              </button>
              <button
                class="button card-footer-item is-medium has-text-weight-bold is-white"
                style="background-color: #ff9494; color: #2f2f2f"
                color="#2F2F2F"
                @click="openModalReport(item)"
              >
                Report
              </button>
            </footer>
          </div>
        </div>
      </template>
      <template v-if="selectedItem !== null">
        <div class="modal p-6" :class="{ 'is-active': showModal }">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head" style="background-color: #ffc074">
              <p class="modal-card-title"></p>
              <button
                class="delete"
                aria-label="close"
                style="background-color: transparent"
                @click="showModal = false"
              ></button>
            </header>
            <section class="modal-card-body px-6">
              <p class="title is-size-3 has-text-centered">รายละเอียดโครงการ</p>
              <div class="has-text-centered">
                <img
                  :src="selectedItem.image"
                  alt="Placeholder image"
                  style="min-width: 400px; min-height: 400px; max-height: 600px"
                />
              </div>
              <p class="title is-size-5 has-text-centered mt-5">
                {{ selectedItem.title }}
              </p>
              <div class="content">
                {{ selectedItem.detail }}
              </div>
              <p class="title is-size-5">ข้อมูลติดต่อ</p>
              <p>
                {{ selectedItem.contact }}
              </p>
            </section>
          </div>
        </div>
      </template>
      <div class="modal p-6" :class="{ 'is-active': showModalReport }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head" style="background-color: #ffc074">
            <p class="modal-card-title"></p>
            <button
              class="delete"
              aria-label="close"
              style="background-color: transparent"
              @click="closeModalReport()"
            ></button>
          </header>
          <section class="modal-card-body px-6">
            <p class="title is-size-3 has-text-centered">
              แจ้งเหตุ และร้องเรียนปัญหา
            </p>
            <div class="has-text-centered">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
                v-if="previewImage === null"
                style="min-width: 400px; min-height: 400px; max-height: 600px"
              />
              <div class="preview" v-else>
                <img
                  :src="previewImage"
                  alt="Preview Image"
                  style="min-width: 400px; min-height: 400px; max-height: 600px"
                />
              </div>
            </div>
            <div class="file mt-2 mb-5 is-right is-small">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume"
                  @change="onFileChange"
                />
                <span
                  class="file-cta px-2 py-0"
                  style="background-color: #d9d9d9; border-radius: 7px"
                >
                  <span class="file-label is-size-5">choose image</span>
                </span>
                <span class="has-text-danger">{{ error.image }}</span>
              </label>
            </div>
            <p class="title is-size-5 mb-2">หัวเรื่อง :</p>
            <input
              class="input"
              :class="{ 'is-danger': error.heading }"
              type="text"
              placeholder="Text input"
              v-model="heading"
              @input="validateHeading()"
              style="border-radius: 15px"
            />
            <span class="has-text-danger">{{ error.heading }}</span>
            <p class="title is-size-5 mb-2 mt-4">แจ้งเหตุ :</p>
            <textarea
              class="textarea"
              :class="{ 'is-danger': error.inform }"
              placeholder="e.g. Hello world"
              v-model="inform"
              @input="validateInform()"
              style="border-radius: 15px"
            ></textarea>
            <span class="has-text-danger">{{ error.inform }}</span>
            <footer
              class="card-footer mt-5"
              style="border-top: 0px; justify-content: space-around"
            >
              <button
                class="button has-text-weight-bold is-white px-6"
                style="background-color: #da1e28; color: #2f2f2f"
                color="#2F2F2F"
                @click="closeModalReport()"
              >
                ยกเลิก
              </button>
              <button
                class="button has-text-weight-bold is-white px-6"
                style="background-color: #63b224; color: #2f2f2f"
                @click="openModalConfirm(selectedItem)"
              >
                ยืนยัน
              </button>
            </footer>
          </section>
        </div>
      </div>
      <div
        class="modal p-6"
        v-if="showModalConfirm"
        :class="{ 'is-active': showModalConfirm }"
      >
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head" style="background-color: #ffc074">
            <p class="modal-card-title"></p>
            <button
              class="delete"
              aria-label="close"
              style="background-color: transparent"
              @click="showModalConfirm = false"
            ></button>
          </header>
          <section class="modal-card-body is-size-4">
            คุณยืนยันจะส่งเรื่องร้องเรียนปัญหานี้ให้
            <span class="has-text-weight-semibold">{{
              selectedItem.title
            }}</span>
            ใช่หรือไม่
            <footer
              class="card-footer mt-5"
              style="border-top: 0px; justify-content: space-around"
            >
              <button
                class="button has-text-weight-bold is-white px-6"
                style="background-color: #da1e28; color: #2f2f2f"
                color="#2F2F2F"
                @click="showModalConfirm = false"
              >
                ยกเลิก
              </button>
              <button
                class="button has-text-weight-bold is-white px-6"
                style="background-color: #63b224; color: #2f2f2f"
                @click="confirmReport()"
              >
                ยืนยัน
              </button>
            </footer>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      SearchQuery: "",
      carditems: [],
      showModal: false,
      showModalReport: false,
      selectedItem: null,
      previewImage: null,
      file: null,
      heading: "",
      inform: "",
      showModalConfirm: false,
      error: {
        image: "",
        heading: "",
        inform: "",
      },
    };
  },

  created() {
    axios
      .get(`http://${window.location.hostname}:3000/agency`)
      .then((response) => {
        this.carditems = response.data;
        console.log(this.carditems);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  computed: {
    filteredItems() {
      return this.carditems.filter((item) =>
        item.title.toLowerCase().includes(this.SearchQuery.toLowerCase())
      );
    },
  },

  methods: {
    search() {
      console.log("Filtered items:", this.filteredItems);
    },

    openModal(item) {
      console.log(item);
      this.selectedItem = item;
      this.showModal = true;
    },

    openModalReport(item) {
      console.log(item);
      this.selectedItem = item;
      this.showModalReport = true;
    },

    closeModalReport() {
      this.showModalReport = false;
      this.error.heading = "";
      this.error.inform = "";
      this.error.image = "";
      this.file = null;
      this.heading = "";
      this.inform = "";
      this.previewImage = null;
    },

    onFileChange(event) {
      console.log(event);
      this.file = event.target.files[0];
      console.log(this.file);
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };
      if (this.file.type.startsWith("image/")) {
        reader.readAsDataURL(this.file);
      } else {
        alert("กรุณาเลือกไฟล์รูปภาพ");
      }
      event.target.value = "";
    },

    validateHeading() {
      if (this.heading === "") {
        this.error.heading = "กรุณากรอกหัวเรื่อง";
        return;
      }
      this.error.heading = "";
    },

    validateInform() {
      if (this.inform === "") {
        this.error.inform = "กรุณากรอกแจ้งเหตุ";
        return;
      }
      this.error.inform = "";
    },

    openModalConfirm(item) {
      if (!this.file) {
        this.error.image = "กรุณาเลือกไฟล์รูปภาพ";
        return;
      }
      this.error.image = "";
      this.validateHeading();
      this.validateInform();
      console.log(item);
      this.selectedItem = item;
      this.showModalConfirm = true;
    },

    confirmReport() {
      // if (!this.file) {
      //   this.error.image = "กรุณาเลือกไฟล์รูปภาพ";
      //   return;
      // }
      const formData = new FormData();
      formData.append("image", this.file, this.file.name);
      formData.append("heading", this.heading);
      formData.append("inform", this.inform);
      formData.append("agency_id", this.selectedItem.id);
      axios
        .post(`http://${window.location.hostname}:3000/agency`, formData)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      this.showModalConfirm = false;
      this.showModalReport = false;
      alert("ส่งเรื่องร้องเรียนสำเร็จ");
    },
  },
};
</script>
<style scoped>
.card,
.card-image {
  border-radius: 30px;
}

.delete::before,
.delete::after {
  background-color: #da1e28;
}

.delete::before {
  width: 20%;
  height: 20px;
}

.delete::after {
  width: 20px;
  height: 20%;
}
</style>

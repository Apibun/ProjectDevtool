<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div style="background-color: #f9f7f0">
    <div class="columns">
      <!-- Column แสดง project-------->
      <div class="column is-12 pt-6 mr-6 mb-6">
        <h1 class="is-size-2 has-text-centered has-text-weight-bold">โครงการ</h1>
        <div class="column is-half is-offset-one-quarter mb-6">
          <div class="level">
            <input
              class="input"
              type="text"
              placeholder="ค้นหา"
              v-model="projectSearch"
            />
            <button class="button ml-1 has-background-info">ค้นหา</button>
          </div> 
        </div>
        <div class="container">
          <div class="is-multiline columns is-variable is-2">
            <!-- Card element start here-->
            <div
              id="card_product"
              class="column is-one-quarter"
              v-for="(value, index) in ProjectSearch"
              :key="index"
            >
              <div class="box" style="background-color: #fffdde">
                <div class="card-image">
                  <figure class="image is-1by1">
                    <img :src="value.image" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <span id="title" class="title is-5">{{ value.title }}</span>
                      <br /><br />
                      <span
                        id="detail"
                        class="detail is-5"
                        v-if="value.detail.length > 200"
                        >{{ value.detail.substring(0, 197) + "..." }}</span
                      >
                      <span id="detail" class="detail is-5" v-else>{{
                        value.detail
                      }}</span>
                    </div>
                  </div>
                </div>

                <!-- info -->
                <div class="has-text-centered">
                  <button class="button has-text-weight-bold" style="background-color: #BCE29E; border: none;"><router-link to="/view/project" class="has-text-black">Read More.</router-link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  
  <script>
import products from "../views/project.json";
export default {
  data() {
    return {
      role: "customer",
      products: products,
      projectSearch: "",
    };
  },
  methods: {
  },
  created() {
    this.products = JSON.parse(localStorage.getItem("ManagePD"));
  },
  computed: {
    ProjectSearch() {
      return this.products.filter((data) =>
        data.title.toLowerCase().includes(this.projectSearch.toLowerCase())
      );
    },
  },
  watch: {},
};
</script>
  
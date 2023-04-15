<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mt-6 p-3">
    <h1 class="is-size-2 has-text-centered has-text-weight-bold">ผลิตภัณฑ์</h1>
    <div v-for="product in products" :key="product.id">
      <section class="card mt-5" id="app">
        <div class="card has-background-light">
          <div class="card-image p-4">
            <div class="columns">
              <figure class="image p-2">
                <img
                  :src="product.product_image"
                  alt="Placeholder image"
                  style="
                    min-width: 200px;
                    min-height: 200px;
                    max-width: 350px;
                    max-height: 300px;
                  "
                />
              </figure>

              <div class="hero-body">
                <p class="title is-size-4">{{ product.product_title }}</p>
                <p class="content">
                  {{ product.product_detail.substring(0, 120) + "..." }}
                </p>
                <div class="">
                  <p class="has-text-danger is-size-5">{{ product.product_price }} ฿</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      role: "customer",
      products: "",
      projectSearch: "",
    };
  },
  methods: {},
  created() {
    axios
      .get(`http://${window.location.hostname}:3000/products`)
      .then((response) => {
        this.products = response.data;
        console.log(this.products);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    // ProjectSearch() {
    //   return this.products.filter((data) =>
    //     data.title.toLowerCase().includes(this.projectSearch.toLowerCase())
    //   );
    // },
  },
  watch: {},
};
</script>

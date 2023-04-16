<template>
  <div class="container is-widescreen">
    <div>
      <section class="hero">
        <div class="hero-body">
          <p class="title">{{ newss.new_title }}</p>
          <p class="content">{{ newss.new_date }}</p>
        </div>
      </section>
      <section class="section" id="app">
        <div class="content">
          <div class="card has-background-light">
            <div class="card-image pt-5">
              <div class="columns">
                <div class="column">
                  <figure class="image is-16by9">
                    <img :src="newss.new_image" alt="Placeholder image" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="card-content">
              <div class="content">{{ newss.new_fulldetail }}</div>
            </div>
            <button
              class="button ml-6 mb-5"
              style="background-color: #ff9494; border: none"
            >
              <router-link class="has-text-black" to="/news">To Back</router-link>
            </button>
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
      newss: "",
    };
  },
  methods: {},
  created() {
    axios
      .get(
        `http://${window.location.hostname}:3000/news/` + this.$route.params.id
      )
      .then((response) => {
        console.log(response);
        this.newss = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped></style>

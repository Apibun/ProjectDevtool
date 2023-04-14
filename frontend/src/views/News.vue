<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container p-3 mt-6">
        <h1 class="is-size-2 has-text-centered has-text-weight-bold">ข่าวสาร</h1>
      <div v-for="news in newss" :key="news.id">
        <section class="card mt-5" id="app">
          <div class="card has-background-light">
            <div class="card-image p-4">
              <div class="columns">
                <figure class="image p-2">
                  <img
                    :src="news.new_image"
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
                  <p class="title is-size-4">{{ news.new_title }}</p>
                  <p class="content" v-if="news.new_detail.length > 120">
                   {{  news.new_detail.substring(0, 110) + "..." }}
                  </p>
                  <p class="content" v-else>{{
                      news.new_detail
                    }}</p>
                  <div class="">
                    <button
                      class="button has-text-weight-bold"
                      style="background-color: #bce29e; border: none"
                    >
                      <router-link :to="/news/+ news.id" class="has-text-black"
                        >Read More.</router-link
                      >
                    </button>
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
        newss: "",
        projectSearch: "",
      };
    },
    methods: {},
    created() {
    axios
      .get("http://localhost:3000/news")
      .then((response) => {
        this.newss = response.data;
        console.log(this.newss);
      })
      .catch((err) => {
        console.log(err);
      });
  },
    watch: {},
  };
  </script>
  
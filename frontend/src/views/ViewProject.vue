<template>
  <div style="background-color: #f9f7f0">
    <div class="container is-widescreen">
      <div>
        <section class="hero">
          <div class="hero-body">
            <p class="title">{{ projects.project_title }}</p>
          </div>
        </section>
        <section class="section" id="app">
          <div class="content">
            <div class="card has-background-light">
              <div class="card-image pt-5">
                <div class="columns">
                  <div class="column">
                    <figure class="image is-16by9">
                      <img
                        :src="projects.project_image"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div class="card-content">
                <div class="content">{{ projects.project_fulldetail }}</div>
              </div>
              <button
                class="button ml-6 mb-5"
                style="background-color: #ff9494; border: none"
              >
                <router-link class="has-text-black" to="/project">To Back</router-link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      projects: "",
    };
  },
  created() {
    axios
      .get(
        `http://${window.location.hostname}:3000/project/` +
          this.$route.params.id
      )
      .then((response) => {
        console.log(response);
        this.projects = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped></style>

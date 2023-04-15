<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="column is-12 pt-6 mr-6 ">
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

    <div class="columns is-multiline mt-4" style="margin: 0 5%">
      <template v-if="projectSearch === ''">
        <div
          class="column is-3"
          v-for="project in projects"
          :key="project.id"
        >
          <div class="box" style="background-color: #fffdde">
            <div class="card-image">
              <figure class="image is-1by1">
                <img :src="project.project_image" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <span id="title" class="title is-5">{{
                    project.project_title
                  }}</span>
                  <br /><br />
                  <span
                    id="detail"
                    class="detail is-5"
                    v-if="project.project_detail.length > 200"
                    >{{
                      project.project_detail.substring(0, 197) + "..."
                    }}</span
                  >
                  <span id="detail" class="detail is-5" v-else>{{
                    project.project_detail
                  }}</span>
                </div>
              </div>
            </div>

            <!-- info -->
            <div class="has-text-centered">
              <button
                class="button has-text-weight-bold"
                style="background-color: #bce29e; border: none"
              >
                <router-link
                  :to="/project/ + project.id"
                  class="has-text-black"
                  >Read More.</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          class="column is-3"
          v-for="project in ProjectSearch2"
          :key="project.id"
        >
          <div class="box" style="background-color: #fffdde">
            <div class="card-image">
              <figure class="image is-1by1">
                <img :src="project.project_image" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <span id="title" class="title is-5">{{
                    project.project_title
                  }}</span>
                  <br /><br />
                  <span
                    id="detail"
                    class="detail is-5"
                    v-if="project.project_detail.length > 200"
                    >{{
                      project.project_detail.substring(0, 197) + "..."
                    }}</span
                  >
                  <span id="detail" class="detail is-5" v-else>{{
                    project.project_detail
                  }}</span>
                </div>
              </div>
            </div>

            <!-- info -->
            <div class="has-text-centered">
              <button
                class="button has-text-weight-bold"
                style="background-color: #bce29e; border: none"
              >
                <router-link
                  :to="/project/ + project.id"
                  class="has-text-black"
                  >Read More.</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
data() {
  return {
    role: "customer",
    projects: "",
    projectSearch: "",
  };
},
created() {
  axios
    .get(`http://${window.location.hostname}:3000/project`)
    .then((response) => {
      this.projects = response.data;
      //console.log(this.projects);
    })
    .catch((err) => {
      console.log(err);
    });
},
computed: {
  ProjectSearch2() {
    //console.log(this.projects);
    return this.projects.filter((data2) =>
      data2.project_title
        .toLowerCase()
        .includes(this.projectSearch.toLowerCase())
    );
  },
},
watch: {},
};
</script>

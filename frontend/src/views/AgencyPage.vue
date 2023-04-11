<template>
  <div>
    <div class="field has-addons has-addons-centered mt-5">
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="SearchQuery"
          placeholder="ค้นหา"
        />
      </div>
      <div class="control">
        <button class="button is-info" @click="search">
          <span>Search</span>
        </button>
      </div>
    </div>
    <div class="columns is-multiline mt-4" style="margin: 0 5%">
      <template v-if="SearchQuery === ''">
        <div class="column is-3" v-for="item in carditems" :key="item.id">
          <div class="card" style="background-color: #fffdde">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="item.image"
                  alt="Placeholder image"
                  style="
                    min-width: 200px;
                    min-height: 200px;
                    max-width: 400px;
                    max-height: 300px;
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
              <div class="content">
                {{ item.detail }}
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
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="item.image"
                  alt="Placeholder image"
                  style="
                    min-width: 200px;
                    min-height: 200px;
                    max-width: 400px;
                    max-height: 300px;
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
              <div class="content">
                {{ item.detail }}
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
                {{ selectedItem.fulldetail }}
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
              @click="showModalReport = false"
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
              <div class="preview">
                <img
                  :src="previewImage"
                  v-if="previewImage"
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
              </label>
            </div>
            <p class="title is-size-5 mb-2">หัวเรื่อง :</p>
            <input
              class="input"
              type="text"
              placeholder="Text input"
              style="border-radius: 15px"
            />
            <p class="title is-size-5 mb-2 mt-4">แจ้งเหตุ :</p>
            <textarea
              class="textarea"
              placeholder="e.g. Hello world"
              style="border-radius: 15px"
            ></textarea>
            <footer
              class="card-footer mt-5"
              style="border-top: 0px; justify-content: space-around"
            >
              <button
                class="button has-text-weight-bold is-white px-6"
                style="background-color: #da1e28; color: #2f2f2f"
                color="#2F2F2F"
                @click="showModalReport = false"
              >
                ยกเลิก
              </button>
              <button
                class="button has-text-weight-bold is-white px-6"
                style="background-color: #63b224; color: #2f2f2f"
                @click="confirmReport(selectedItem)"
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
export default {
  data() {
    return {
      SearchQuery: "",
      carditems: [
        {
          id: 1,
          image: "https://picsum.photos/200/231",
          title: "Tell us about the project.",
          detail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices.",
          fulldetail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices. Velit laoreet id donec ultrices tincidunt arcu. Mattis nunc sed blandit libero. Sodales neque sodales ut etiam sit. Vitae aliquet nec ullamcorper sit. Quisque id diam vel quam elementum pulvinar etiam. Ipsum consequat nisl vel pretium lectus quam id leo in. Placerat orci nulla pellentesque dignissim enim sit. Id interdum velit laoreet id donec. Consectetur purus ut faucibus pulvinar elementum integer. Amet risus nullam eget felis eget nunc. Nec sagittis aliquam malesuada bibendum.",
          contact:
            "Mr, Berger, Cowgill, 819 Tawny Barn Corner, Umkumiut, Arizona, 86803-8822, US, (520) 932-2124",
        },
        {
          id: 2,
          image: "https://picsum.photos/200/941",
          title: "Vacant Alien.",
          detail:
            "Mauris augue neque gravida in fermentum. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.",
          fulldetail:
            "Mauris augue neque gravida in fermentum. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Lacus sed turpis tincidunt id aliquet risus. Et sollicitudin ac orci phasellus egestas tellus. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Penatibus et magnis dis parturient montes nascetur. Turpis nunc eget lorem dolor sed. Laoreet id donec ultrices tincidunt. Sociis natoque penatibus et magnis dis. Orci eu lobortis elementum nibh tellus. Commodo viverra maecenas accumsan lacus vel facilisis. Ut faucibus pulvinar elementum integer. At risus viverra adipiscing at in. Nec ultrices dui sapien eget mi proin sed libero enim. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Felis eget nunc lobortis mattis aliquam faucibus purus.",
          contact:
            "Ms, Ember, Moreira, 5121 Noble Heath, Bully Hill, Arizona, 85339-5978, US, (520) 460-4537",
        },
        {
          id: 3,
          image: "https://picsum.photos/200/669",
          title: "The Bare Flame.",
          detail:
            "Donec enim diam vulputate ut pharetra. Et netus et malesuada fames ac turpis egestas.",
          fulldetail:
            "Donec enim diam vulputate ut pharetra. Et netus et malesuada fames ac turpis egestas. Nunc aliquet bibendum enim facilisis. Mollis aliquam ut porttitor leo a diam. Neque egestas congue quisque egestas diam in. Morbi leo urna molestie at elementum eu facilisis. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Laoreet sit amet cursus sit amet dictum sit amet justo. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus. In nibh mauris cursus mattis molestie. Purus ut faucibus pulvinar elementum integer.",
          contact:
            "Mr, Doran, Lindahl, 7007 Easy Leaf Manor, Mike Horse, Newfoundland, A2C-2H6, CA, (709) 679-8351",
        },
        {
          id: 4,
          image: "https://picsum.photos/200/769",
          title: "Man of Dreaming.",
          detail:
            "Id diam vel quam elementum pulvinar etiam non quam lacus. Quis varius quam quisque id diam vel quam elementum.",
          fulldetail:
            "Id diam vel quam elementum pulvinar etiam non quam lacus. Quis varius quam quisque id diam vel quam elementum. Enim ut sem viverra aliquet eget sit amet tellus cras. Morbi leo urna molestie at elementum eu facilisis. Eget lorem dolor sed viverra. Eget nunc scelerisque viverra mauris in aliquam sem. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. At augue eget arcu dictum varius duis at consectetur. Sed velit dignissim sodales ut eu sem integer vitae. Lobortis mattis aliquam faucibus purus. Nec ultrices dui sapien eget mi proin. Phasellus faucibus scelerisque eleifend donec. Bibendum at varius vel pharetra vel turpis.",
          contact:
            "Ms, Hester, Fogarty, 42 Pleasant Cape, Muddy, Arizona, 85178-0295, US, (623) 471-6338",
        },
        {
          id: 5,
          image: "https://picsum.photos/200/7",
          title: "The Lover's Words.",
          detail:
            "Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor.",
          fulldetail:
            "Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Id neque aliquam vestibulum morbi blandit cursus. Rutrum tellus pellentesque eu tincidunt tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Cras sed felis eget velit aliquet sagittis. Magna ac placerat vestibulum lectus mauris. Sit amet cursus sit amet dictum sit. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Eget est lorem ipsum dolor.",
          contact:
            "Ms, Rohini, Omar, 8585 Iron Extension, Whiskey Bend, Newfoundland, A1K-6P3, CA, (709) 402-9737",
        },
        {
          id: 6,
          image: "https://picsum.photos/200/835",
          title: "The Husband of the Predator.",
          detail:
            "Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Volutpat consequat mauris nunc congue nisi vitae suscipit. Elit ut aliquam purus sit amet luctus venenatis.",
          fulldetail:
            "Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Volutpat consequat mauris nunc congue nisi vitae suscipit. Elit ut aliquam purus sit amet luctus venenatis. Id neque aliquam vestibulum morbi blandit cursus. Iaculis eu non diam phasellus vestibulum. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Integer eget aliquet nibh praesent tristique magna sit amet. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Duis tristique sollicitudin nibh sit amet commodo nulla. Aliquet nec ullamcorper sit amet risus nullam eget. Etiam sit amet nisl purus. Amet mattis vulputate enim nulla. Sem integer vitae justo eget magna. Lectus nulla at volutpat diam ut venenatis.",
          contact:
            "Ms, Rinako, Fogarty, 5811 Umber Impasse, Peoples, Arizona, 85412-5134, US, (623) 941-2719",
        },
      ],
      showModal: false,
      showModalReport: false,
      selectedItem: null,
      previewImage: null,
    };
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
    onFileChange(event) {
      console.log(event);
      const file = event.target.files[0];
      console.log(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };
      if (file.type.startsWith("image/")) {
        reader.readAsDataURL(file);
      } else {
        alert("Please choose an image file.");
      }
    },
    confirmReport(item) {
      console.log(item);
      this.showModalReport = false;
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

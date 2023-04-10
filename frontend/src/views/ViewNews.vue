<template>
    <div class="container is-widescreen" >
        <div v-for="blog in carditems" :key="blog.id">

        
      <section class="hero" v-if="blog.id === 1">
        <div class="hero-body">
          <p class="title">{{ blog.title }} ></p>
        </div>
      </section>
      <section class="section" id="app" v-if="blog.id === 1">
        <div class="content">
          <div class="card has-background-light">
            <div class="card-image pt-5">
              <div class="columns">
                <div class="column">
                  <figure class="image is-16by9" >
                    <img
                      :src="blog.image"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div class="card-content">
              <div class="content">{{ blog.detail }}></div>
            </div>
            <button class="button ml-6 mb-5" style="background-color: #FF9494; border: none;">
              <a class="has-text-black" href="/">To Home Page</a>
            </button>
          </div>
        </div>
      </section>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blog: "",
        images: "",
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
          showModal: false,
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
          showModal: false,
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
          showModal: false,
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
          showModal: false,
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
          showModal: false,
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
          showModal: false,
        },
      ]
      };
      
    },
    methods: {
    },
  };
  </script>
  
  <style scoped></style>
  
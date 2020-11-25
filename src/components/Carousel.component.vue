<script lang="ts">
import { defineComponent } from "vue";

interface Items {
  item: Array<Item>;
}

interface Item {
  id: number;
  url: string;
  alt: string;
}

export default defineComponent({
  name: "Header",
  el: "#holo-slider",
  //components: {},
  props: {
    title: {
      type: String,
      default: "Title",
      required: false,
    },
    activeItem: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  data() {
    return {
      currentItem: this.activeItem,
      lastItem: this.activeItem,
      nextItem: this.activeItem,
      items: [
        {
          id: 0,
          src:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg",
          alt: "Yosemite",
        },
        {
          id: 1,
          src:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/anastasia-dulgier-NCFTGtjY3EQ-unsplash.jpg",
          alt: "Houses",
        },
        {
          id: 2,
          src:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/arnaud-mariat-IPXcUYHeErc-unsplash.jpg",
          alt: "Galaxies",
        },
      ],
    };
  },
  // computed: {},
  // watch: {},
  methods: {
    increaseNumber(number: number) {
      this.currentItem++;
      this.lastItem++;
      this.nextItem++;
    },
    decreaseNumber() {
      if (this.currentItem > 0) {
        this.currentItem--;
        this.lastItem--;
        this.nextItem--;
      }
      console.log("currentItem: ", this.currentItem);
    },
  },
  // mounted() {},
});
</script>

<template>
  <div class="holo-slider">
    <nav class="lil-nav">
      <a v-bind:href="'#image-' + lastItem" v-on:click.prevent="decreaseNumber">
        &lsaquo;
      </a>
      <a v-bind:href="'#image-' + nextItem" v-on:click.prevent="increaseNumber">
        &rsaquo;
      </a>
    </nav>

    <div class="gallery">
      <div class="card" v-for="(item, index) in items" :key="item.id">
        <img
          class="gallery__img"
          v-bind:id="'image-' + index"
          v-bind:src="item.src"
          v-bind:alt="item.alt"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  display: block;
  max-width: 100%;
}

.holo-slider {
  position: relative;
  background: #000;
}

.gallery {
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: both mandatory;
  scroll-behavior: smooth;
  display: flex;
}

.card {
  margin: 0;
  padding: 0;
  height: 10rem;
}

.gallery__img {
  scroll-snap-align: start;
  min-width: 100vw;
  -o-object-fit: cover;
  object-fit: cover;
}

.lil-nav {
  position: absolute;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 0;
}

.lil-nav a {
  background: rgb(0, 0, 0, 0.8);
  width: 2rem;
  height: 10rem;
  font-size: 6rem;
  color: #fff;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
}

.lil-nav__img {
  transition: 0.3s ease all;
}

/* @media screen and (min-width: 1200px) {
  .wrapper {
    grid-template-columns: 1fr 5fr;
    grid-template-rows: auto;
  }

  .gallery {
    display: block;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
  }

  .gallery__img {
    min-width: auto;
    min-height: 100vh;
  }

  .lil-nav {
    overflow-y: scroll;
    overflow-x: hidden;
    display: block;
    grid-row-start: auto;
  }

  .lil-nav a {
    margin-bottom: 10px;
    min-height: 200px;
    min-width: 100%;
  }
} */
</style>

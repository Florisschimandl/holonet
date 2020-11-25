<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  //components: {},
  props: {
    title: {
      type: String,
      default: "Title",
      required: false,
    },
    uniqueId: {
      type: String,
      required: true,
    },
    shows: {
      type: Array,
      default: [],
      required: true,
    },
  },
  data() {
    return {
      currentItem: 0,
      previousItem: -1,
      nextItem: 1,
    };
  },
  // computed: {},
  // watch: {},
  methods: {
    scrolLeft() {
      const carousel = document.querySelector("#" + this.uniqueId);
      carousel.scrollLeft += 300;
    },
    scrolRight() {
      const carousel = document.querySelector("#" + this.uniqueId);
      carousel.scrollLeft -= 300;
    },
  },
  //  mounted() { },
});
</script>

<template>
  <div class="holo-slider">
    <nav>
      <button v-on:click="scrolRight">&lsaquo;</button>
      <button v-on:click="scrolLeft">&rsaquo;</button>
    </nav>

    <div v-bind:id="uniqueId" class="carousel">
      <div class="card" v-for="(show, index) in shows" :key="index">
        <img
          v-bind:id="'image-' + Object(shows[index]).id"
          v-bind:src="Object(Object(shows[index]).image).medium"
          v-bind:alt="Object(shows[index]).name"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.holo-slider {
  position: relative;
}

.carousel {
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  display: flex;
  scrollbar-width: thin;
  scrollbar-color: #000 transparent;
}

/* firefox */
.container {
  scrollbar-width: thin;
  scrollbar-color: grey transparent;
}
.container:-webkit-scrollbar {
  width: 130px;
}
.container:-webkit-scrollbar-track {
  background: transparent;
}
.container:-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 6px;
  border: 3px solid transparent;
  width: 100px;
}

.carousel::-webkit-scrollbar,
.carousel::-webkit-scrollbar-thumb {
  width: 100px;
  height: 30px;
  border-radius: 13px;
  background-clip: padding-box;
  border: 10px solid transparent;
}

.carousel::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0 10px;
}

.card {
  margin: 0 0 0 0.5rem;
  padding: 0;
  position: relative;
  border: 1px solid grey;
}

.card h2 {
  position: absolute;
  bottom: 0;
  padding: 0 2.5rem 0.5rem 2.5rem;
  z-index: 0;
  background: rgb(0, 0, 0, 0.8);
  text-align: center;
  font-size: 18px;
}

img {
  opacity: 0.5;
  height: 100%;
}
img.selected {
  opacity: 1;
}
img:hover,
img:focus {
  opacity: 1;
}

nav {
  position: absolute;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 0;
  z-index: 1;
  top: 25%;
}

nav button {
  background: rgb(0, 0, 0, 0.8);
  width: 2rem;
  height: 10rem;
  font-size: 6rem;
  color: #fff;
  border-radius: 0;
  padding: 0;
  margin: 0 -1rem 0 -1rem;
  border: 0;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Carousel",
  //components: {},
  emits: ["showSelected"],
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
    showDetails(id: number) {
      this.$emit("showSelected", id);
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
        <div class="overlay">
          <h3>{{ Object(shows[index]).name }}</h3>
          <p>Rating: {{ Object(Object(shows[index]).rating.average) }}</p>
          <button v-on:click="showDetails(Object(shows[index]).id)">
            Details &#8594;
          </button>
        </div>
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
  position: relative;
}

.card .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  padding: 2rem 0 2rem 0;
  display: none;
  z-index: 0;
  text-align: center;
}

.card .overlay h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
}
.card .overlay p {
  margin: 0 0 0.5rem;
}

.card:hover .overlay,
.card:focus .overlay {
  display: block;
}

.card .overlay button {
  margin: 0;
  font-size: 1rem;
  padding: 0 1.5rem 0.2rem;
  background: rgb(3, 53, 53);
  border: 1px solid rgb(38, 104, 104);
}
.card .overlay button:hover,
.card .overlay button:focus {
  background: rgb(5, 78, 78);
}

img {
  opacity: 0.5;
}

.card:hover img,
.card:focus img {
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

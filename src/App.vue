<script lang="ts">
import { defineComponent } from "vue";
import "./App.css";

// Modules
import Header from "./components/Header.component.vue";
import Section from "./components/Section.component.vue";
import Carousel from "./components/Carousel.component.vue";

// interface User {
//   name: string;
//   lastName: string;
//   amount: number;
// }

export default defineComponent({
  name: "App",
  components: {
    Header,
    Section,
    Carousel,
  },
  props: {},
  data() {
    return {
      title: "Holonet",
      allScifi: [],
      actionScifi: [],
      dramaScifi: [],
      comedyScifi: [],
    };
  },
  methods: {
    loadShows() {
      fetch("https://api.tvmaze.com/shows?genre=Science-Fiction") //genre selection doesnt work
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((shows) => {
          const allShows: Array<any> = [];

          shows.forEach((show: object) => {
            allShows.push(show);
          });

          this.allScifi = allShows.filter((show) =>
            show.genres.includes("Science-Fiction")
          );

          this.actionScifi = this.allScifi.filter((show) =>
            show.genres.includes("Action")
          );

          this.dramaScifi = this.allScifi.filter((show) =>
            show.genres.includes("Drama")
          );

          this.comedyScifi = this.allScifi.filter((show) =>
            show.genres.includes("Comedy")
          );
        });
    },
  },
  mounted() {
    this.loadShows();
  },
});
</script>

<template>
  <Header :title="title" />

  <Section>
    <template v-slot:header>
      <h1>SCIFI: All</h1>
    </template>
    <Carousel :shows="allScifi" unique-id="carousel-all" />
  </Section>

  <Section>
    <template v-slot:header>
      <h1>SCIFI: Action</h1>
    </template>
    <Carousel :shows="actionScifi" unique-id="carousel-action" />
  </Section>

  <Section>
    <template v-slot:header>
      <h1>SCIFI: Drama</h1>
    </template>
    <Carousel :shows="dramaScifi" unique-id="carousel-drama" />
  </Section>

  <Section>
    <template v-slot:header>
      <h1>SCIFI: Comedy</h1>
    </template>
    <Carousel :shows="comedyScifi" unique-id="carousel-comedy" />
  </Section>

  <!-- <Section>
    <template v-slot:header>
      <h1>SCIFI: Drama</h1>
    </template>
    <Carousel />
  </Section> -->

  <!-- Basics -->
  <!--<section>
    {{ bananas }} Banana <button @click="countBananas">Button</button>
    <p>Wij imkeren met {{ fullName }}</p>
  </section>-->

  <!-- For each -->
  <!--<section v-for="battler in battlers" :key="battler.id">
    <ul>
      <li>{{ battler.name }}</li>
    </ul>
  </section>-->

  <!-- Component -->
  <!-- <UserProfile /> -->
</template>

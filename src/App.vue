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
    };
  },
  computed: {},
  // watch: {},
  // methods: {},
  // mounted() {},
});
</script>

<template>
  <Header :title="title" />

  <Section>
    <template v-slot:header>
      <h1>SCIFI: Action</h1>
    </template>
    <Carousel />
  </Section>

  <Section>
    <template v-slot:header>
      <h1>SCIFI: Action</h1>
    </template>
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

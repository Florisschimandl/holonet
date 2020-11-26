<script lang="ts">
import { defineComponent } from "vue";
import "./App.css";

// Modules
import Header from "./components/Header.component.vue";
import Section from "./components/Section.component.vue";
import Carousel from "./components/Carousel.component.vue";
import Modal from "./components/Modal.component.vue";

interface SelectedShow {
  image: string;
  name: string;
  rating: string;
  genres: string;
  summary: string;
  status: string;
  premiered: string;
  language: string;
}

export default defineComponent({
  name: "App",
  components: {
    Header,
    Section,
    Carousel,
    Modal,
  },
  props: {},
  data() {
    return {
      title: "Holonet",
      allScifi: [],
      sortedAllScifi: [],
      actionScifi: [],
      dramaScifi: [],
      comedyScifi: [],
      selectedShow: [],
      showModal: false,
    };
  },
  methods: {
    loadShows() {
      // Initial genre selection is not provide by TVmaze
      // API call returns the first page from 'all shows'
      // There currently are 208 pages each with 0-250 shows
      // For the purpose of this demo only the first page is used
      fetch("https://api.tvmaze.com/shows")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((shows) => {
          // Filter on Scifi shows only
          this.allScifi = this.filterGenre(shows, "Science-Fiction");

          // Sort the shows by rating - highest > lowest
          this.sortedAllScifi = this.sortByRating(this.allScifi);

          // Filter on different genres
          this.actionScifi = this.filterGenre(this.sortedAllScifi, "Action");
          this.dramaScifi = this.filterGenre(this.sortedAllScifi, "Drama");
          this.comedyScifi = this.filterGenre(this.sortedAllScifi, "Comedy");
        });
    },
    // Filter on genre
    filterGenre(shows: Array<any>, genre: string) {
      return shows.filter((show) => show.genres.includes(genre));
    },
    // Sort shows by rating
    // type: ascending | descending
    sortByRating(shows: Array<any>, type: string = "descending") {
      const sortedShows = shows.sort((a, b) => {
        if (type === "descending") {
          return parseFloat(b.rating.average) - parseFloat(a.rating.average);
        }
        if (type === "ascending") {
          return parseFloat(a.rating.average) - parseFloat(b.rating.average);
        }
      });

      return sortedShows;
    },
    toggleModal() {
      this.showModal = !this.showModal;
      if (this.showModal) {
        //add class to prevent scrolling
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    },
    showSelectedShow(id: number) {
      const selectedShowData = this.allScifi.filter((show) => show.id === id);

      console.log(selectedShowData);

      this.selectedShow = {
        image: selectedShowData[0].image.medium,
        name: selectedShowData[0].name,
        rating: selectedShowData[0].rating.average,
        genres: selectedShowData[0].genres,
        summary: selectedShowData[0].summary,
        status: selectedShowData[0].status,
        premiered: selectedShowData[0].premiered,
        language: selectedShowData[0].language,
      };

      this.toggleModal();
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
      <h1>SCIFI: All ({{ allScifi.length }})</h1>
    </template>
    <Carousel
      :shows="allScifi"
      unique-id="carousel-all"
      @show-selected="showSelectedShow($event)"
    />
  </Section>

  <Section>
    <template v-slot:header>
      <h1>SCIFI: Action ({{ actionScifi.length }})</h1>
    </template>
    <Carousel :shows="actionScifi" unique-id="carousel-action" />
  </Section>

  <Section>
    <template v-slot:header>
      <h1>SCIFI: Drama ({{ dramaScifi.length }})</h1>
    </template>
    <Carousel :shows="dramaScifi" unique-id="carousel-drama" />
  </Section>

  <Section>
    <template v-slot:header>
      <h1>SCIFI: Comedy ({{ comedyScifi.length }})</h1>
    </template>
    <Carousel :shows="comedyScifi" unique-id="carousel-comedy" />
  </Section>

  <Modal v-if="showModal" @close-modal="toggleModal">
    <template v-slot:header>
      {{ selectedShow.name }}
    </template>

    <img v-bind:src="selectedShow.image" v-bind:alt="selectedShow.alt" />

    <h2>Details</h2>
    <ul>
      <li>Rating: {{ selectedShow.rating }}</li>
      <li>Genres: {{ selectedShow.genres }}</li>
      <li>Premiered: {{ selectedShow.premiered }}</li>
      <li>Status: {{ selectedShow.status }}</li>
    </ul>
    <span v-html="selectedShow.summary"></span>

    <template v-slot:footer>
      <button v-on:click="toggleModal">Close</button>
    </template>
  </Modal>
</template>

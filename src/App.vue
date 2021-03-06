<script lang="ts">
import { defineComponent } from "vue";
import "./App.css";

// Modules
import Header from "./components/Header.component.vue";
import Section from "./components/Section.component.vue";
import Carousel from "./components/Carousel.component.vue";
import Modal from "./components/Modal.component.vue";

// Types
import SelectedShow from "./types/selectedShow.type.js";
import TvShow from "./types/tvShow.type.js";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Section,
    Carousel,
    Modal
  },
  props: {},
  data() {
    return {
      title: "Holonet",
      allScifi: [] as TvShow[],
      sortedAllScifi: [] as TvShow[],
      actionScifi: [] as TvShow[],
      dramaScifi: [] as TvShow[],
      comedyScifi: [] as TvShow[],
      selectedShow: {} as SelectedShow,
      showModal: false
    };
  },
  methods: {
    loadShows() {
      // Initial genre selection is not provide by TVmaze
      // API call returns the first page from 'all shows'
      // There currently are 208 pages each with 0-250 shows
      // For the purpose of this demo only the first page is used
      fetch("https://api.tvmaze.com/shows")
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then(shows => {
          // Filter on Scifi shows only
          this.allScifi = this.filterGenre(shows, "Science-Fiction");

          // Sort the shows by rating - highest > lowest
          this.sortedAllScifi = this.sortByRating(this.allScifi);

          // Filter on different genres
          this.actionScifi = this.filterGenre(this.sortedAllScifi, "Action");
          this.dramaScifi = this.filterGenre(this.sortedAllScifi, "Drama");
          this.comedyScifi = this.filterGenre(this.sortedAllScifi, "Comedy");
        })
        .catch(error => {
          console.log(error);
        });
    },
    // Filter on genre
    filterGenre(shows: Array<TvShow>, genre: string) {
      return shows.filter(show => show.genres.includes(genre));
    },
    // Sort shows by rating
    // type: ascending | descending
    sortByRating(shows: Array<TvShow>, type = "descending") {
      const sortedShows = shows.sort((a, b) => {
        if (type === "ascending") {
          return parseInt("" + a.rating.average) - parseInt("" + b.rating.average);
        } else {
          return parseFloat("" + b.rating.average) - parseFloat("" + a.rating.average);
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
      let selectedShowData: Array<TvShow> = [];
      selectedShowData = this.allScifi.filter(show => show.id === id);

      this.selectedShow = selectedShowData[0];

      this.toggleModal();
    }
  },
  mounted() {
    this.loadShows();
  }
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
    <Carousel
      :shows="actionScifi"
      unique-id="carousel-action"
      @show-selected="showSelectedShow($event)"
    />
  </Section>

  <Section>
    <template v-slot:header>
      <h1>SCIFI: Drama ({{ dramaScifi.length }})</h1>
    </template>
    <Carousel
      :shows="dramaScifi"
      unique-id="carousel-drama"
      @show-selected="showSelectedShow($event)"
    />
  </Section>

  <Section>
    <template v-slot:header>
      <h1>SCIFI: Comedy ({{ comedyScifi.length }})</h1>
    </template>
    <Carousel
      :shows="comedyScifi"
      unique-id="carousel-comedy"
      @show-selected="showSelectedShow($event)"
    />
  </Section>

  <Modal v-if="showModal" @close-modal="toggleModal">
    <template v-slot:header>
      {{ selectedShow.name }}
    </template>

    <div class="show">
      <img
        v-bind:src="selectedShow.image.medium"
        v-bind:alt="selectedShow.alt"
      />

      <div class="details">
        <h3>Details</h3>
        <ul>
          <li>Rating: {{ selectedShow.rating.average }}</li>
          <li>
            Genres:
            <span
              class="card"
              v-for="(genre, index) in selectedShow.genres"
              :key="index"
            >
              {{ genre }}
              <span v-if="index < Object.keys(selectedShow.genres).length - 1"
                >,</span
              >
            </span>
          </li>
          <li>Premiered: {{ selectedShow.premiered }}</li>
          <li>Status: {{ selectedShow.status }}</li>
        </ul>
      </div>
    </div>
    <div class="summary">
      <h3>Description</h3>
      <span v-html="selectedShow.summary" />
    </div>

    <template v-slot:footer>
      <button v-on:click="toggleModal">Close</button>
    </template>
  </Modal>
</template>

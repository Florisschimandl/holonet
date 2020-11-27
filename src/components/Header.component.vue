<script lang="ts">
import { defineComponent } from "vue";
import Search from "./Search.component.vue";

export default defineComponent({
  name: "Header",
  components: {
    Search
  },
  props: {
    title: {
      type: String,
      default: "Title",
      required: false
    }
  }
});
</script>

<template>
  <header>
    <div class="logo">&#129302;</div>
    <h1>{{ title }}</h1>
    <Search />
  </header>
</template>

<style scoped>
header {
  position: fixed;
  height: 3rem;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 1rem 0 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  background: #0b5267;
  box-sizing: border-box;
  z-index: 1;
  border-bottom: 1px solid #31d2f7;
}

.logo {
  font-size: 1.8rem;
}

img {
  height: 30px;
  vertical-align: middle;
}

h1 {
  color: #fff;
  text-transform: uppercase;
  font-size: 1.3em;
  font-weight: 400;
  margin: 0;
}

h3 {
  color: #fff;
  font-weight: 400;
  font-size: 0.8rem;
}

@media only screen and (max-width: 500px) {
  header {
    justify-content: left;
    box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
  }

  h1 {
    margin: 0 0 0 1rem;
  }
}
</style>

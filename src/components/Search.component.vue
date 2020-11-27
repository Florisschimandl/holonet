<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Search"
});
</script>

<template>
  <div id="search" class="searchbar">
    <input type="text" placeholder="Search: Egg... for Eggsample" />
    <button>&#127859;</button>
  </div>
</template>

<style scoped>
input {
  height: 2.4rem;
  border-radius: 1rem 0 0 1rem;
  margin: auto;
  border: none;
  padding: 0 0 0 0.8rem;
  color: #fff;
  background: #2f2f2f;
  width: 6.8rem;
  -webkit-transition: width 0.35s ease-in-out;
  transition: width 0.35s ease-in-out;
}
input:focus {
  width: 250px;
}

button {
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 0;
  height: 2.4rem;
  border: none;
}

@media only screen and (max-width: 500px) {
  .searchbar {
    position: absolute;
    left: 0;
    right: 0;
    top: 3rem;
    border-bottom: 0.1rem solid #31d2f7;
    padding: 0;
    display: flex;
    box-sizing: border-box;
    margin: 0;
  }
  input,
  input:focus {
    transition: none;
    width: auto;
    flex-grow: 2;
    border-radius: 0;
  }
  button {
    border-radius: 0;
  }
}
</style>

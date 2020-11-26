<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Section",
  props: {
    header: {
      type: Boolean,
      default: true,
      required: false,
    },
    footer: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  // data() {},
  // computed: {},
  // watch: {},
  // methods: {},
  // mounted() {},
});
</script>

<template>
  <section>
    <header v-if="header">
      <slot name="header" />
    </header>

    <div class="content">
      <slot />
    </div>

    <footer v-if="footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<style>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 1rem;
  background: rgb(84, 126, 121);
  background: linear-gradient(
    107deg,
    rgba(84, 126, 121, 1) 0%,
    rgba(55, 70, 68, 1) 70%
  );
  padding: 20px;
}

h1 {
  margin: 0;
}

section header {
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: 0 0 0.5rem;
}

section footer {
  display: flex;
  justify-content: flex-end;
}

/* @media (min-width: 551px) {
  section {
    border-radius: 15px;
  }
} */
</style>

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
    classStyle: {
      type: String,
      default: "",
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
  <section class="{classStyle}">
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
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 1rem;
  background: #374644;
  padding: 20px;
}

h1 {
  margin: 0;
}

section.centered {
  text-align: center;
}

section.no-background {
  background: none;
}

section header {
  justify-content: space-between;
  display: flex;
  align-items: center;
}

section footer {
  display: flex;
  justify-content: flex-end;
}

.close {
  cursor: pointer;
  font-weight: 700;
  font-size: 1.2rem;
  margin: -2rem -0.5rem 0 0;
}

@media (max-width: 640px) {
  section {
    margin: 0 auto 0.5rem;
  }
}
</style>

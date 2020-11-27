<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  emits: ["closeModal"],
  props: {
    closable: {
      type: Boolean,
      default: true,
      required: false
    },
    footer: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
});
</script>

<template>
  <div class="modal-backdrop" v-on:click="closeModal"></div>
  <div class="modal">
    <header>
      <slot name="header" />
      <div v-if="closable" class="close" v-on:click="closeModal">X</div>
    </header>
    <div class="content">
      <slot />
    </div>
    <footer v-if="footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.modal {
  position: fixed;
  top: 10vh;
  left: calc(50% - 20rem);
  width: 40rem;
  height: 80%;
  border-radius: 5px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(68, 68, 68);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  box-sizing: border-box;
}

.modal header {
  justify-content: space-between;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(172, 172, 172);
}
.modal .content {
  height: 100%;
  overflow: auto;
  padding: 20px 0;
}
.modal footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px 0 0;
  border-top: 1px solid rgb(172, 172, 172);
}

.close {
  cursor: pointer;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0rem 1rem 0 0;
}

.show {
  display: flex;
}
.show img {
  max-width: max-content;
}
.show .details {
  padding: 0 0 0 2rem;
}

@media (max-width: 500px) {
  .show {
    flex-direction: column;
  }
}

@media (max-width: 767px) {
  .modal {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 1rem;
  }
}
</style>

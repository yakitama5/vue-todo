<template>
  <div class="title">
    <span
      v-if="!title.editing"
      @click="onClickTitle(title)"
      v-text="title.value"
    ></span>
    <b-form-input
      v-if="title.editing"
      id="edit-page-title"
      v-model="title.value"
      autofocus
      @blur="title.editing = false"
      @keydown.enter="title.editing = false"
    />
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  data() {
    return {
      title: {
        value: 'Title',
        editing: false,
      },
    };
  },
  methods: {
    onClickTitle(title) {
      title.editing = true;
      this.$nextTick(() => document.getElementById('edit-page-title').focus());
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 64px;
}

.title input {
  font-size: 64px;
}
</style>

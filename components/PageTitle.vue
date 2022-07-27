<template>
  <div class="title">
    <span
      v-if="!title.editing"
      @click="onClickTitle(title)"
      v-text="title.value"
    ></span>
    <b-form-input
      v-if="title.editing"
      ref="titleForm"
      v-model="title.value"
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
      this.$nextTick(() => this.$refs.titleForm.focus());
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

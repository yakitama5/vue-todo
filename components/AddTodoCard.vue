<template>
  <div>
    <b-card v-if="!todo.editing" class="add-card" @click="onClickCard(todo)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="grey"
        class="bi bi-plus-circle"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        />
      </svg>
      <span>タスクの追加</span>
    </b-card>

    <b-card v-if="todo.editing" class="edit-card">
      <b-form-input
        ref="todoForm"
        v-model="todo.title"
        class="no-border no-box-shadow"
        autofocus
        placeholder="タスクの追加"
        @keydown.enter="add(todo)"
      />
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'AddTodoCard',
  data() {
    return {
      todo: {
        title: '',
        editing: false,
      },
    };
  },
  methods: {
    onClickCard(todo) {
      todo.editing = true;
      this.$nextTick(() => this.$refs.todoForm.focus());
    },
    add(todo) {
      this.$store.commit('todos/add', todo.title);

      todo.title = '';
      todo.editing = false;
    },
  },
};
</script>

<style scoped>
.add-card {
  background: #ffffff;
  opacity: 0.6;
}

.edit-card {
  background: #ffffff;
  opacity: 0.8;
}

.no-border {
  border: none;
}

.no-box-shadow {
  box-shadow: none;
}
</style>

<template>
  <div>
    <div class="todo-list">
      <TodoListTile
        v-for="todo in uncompletedTodos"
        :key="todo.id"
        :todo="todo"
      ></TodoListTile>
    </div>
    <div style="height: 10px"></div>
    <b-button
      class="show-completed"
      active
      @click="showCompleted = !showCompleted"
    >
      <svg
        v-if="!showCompleted"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
      <svg
        v-if="showCompleted"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
      完了済み
    </b-button>
    <div style="height: 10px"></div>
    <div v-if="showCompleted" class="todo-list">
      <TodoListTile
        v-for="todo in conpletedTodos"
        :key="todo.id"
        :todo="todo"
      ></TodoListTile>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      showCompleted: false,
    };
  },
  computed: {
    uncompletedTodos() {
      return this.$store.state.todos.list.filter((e) => !e.completed);
    },
    conpletedTodos() {
      return this.$store.state.todos.list.filter((e) => e.completed);
    },
  },
};
</script>

<style scoped>
.show-completed {
  background: #ffffff;
  opacity: 0.6;
  color: darkslategrey;
  border: none;
}
</style>

<template>
  <!-- `b-card`は`Bootstrap Vue`フレームワークで定義されているコンポーネント -->
  <b-card class="todo-card">
    <!-- カード内の要素は適当に記載 -->
    <input
      :checked="todo.completed"
      type="checkbox"
      class="round-circular-checkbox"
      @change="toggle(todo)"
    />
    <span>{{ todo.title }}</span>
  </b-card>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TodoListTile',
  // 今回はTodoオブジェクトを受け取って、それを基に描画するコンポーネントの設定
  // 一旦、静的レイアウトのみのため、イベント(TODOの状態更新など)は保留
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations('todos', ['toggle']),
  },
};
</script>

<style scoped>
.todo-card {
  background: #ffffff;
  opacity: 0.8;
  margin-bottom: 10px;
}

.round-circular-checkbox {
  width: 1.3em;
  height: 1.3em;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid grey;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.round-circular-checkbox:checked {
  background-color: darkslategrey;
}

.round-circular-checkbox:checked::after {
  content: '';
  position: relative;
  display: block;
  left: 5px;
  top: 5px;
  height: 5px;
  width: 10px;
  border-left: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  transform: rotate(-45deg);
}
</style>

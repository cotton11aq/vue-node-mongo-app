<template lang="pug">
div
  h1 ホーム
  ul(v-for='(todo, index) in todos')
    li(key=index) {{ todo.title }}
      input(type='checkbox', :checked='todo.done')
      router-link(to='/') 編集
      button 削除
</template>

<script>
import Methods from '@/api/methods';

export default {
  name: 'Home',
  data() {
    return {
      todos: '',
    };
  },
  created() {
    this.getTodos();
  },
  methods: {
    async getTodos() {
      try {
        const todos = await Methods.getTodos();
        this.todos = todos.data.todos;
        console.log(this.todos);
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

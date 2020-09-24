<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
  import AddTodo from './components/AddTodo'
  import Todos from './components/Todos.vue'
  import FilterTodos from './components/FilterTodos.vue'

  export default {
    name: 'App',
    components: {
      AddTodo,
      Todos,
      FilterTodos,
    },
  }
</script>

<style>
  body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 1.6;
    background: #e8f7f0;
  }

  .container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }

  /* global forms */
  form {
    display: flex;
  }
  input[type='text'] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
  }
  input[type='submit'] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
  }
</style>

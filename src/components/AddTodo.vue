<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="handleSubmit">
        <input type="text" v-model="title" placeholder="Add Todo..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'AddTodo',
    data() {
      return {
        title: '',
      }
    },
    methods: {
      ...mapActions(['addTodo']),
      handleSubmit(e) {
        e.preventDefault()
        if (!this.title) {
          return alert('Please type in a todo title in the input field!')
        }
        this.addTodo(this.title)
        this.title = ''
      },
    },
  }
</script>

<style scoped></style>

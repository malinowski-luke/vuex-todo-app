import axios from 'axios'

const state = {
  todos: [],
}

const getters = {
  allTodos: (state) => state.todos,
}

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    )
    commit('setTodos', response.data)
  },
  async addTodo({ commit }, title) {
    const newTodo = { title, completed: false }
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      newTodo
    )
    commit('newTodo', response.data)
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('removeTodo', id)
  },
  async filterTodos({ commit }, event) {
    const limit = event.target.value
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    )
    commit('setTodos', response.data)
  },
  async updateTodo({ commit }, updatedTodo) {
    await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`
    )
    commit('updateTodo', updatedTodo)
  },
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  updateTodo: (state, updatedTodo) => {
    const indexOfTodo = state.todos.findIndex(
      (todo) => todo.id === updatedTodo.id
    )
    if (indexOfTodo > -1) state.todos.splice(indexOfTodo, 1, updatedTodo)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}

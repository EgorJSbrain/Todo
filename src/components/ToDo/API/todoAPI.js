import { axios } from '../../../axios';



export const todoAPI = {

  addTodo(action) {
    return axios.post('/todo', {
      title: action.payload.title,
      text: action.payload.text
    }).then(response => response)
  },

  getTodos() {
    return axios.get('/todos')
      .then(response => {
        return response.data.todos
      })
  },

  edit(action) {
    return axios.post('/edit', {
      id: action.value.id,
      title: action.value.title,
      text: action.value.text
    }).then(response => response)
  },

  delete(action) {
    return axios.post('/delete', {
      id: action.id
    }).then(response => response)
  },

}
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

  delete(action) {
    return axios.post('/delete', {
      id: action.id
    }).then(response => response)
  } 

}
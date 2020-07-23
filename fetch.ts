
interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const fetchTodo = async():Promise<Todo> => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await resp.json()
  return data as Todo
}

export {
  fetchTodo,
  Todo
}
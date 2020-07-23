import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { fetchTodo, Todo } from "./fetch.ts";

const PORT = 8000

const app = new Application()
const router = new Router()

router.get('/api/todo', async({ response }: { response: any }) => {

  const todo: Todo = await fetchTodo()
  response.body = {
    todo
  }
})

app.use(router.routes())

console.log(`App has been started on port ${PORT}...`)

await app.listen({ port: PORT })
// import { serve } from "https://deno.land/std@0.61.0/http/server.ts";
// import { fetchTodo, Todo } from "./fetch.ts";

// const s = serve({ port: 8000 });
// console.log("http://localhost:8000/");

// for await (const req of s) {
//   const todo: Todo = await fetchTodo()
//   console.log(todo)
//   req.respond({ body: JSON.stringify(todo) });
// }

import { Application, Context } from "./deps.ts";

const app = new Application()

app.use((ctx: Context): void => {
    ctx.response.body = 'Hello world'
})

app.listen({ port: 3000 })
console.log('Server listening http://127.0.0.1:3000')
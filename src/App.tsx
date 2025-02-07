import sql from './db'
import { FC } from 'hono/jsx'


import { Hono } from 'hono'
const app = new Hono()


const Count: FC<{ count: number }> = (props) => {
  return (
    <h3 id="count">{props.count}</h3>
  )
}

let count = 0;


app.get('/plus', async (c) => {
  const [{ count }] = await sql`
    UPDATE count
    SET count = count + 1
    WHERE id = '2'
    RETURNING count;
  `;

  console.log("plus", count);
  return c.render(<Count count={count} />)
})

app.get('/minus', async (c) => {
  const [{ count }] = await sql`
    UPDATE count
    SET count = count - 1
    WHERE id = '2'
    RETURNING count;
  `;

  console.log("minus", count);
  return c.render(<Count count={count} />)
})

import Explore from './Explore'
const Counter = () => {
  return (
    <div>
      <Count count={count} />
      <div>
        <button hx-get="minus" hx-target="#count" hx-target-error="#count">-</button>
        <button hx-get="plus" hx-target="#count" hx-target-error="#count">+</button>
      </div>
    </div>
  )
}

import Profile from './Profile'

app.get('/', (c) => {
  return c.render(
    <html>
      <head>
        <script src="https://unpkg.com/htmx.org@2.0.4"></script>
        <script src="https://unpkg.com/htmx.org@2.0.4/dist/ext/response-targets.js"></script>
      </head>
      <body hx-ext="response-targets">
        <Counter />
        {/*<Explore />*/}
        {/*<Profile />*/}
      </body>
    </html>
  )
})

export default app
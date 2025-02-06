import { FC } from 'hono/jsx'


import { Hono } from 'hono'
const app = new Hono()


let count = 0;

const Count: FC<{ count: number }> = (props) => {
  return (
    <h3 id="count">{props.count}</h3>
  )
}


app.get('/plus', (c) => {
  count++;
  console.log("plus", count);
  return c.render(<Count count={count} />)
})


const PlusButton = () => {
  return (
    <button hx-get="plus" hx-target="#count">+</button>
  )
}


app.get('/minus', (c) => {
    count--;
    console.log("minus", count);
    return c.render(<Count count={count} />)
})

const MinusButton = () => {
    return (
        <button hx-get="minus" hx-target="#count">-</button>
    )
}

import Explore from './Explore'
const Counter = () => {
  return (
    <div>
      <Count count={count} />
      <div>
        <MinusButton />
        <PlusButton />
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
      </head>
      <body>
        <Counter />
        <Explore />
        <Profile />
      </body>
    </html>
  )
})

export default app
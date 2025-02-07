/* types for htmx in jsx https://hono.dev/examples/htmx */
import 'typed-htmx'
// A demo of how to augment foreign types with htmx attributes.
// In this case, Hono sources its types from its own namespace, so we do the same
// and directly extend its namespace.
declare module 'hono/jsx' {
  namespace JSX {
    interface HTMLAttributes extends HtmxAttributes {}
  }
}


import app from './App'

import { renderer } from './renderer'
app.use(renderer)

export default app
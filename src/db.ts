import postgres from 'postgres'

// relies on env vars
const sql = postgres()

export default sql
import { Database } from "sqlite3"

// init sqlite database
const db = new Database("./db.sqlite")

db.serialize(() => {
  console.log("DROP tables & CREATE ...")
  db.run(`--sql
    DROP TABLE IF EXISTS members
  `)
  db.run(`--sql
    CREATE TABLE IF NOT EXISTS members (
      name TEXT UNIQUE
      , age INTEGER
    )
  `)
})

console.log("DONE!")

import { Database } from "sqlite3"

export const run = (): void => {
  const db = new Database("./db.sqlite")

  db.serialize(() => {
    // INSERT
    insertMember(db, "taro", 33)
    insertMember(db, "jiro", 22)
    insertMember(db, "saburo", 13)
    insertMember(db, "siro", 4)

    // SELECT
    db.each("SELECT * FROM members", (err, row) => {
      console.log("----- db.each")
      err != null && console.error(err)
      /* eslint-disable @typescript-eslint/no-unsafe-member-access */
      /* eslint-disable @typescript-eslint/restrict-template-expressions */
      console.log(`${row.name} ${row.age}`)
      /* eslint-enable */
    })

    db.all("SELECT * FROM members", (err, rows) => {
      console.log("----- db.all")
      err != null && console.error(err)
      console.log(JSON.stringify(rows))
    })

    db.get(
      "SELECT count(*) FROM members WHERE name LIKE '%iro'",
      (err, count) => {
        console.log("----- db.get")
        err != null && console.error(err)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log(count["count(*)"])
      }
    )
  })
}

const insertMember = (db: Database, name: string, age: number): void => {
  db.run(
    `--sql
      INSERT INTO members (name, age) VALUES (?, ?)
    `,
    name,
    age
  )
}

import { DB } from 'services/database'
import { hashInteger } from 'services/reduction'

// getting url request from user
function hash (req, res) {
  const { url } = req.query
  const sql = 'SELECT * FROM urls WHERE url = ?'
  DB.serialize(function () {
    // check database for url
    DB.get(sql, [url], (err, row) => {
      if (err) {
        return res.status(500).send(err)
      }
      // if found return database record
      if (row && row.url === url) {
        return res.json(row)
      } else {
        // if not found insert one
        DB.run('INSERT INTO urls (url, hash) VALUES(?,?)', [url, ''], function (
          err
        ) {
          if (err) {
            if (err) {
              return res.status(500).send(err)
            }
          }
          const lastId = this.lastID
          if (lastId) {
            const hash = hashInteger(lastId)
            // Update the database with hash
            DB.run(
              'UPDATE urls SET hash = ? WHERE id = ?',
              [hash, lastId],
              function (err) {
                if (err) {
                  return res.status(500).send(err)
                }
                console.log(req.query.url)
                return res.json({
                  url: req.query.url,
                  hash,
                  id: lastId
                })
              }
            )
          }
        })
      }
    })
  })
}

function unHash (req, res) {
  const { hash } = req.query

  const sql = 'SELECT * FROM urls WHERE hash = ?'
  DB.serialize(function () {
    DB.get(sql, [hash], (err, row) => {
      if (err) {
        return res.status(500).send(err)
      }

      if (row && row.hash === hash) {
        // return res.json(row)
        res.redirect(row.url)
      }
    })
  })
}

function getURLs (req, res) {
  const sql = 'SELECT * FROM urls'
  DB.serialize(function () {
    DB.all(sql, [], (err, rows) => {
      if (err) {
        return res.status(500).send(err)
      }
      return res.json(rows)
    })
  })
}

export default {
  hash,
  unHash,
  getURLs
}

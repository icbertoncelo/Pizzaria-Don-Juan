const multer = require('multer')
const crypto = require('crypto')
const path = require('path')

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(8, (err, hash) => {
        if (err) cb(err)

        file.key = `${hash.toString('hex')}-${file.originalname}`
        cb(null, file.key)
      })
    }
  })
}

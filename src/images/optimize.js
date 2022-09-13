const sharp = require(`sharp`)
const glob = require(`glob`)
const fs = require(`fs-extra`)
const path = require(`path`)

// Configure the desired quality
const MAX_WIDTH = 1800
const QUALITY = 80

// Find all images
const filenames = glob.sync(`compiled/**/*.{png,jpg,jpeg}`)

Promise.all(
  filenames.map(async filename => {
    // Create a sharp stream
    const stream = sharp(filename)

    // Get the file's metadata
    const info = await stream.metadata()

    // Return if the file is too small
    if (info.width < MAX_WIDTH) { return }

    // Create an optimized filename
    const tmpName = filename.replace(
      /(\..+)$/,
      (_, ext) => `-optimized${ext}`
    )

    if (path.extname(filename) === '.png') {
      await stream
        .resize(MAX_WIDTH)
        .png({ quality: QUALITY })
        .toFile(tmpName)
    } else {
      await stream
        .resize(MAX_WIDTH)
        .jpeg({ quality: QUALITY })
        .toFile(tmpName)
    }


    return fs.rename(tmpName, filename)
  })
)
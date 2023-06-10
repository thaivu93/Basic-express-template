import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

//support dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// app creation
const app = express()

// app config
app.use("/asset", express.static(path.join(__dirname, "src")))
app.set("views", path.join(__dirname,"src/views"))
app.set("view engine", "pug")

export default app

import app from "./src/app"
import "./src/database"
import {PORT} from './config'

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
import {start} from './server'

const {PORT} = process.env

start(PORT, () => console.log(`Server started localhost:${PORT}`))

import express, { Router } from 'express'
import mongoose from 'mongoose'
import { setupRoutes } from './main/config/routes'

const app = express()

app.use(express.json())
setupRoutes(app)

mongoose.connect('mongodb://gvt3ch:gvt3ch@mongodb:27017/decorator_app?authSource=admin')
    .then(result => {
        app.listen(8081, () => console.log(`Server is running on 8081 port`))
    }).catch(error => {
        console.log(error)
    })

export { app }
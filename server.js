import { dbConnection, sequelize } from './src/utils/pg.js'
import express from "express"
import fileUpload from 'express-fileupload'
import cors from 'cors'
import path from 'path'
// import mockDataFunction from './mockdata.js'

import jobRouter from './src/routes/job.js'
import commentRouter from './src/routes/comment.js'
import advertRouter from './src/routes/advert.js'
import userAdminRouter from './src/routes/userAdmin.js'


const PORT = process.env.PORT || 3003

!async function () {
	await dbConnection()
	// await mockDataFunction(sequelize)

	const app = express()
    app.use(cors({
        origin: "*",
          methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
          preflightContinue: false
    }))
    app.use( express.json() )
    app.use( fileUpload() )
    app.use('/files/', express.static(path.join(process.cwd(), 'files')))

	await app.use((req, res, next) => {
		req.models = sequelize.models
		return next()
	})

	app.use('/jobs', jobRouter)
	app.use('/comments', commentRouter)
	app.use('/adverts', advertRouter)
	app.use('/auth', userAdminRouter)


	app.listen(PORT, () => console.log('server is running on http://localhost:' + PORT))
}()
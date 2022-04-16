import { Sequelize } from 'sequelize'
import models from '../models/index.js'

const sequelize = new Sequelize({
	username: 'postgres',
	database: 'jobs_db',
	password: '0807',
	dialect: 'postgres',
	// logging: false
})

// const sequelize = new Sequelize('postgres://knudmmjn:9CMHCMI6AVY5JTfMKPWPNMh_b0ZXhcdK@john.db.elephantsql.com/knudmmjn')

async function dbConnection () {
	// connect to database
	try {
 		await sequelize.authenticate()
  		console.log('Connection has been established successfully.')
	} catch (error) {
  		console.error('Unable to connect to the database:', error)
	}

	// load models
	models.map(async model => {
		await model(sequelize)
	})

	// create or delete tables
	await sequelize.sync()
}

export {
	dbConnection,
	sequelize
}
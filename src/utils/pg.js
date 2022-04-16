import { Sequelize } from 'sequelize'
import models from '../models/index.js'

const sequelize = new Sequelize({
	host: 'john.db.elephantsql.com',
	username: 'ylvcfwky',
	database: 'ylvcfwky',
	password: '1eKQjE7DkztvtXsRHZERHWC4lJihO70l',
	dialect: 'postgres'
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

import sha256 from 'sha256'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const REGISTER = async (req, res) => {
	try {
		const { name, password, email } = req.body
		console.log(name, password, email)
		if(password.length < 5 || password.length > 10) {
			res.status(400).json({ message: 'Invalid password length!' })
		}

		const newAdmin = await req.models.UserAdmin.create({
			username: name,
			password: sha256(password),
			email: email
		})

		res.status(200).json({
			message: 'The user succesfully registered!',
			token: jwt.sign({ username: name }, '$$$$$')
		})

	} catch (error) {
		res.status(404).json({
			message: error.message
		})
	}
}


const LOGIN = async (req, res) => {
	try {
		const { name, password } = req.body
		const userAdmins = await req.models.UserAdmin.findAll()
		const shaPassword = sha256(password)
		let findUser;
		for (let i of userAdmins) {
			if (i.username == name && i.password == shaPassword) {
				findUser = i
			}
		}
		if (!findUser) {
			res.status(400).json({ message: 'Wrong name or password!' })
		}
		res.status(200).json({
			message: 'The user succesfully logged in!',
			token: jwt.sign({ username: name }, '$$$$$')
		})
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

const CHECK = async (req, res) => {
	// console.log(req.body.token)
	let tokenName = jwt.verify(req.body.token, '$$$$$')
	// console.log(tokenName)
	let adminJson = fs.readFileSync( path.join(process.cwd(), 'src', 'adminJson', 'realAdmin.json') )
	// console.log(JSON.parse(adminJson))
	// console.log(JSON.parse(adminJson)[0].username == tokenName.username)

	if(JSON.parse(adminJson)[0].username == tokenName.username) {
		res.json({
			message: "This is a real admin!",
			command: "adminadminadmin"
		})
	}
	else {
		res.json({
			message: "This is a fake admin!",
			command: "user"
		})
	}


}

export default {
	REGISTER,
	LOGIN,
	CHECK
}
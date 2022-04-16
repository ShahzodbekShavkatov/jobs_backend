import controller from '../controllers/userAdmin.js'
import { Router } from 'express'
const router = Router()

router.post('/login', controller.LOGIN)
router.post('/register', controller.REGISTER)
router.post('/check', controller.CHECK)

export default router
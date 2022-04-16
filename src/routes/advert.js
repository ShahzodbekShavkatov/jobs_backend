import controller from '../controllers/advert.js'
import { Router } from 'express'
const router = Router()

router.get('/', controller.GET)
router.post('/', controller.POST)

export default router
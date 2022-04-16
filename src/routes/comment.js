import controller from '../controllers/comment.js'
import { Router } from 'express'
const router = Router()

router.get('/', controller.GET)
router.post('/', controller.POST)

export default router
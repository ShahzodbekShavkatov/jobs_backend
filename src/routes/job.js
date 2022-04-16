import controller from '../controllers/job.js'
import { Router } from 'express'
const router = Router()

router.get('/', controller.GET)
router.post('/', controller.POST)
router.put('/', controller.PUT)
router.delete('/', controller.DELETE)

export default router
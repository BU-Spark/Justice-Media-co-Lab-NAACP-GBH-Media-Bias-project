import express from 'express'
import {
    getReports,
    getReportById,
} from '../controllers/reportController.js'


const router = express.Router()

router.route('/').get(getReports)
router.route('/:id').get(getReportById)

export default router
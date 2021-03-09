import express from 'express'
import {
    postInput
} from '../controllers/inputController.js'


const router = express.Router()

router.route('/').post(postInput)

export default router
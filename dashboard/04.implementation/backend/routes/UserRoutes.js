import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
import { loginValidator, registerValidator } from '../validators/userValidator.js'

router.route('/').post(registerValidator, registerUser)
router.post('/login', loginValidator, authUser)
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

export default router
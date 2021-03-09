import asyncHandler from 'express-async-handler'
import inputData from '../models/inputDataModel.js'

// @desc    Insert new input data
// @route   POST /api/inputs
// @access  Public
const postInput = asyncHandler(async (req, res) => {
    const { startDate, endDate, terms, location, methodType, uploadFile } = req.body

    const inputData = await InputData.create({
        startDate, endDate, terms, location, methodType, uploadFile,
    })

    if (inputData) {
        res.status(201).json({
            message: "Input data created",
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Fetch single input Data
// @route   GET /api/inputs/:id
// @access  Public
const getInputById = asyncHandler(async (req, res) => {
    const inputData = await InputData.findById(req.params.id)

    if (inputData) {
        res.json(inputData)
    } else {
        res.status(404)
        throw new Error('inputData not found')
    }
})

export { postInput, getInputById }
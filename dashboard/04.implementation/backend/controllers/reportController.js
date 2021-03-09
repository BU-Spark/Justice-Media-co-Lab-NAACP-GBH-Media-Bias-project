import asyncHandler from 'express-async-handler'
import Report from '../models/reportModel.js'

// @desc    Fetch all reports
// @route   GET /api/reports
// @access  Public
const getReports = asyncHandler(async (req, res) => {
    const reports = await Report.find({})

    res.json(reports)
})

// @desc    Fetch single report
// @route   GET /api/reports/:id
// @access  Public
const getReportById = asyncHandler(async (req, res) => {
    const report = await Report.findById(req.params.id)

    if (report) {
        res.json(report)
    } else {
        res.status(404)
        throw new Error('Report not found')
    }
})

export { getReports, getReportById }
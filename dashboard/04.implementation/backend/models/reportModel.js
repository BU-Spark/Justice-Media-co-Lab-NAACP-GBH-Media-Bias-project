import mongoose from 'mongoose'

const reportSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        tabular: {
            type: String,
        },
        map: {
            type: String,
        },
        createdAt: {
            type: Date
        },
        updatedAt: {
            type: Date
        },
    },
    {
        timestamps: true
    })

const Report = mongoose.model('Report', reportSchema)

export default Report
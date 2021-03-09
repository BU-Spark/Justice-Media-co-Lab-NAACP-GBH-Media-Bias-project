import mongoose from 'mongoose'

const inputDataSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        terms: {
            type: String,
        },
        location: {
            type: String,
        },
        methodType: {
            type: String
        },
        uploadFile: {
            type: String
        },
    },
    {
        timestamps: true
    })

const InputData = mongoose.model('InputData', inputDataSchema)

export default InputData
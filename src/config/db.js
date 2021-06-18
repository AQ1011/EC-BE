const mongoose = require('mongoose')
const { MONGO_URI } = require('./index')
console.log(MONGO_URI)
async function connect() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('connect db successfully!')
    } catch (error) {
        console.log('connect db fail!!')
    }
}

module.exports = { connect }
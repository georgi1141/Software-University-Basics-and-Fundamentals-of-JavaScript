const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1:27017/cat-shalter'

exports.connectToDB = async ()=>{
    await mongoose.connect(uri)
}
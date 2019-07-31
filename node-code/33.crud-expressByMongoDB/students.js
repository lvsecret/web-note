var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/demo', {
  useNewUrlParser: true
})

var Schema = mongoose.Schema

var studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0
  },
  age: {
    type: Number
  },
  hobbies: {
    type: String
  }
})

// 直接导出模型改造函数
module.exports = mongoose.model('Student', studentSchema)
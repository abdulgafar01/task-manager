const mongoose = require('mongoose') 
// const connectionString = ''


// mongoose
// .connect(connectionString,
//     {   useNewUrlParser:true,
//         useCreateIndex:true,
//         useFindAndModify:false, 
//         useUnifiedTopology:true
//     }
     
// )

const connectDB = (url) => {
  return mongoose.connect(url)
}
module.exports = connectDB
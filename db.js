import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'



const db = async(DB_USERNAME,DB_PASSWORD) => {
  return(
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lxyf6gd.mongodb.net/AdorTraffic?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(()=>{console.log('database connected')})
    .catch((err)=>{console.log(err)})
    
    )
}

export default db


 
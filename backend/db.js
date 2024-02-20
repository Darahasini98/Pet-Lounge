const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Daraha:petlounge@cluster0.euq8qdf.mongodb.net/petlounge?retryWrites=true&w=majority'
const mongoDB = async ()=>{
    try {
        //mongoose.set('strictQuery', false)
        await mongoose.connect(mongoURI) ;
        console.log('Mongo connected');
        const fetched_data =  mongoose.connection.db.collection("pets");
        fetched_data.find({}).toArray(function(err,data){
        if(err) console.log(err)
            else console.log(data);
        });
       
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
}
// const mongoDB =  async()=>{
//     await mongoose.connect(mongoURI,{useNewUrlParser:true},(err,result)=>{
//         if(err)console.log("-----------",err)
//         else{
//     console.log("connected")
// }
//     });
// }
module.exports = mongoDB;

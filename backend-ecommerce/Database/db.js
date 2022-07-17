const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/ecommerce',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
          )
          console.log("Connection succesful to database");
    }catch(error){
        console.log("Error Message: "+error);
    }
};

module.exports=connectDB;
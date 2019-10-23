const mongoose=require('mongoose')
mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost:27017/phonebook',{
    useNewUrlParser:true
})
.then(()=>{
    console.log('sucessfully connecting to db')
})
.catch((err)=>{
    console.log('error connecting to db',err)
})
module.exports=mongoose
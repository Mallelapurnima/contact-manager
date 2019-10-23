const mongoose=require('mongoose')
const mongoosePaginate=require('mongoose-paginate-v2')

const Schema=mongoose.Schema
const contactSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator:function(value){
        return validator.isEmail(value)
        },
        message:function(){
        return 'invalid email format'
        }
    },
    mobile:{
        type:String,
        minlength:10,
        reqired:true,
        unique:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }

})    
contactSchema.plugin(mongoosePaginate)
const Contact=mongoose.model('Contact',contactSchema)
module.exports=Contact
const express=require('express')
const router=express.router
const Contact =require('../models/contact')

module.exports.list=(req,res)=>{
    
      const value=req.query.page
        const options = {
        page:Number(value),
        limit:5
     }
    Contact.paginate({},options)
      Contact.find({ userId:req.user._id })
      .then((contact) => {
        res.json(contact)
      })
      .catch((err) => {
          res.json(err)
      })
   
}
module.exports.create=(req,res)=>{
    const body=req.body
    const contact=new Contact(body)
    contact.userId=req.user._id
    contact.save()
    .then((contact)=>{
        res.json(contact)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.show=(req,res)=>{
    const id=req.params.id
    Contact.findById(id)
    .then((contact)=>{
    res.json(contact)
    })
    .catch((err)=>{
        res.json(err)
    })

}
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Contact.findByIdAndUpdate(id,body,{new:true})
    .then((contact)=>{
        res.json(contact)
    })
    .catch((err)=>{
        res.json(err)
    })

}
    module.exports.destroy=(req,res)=>{
        const id=req.params.id
        Contact.findByIdAndDelete(id)
        .then((contact)=>{
            res.json(contact)
        })
        .catch((err)=>{
            res.json(err)
     })
     }
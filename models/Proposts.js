const mongoose=require('mongoose');
const postschema=new mongoose.Schema({
    vreg:{
        type:String,
        required:true

    },
    vname:{
        type:String,
        required:true
    },
    vowner:{
        type:String,
        required:true
    },
    vprice:{
        type:String,
        required:true
    },
    vdescription:{
        type:String,
        required:true

    },
    

})

module.exports=mongoose.model('Proposts',postschema);
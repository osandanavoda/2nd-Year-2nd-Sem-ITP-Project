const express=require('express');
const Proposts=require('../models/Proposts');
const Procureg=require('../models/Procureg');
const suplreg = require('../models/suplreg');



const router=express.Router();




//Procurement Reg save 

router.post('/procurementmgr/save',(req,res)=>{
    let newEmp=new Procureg(req.body);

    

    newEmp.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Registered"
        });

    });

});

//Supplier Reg get 

router.get('/supreg/get',(req,res)=>{
    suplreg.find().exec((err,suplreg)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extistingEmp:suplreg
        });

    });
});

//Supplier Reg save 

router.post('/supreg/save',(req,res)=>{

    let newSup=new suplreg(req.body);

    newSup.save((err)=>{

        if(err){

            return res.status(400).json({

                error:err
            });

        }
        return res.status(200).json({

            success:"Inventory  saved"

        });

    });



});

//get a sprecific details for SupplierRegList

router.get("/supreg/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await  suplreg.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})

// router.get('/supreg/:id',(req,res)=>{
//     let postId=req.params.id;
    
//     suplreg.findById(postId,(err,post)=>{
//         if(err){
//             return res.status(400).json({
//                 success:false,err
//             });
//         }
//         return res.status(200).json({
//             success:true,
//             post
//         });

//     });

    
//});

//update for SupplierRegList 

router.patch("/supreg/update/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await  suplreg.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

// router.put('/procurementmgr/update/:id',(req,res)=>{
//     posts.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,post)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }
//             return res.status(200).json({
//                 success:"updates succesfully"
//             });

//         }
//     );
// });

//delete for SupplierRegList

router.delete('/supreg/delete/:id',(req,res)=>{
    suplreg.findByIdAndRemove(req.params.id).exec((err,deletedEmp)=>{
        if(err){
            return res.status(400).json({
                message:"delete unsufull"
            })
        }
        return res.json({
            message:"delete success",deletedEmp
        });
    });
});





module.exports=router;


//get a sprecific details

router.get('/procurementmgr/:id',(req,res)=>{
    let postId=req.params.id;
    
    Procureg.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            post
        });

    });

    
});





const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');


const app=express();

//import routes

const postroutes=require('./routes/posts');


app.use(bodyParser.json());
app.use(cors());

app.use(postroutes);


const port =8000;

const url='mongodb+srv://Osaa1:yTa521$5@procureapp.cqrvhzo.mongodb.net/Procurementmgt?retryWrites=true&w=majority';

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);

})

app.listen(port,()=>{
    console.log(`app is running on: ${port}`);
})

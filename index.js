const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require('./DB/User')
const bodyParser = require("body-parser")

require('dotenv').config();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
  useUnifiedTopology: true,
  useNewUrlParser: true,
}, console.log('Connected to database'))

app.get('/',(req,res)=>{
  res.send('Running')
})

app.post('/send',cors(), async(req,res,next)=>{

 const data = req.body;

  try{
    const newUser = await User.create(data);
    return res.json(newUser);
  }catch(err){
    return res.status(400).json(err);
  }
});


app.listen(process.env.PORT || 3001, () =>{
  console.log("Server is running on port 3001");
});
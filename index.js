const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require("cors");
const User = require('./models/db')
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI,{
  useUnifiedTopology: true,
  useNewUrlParser: true,
}, console.log('Connected to database'))

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
 res.send('Rota de cadastro')
})

app.post('/send',cors(), async(req,res,next)=>{
  
  const username = req.body.email;
  const password = req.body.password;
   try{
     const newUser = await User.create({username, password});
     return res.json(newUser);
   }catch(err){
     return res.status(400).json(err);
   }
 });

/*app.post('/add',cors(),async(req,res,next)=>{
  res.send("Email: " +req.body.email+" Senha: "+req.body.password)
})*/


app.listen(process.env.PORT || 3001, () =>{
  console.log("Server is running on port 3001");
});
require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');
const path = require ('path')




mongoose.connect(process.env.DB_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: false,

})
.then(() => console.log('mongoDB is connected'))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/auth', require('./routes/user'));

//Serve build
if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"));
  
   app.get("*", (req, res) => {
       res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
   });
  }
  



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log ("Server is running"));
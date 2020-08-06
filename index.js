const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');

const {User} = require('./models/user');
const config = require('./config/key');
const psw = '4QUPKIfJaEYFHgyR';
mongoose.connect(config.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("DB Connected"))
.catch(err => console.error(err));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cookieParser());

app.post('/api/users/register', (req,res) => {
    const user = new User(req.body);

    user.save((err,userData)=> {
        if(err) return res.json ({success: false, err})
        return res.status(200).json({
            success:true
        })
    })
    
})

const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
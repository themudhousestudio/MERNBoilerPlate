const express = require('express');
const app = express();
const mongoose = require('mongoose');
const psw = '4QUPKIfJaEYFHgyR';
mongoose.connect('mongodb+srv://ahmedfaraz:4QUPKIfJaEYFHgyR@ecomdb.x9y5n.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser:true})
.then(() => console.log("DB Connected"))
.catch(err => console.error(err));

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
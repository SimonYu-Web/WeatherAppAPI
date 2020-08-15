const path = require('path');
const express = require('express');
const app = express();
const router = require('./router');

const port = process.env.PORT || 3000

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('views'));
app.set('views', 'views');
app.set('view engine', 'hbs');

app.use('/', router);


app.listen(port,() =>{
    console.log('Server is up and running on port: ' , port);
})
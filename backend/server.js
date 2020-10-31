const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.get('/', async (req, res) =>{
    try {
        const { data } = await axios('http://jsonplaceholder.typicode.com/users');
        res.json(data);

    }catch(err){
        console.log(err)
    }
})


app.listen(3333, () => {
    console.log('Server is running!')
})
























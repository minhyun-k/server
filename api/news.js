const express = require('express');
const news = express.Router()
const axios = require('axios');

news.get('/', async function (req, res){
    const {m,s} = req.query;

    const api = await axios.get(`https://api-v2.deepsearch.com/v1/${m}/${s}?date_from=2024-10-23&date_to=2024-10-24&api_key=76a01f5cfef34bdda7d3430dbefc0d65`)
    res.json( api.data)
}),
// news.get('/search', async function (req, res){
//     const {m,s} = req.query;

//     const api = await axios.get(`https://api-v2.deepsearch.com/v1/${m}/${s}?date_from=2024-10-23&date_to=2024-10-24&api_key=76a01f5cfef34bdda7d3430dbefc0d65`)
//     res.json( api.data)
// })


module.exports = news




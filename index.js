
const PORT = 8000 

const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()


const url = "https://www.etsy.com/";
axios(url).
then(response => {
    const html = response.data

    const $ = cheerio.load(html)
    const articles = []
    $('.currency-value', html).each(function() {
        const title =  $(this).text()
        articles.push({
            title
        })
        console.log(articles)
    })

    
}).catch(err => console.log(err))
// we want our server to run on this port 8000
app.listen(PORT, () => console.log('server runnning on port ${PORT}'))




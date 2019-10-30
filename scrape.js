const axios = require('axios');
const fs = require('fs');

const scrapePage = (pageUrl) => {
    axios(pageUrl)
        .then(response => {
            const products = response.data.products;
            if (products && products.length !== 0) {
                products.forEach(product => {
                    if (product.price === '0,01 zł' ||
                        product.regular_price === '0,01 zł' ||
                        product.price_amount === 0.01 ||
                        product.regular_price_amount === 0.01) {
                        console.log('HIT!');
                        console.log(product.name, pageUrl, product.url);
                    }
                });
            } else {
                console.log('ERR! Empty products list!');
            }
        })
        .catch(err => console.log(err));
};

const pageUrlsList = fs.readFileSync('links.txt').toString().split("\n");

setInterval(() => {
    console.log('Checking!...');
    pageUrlsList.forEach(pageUrl => {
        scrapePage(pageUrl);
    })
}, 2 * 60 * 1000);

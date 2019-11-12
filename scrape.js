const axios = require('axios');
const fs = require('fs');
const notifier = require('node-notifier');

let number = 1;
let promoLinks = [];

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
                        if (!promoLinks.find(link => link === product.url)) {
                            console.log('HIT - no.' + number);
                            console.log(product.url);
                            notifier.notify({
                                title: '---HIT!---',
                                message: 'New product found!'
                            });
                            number = number + 1;
                            promoLinks.push(product.url);
                        }
                    }
                });
            } else {
                console.log(`ERR! Empty products list! ${pageUrl}`);
            }
        })
        .catch(() => console.log(`Loading page error! ${pageUrl}`))
};

const pageUrlsList = fs.readFileSync('links.txt').toString().split("\n");

setInterval(() => {
    console.log('Checking!...');
    pageUrlsList.forEach(pageUrl => {
        scrapePage(pageUrl);
    })
}, 1 * 60 * 1000);

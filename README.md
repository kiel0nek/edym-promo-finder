# Edym-promo-finder

Simple node.js script to find PROMO product on  [E-dym.pl](https://e-dym.pl).
In 'links.txt' I pasted category links - but I dont know if it is enough.

## Getting Started

To start app:

```
git clone https://github.com/MIKOLAJW197/edym-promo-finder.git
npm install
npm start
```

### How it work

It call all links from 'links.txt' and look for product with price 0.01. (0,01 zł)
It will scrape all sites, every minute and will display only fresh links. (links that wasn't found on last search)

## Built With
* [Axios](https://github.com/axios/axios) - Used to make requests
* [node-notifier](https://github.com/mikaelbr/node-notifier) - Used to make notification

## Authors

* **Mikolaj Wolicki** - *Initial work* - [MIKOLAJW197](https://github.com/MIKOLAJW197)

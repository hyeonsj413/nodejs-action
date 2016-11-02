/**
 * Created by Slogup on 2016. 11. 2..
 */

//
// var currency = require('./currency/currency');
//
// console.log('50 to');
// console.log(currency.canadianToUS(50));
//
//
// console.log('30 us to ');
// console.log(currency.USToCanadian(30));

var Currency = require('./currency/currency');
var canadianDollar = 0.01;
var c = new Currency(canadianDollar);
console.log(c.canadianToUS(50));
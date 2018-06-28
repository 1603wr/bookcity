var homeData = require('./index/home');
var data = {
    '/api/index': homeData
};

module.exports = function(url) {
    return data[url];
};
// This is a util use cheerio modules to parser html page to json
var cheerio = require('htmlparser2');
var results = "";
exports.html2json = function (html) {
  results = html;
  return results;
}

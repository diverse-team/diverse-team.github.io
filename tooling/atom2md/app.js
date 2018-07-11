var parse = require("bibtex-parser")
var https = require('https');
var http = require('http');
var fs = require('fs');
var moment = require('moment');
var parser = require('xml2json');
 


https.get('https://mleduc.xyz/blog/feed.xml', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } 
  if (error) {
    console.error(error.message);
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      var jsont = parser.toJson(rawData);
      var json = JSON.parse(jsont);
      json.feed.entry.forEach(e => {
        var author = "Manuel Leduc";
       // console.log(e.title.$t)
        var res = '';
        res = res + '+++\n'
        var d = moment(e.published);
        res = res + 'date = "'+ d.format('YYYY-MM-DD')  +'"\n'
        res = res + 'title = "'+ author + ' published a new Blog Post on ' + e.title.$t   +'"\n'
        res = res + 'summary = "'+  author + ' published a new Blog Post on ' + e.title.$t   +'"\n'
        res = res + 'image_preview = "'+'"\n'
        res = res + 'tags = ['
        e.category.forEach(e1 => { res = res + '"' + e1.term + '",' })
        res = res.slice(0, -1);

        res = res + ']\n'
        res = res + 'external_link = "'+  e.link.href +'"\n'
        res = res + 'math = false'+   '\n'
        res = res + '[header]'+   '\n'
        res = res + 'image = ""'+'\n'
        res = res + 'caption = ""'   +'\n'
        res = res + '+++\n'
        res = res + '\n\n'
        res = res + author +' published a [new blog]('+ e.link.href + ') on ' + e.title.$t
        fs.writeFile(d.format('YYYYMMDD') + '-'+author + '.md', res, function(err) {
          if (err) throw err;
        });
       // console.log(res)

      });
      

/*      +++
date = "2018-07-09"
title = "New webSite"
summary = "Just launch new Web Site for DiverSE Team"
image_preview = "diverse.png"
tags = ["Web Site", "INRIA","communication"]
external_link = "http://inria.fr"
math = false
highlight = true
[header]
image = ""
caption = ""
+++
Launch of a new website for the team. Please contribute
*/


     /*/ fs.writeFile('test.json', json, function(err) {
        if (err) throw err;
      });
      */

    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});







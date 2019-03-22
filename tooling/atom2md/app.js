var parse = require("bibtex-parser")
var https = require('https');
var http = require('http');
var fs = require('fs');
var moment = require('moment');
var parser = require('xml2json');

var blogs = [{
    author: "Manuel Leduc",
    url : "https://mleduc.xyz/feed.xml",
    prot : https
  },
  {
    author: "Olivier Barais",
    url : "http://olivier.barais.fr/feed.xml",
    prot : http
  },
  {
    author: "Arnaud Blouin",
    url : "https://torgen-engineering.blogspot.com/feeds/posts/default",
    prot : https
  },
  {
    author: "Mathieu Acher",
    url: "http://blog.mathieuacher.com/feed.xml", 
    prot: http
  }, 
 {
     author: "VaryVary", 
     url: "https://varyvary.github.io/feed.xml", // the way feed.xml is important (URL, avoid same dates, etc.) 
     prot: https
 }
            
]

blogs.forEach(blog => {

  blog.prot.get(blog.url, (res) => {
    const {
      statusCode
    } = res;
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
    res.on('data', (chunk) => {
      rawData += chunk;
    });
    res.on('end', () => {
      try {
        var jsont = parser.toJson(rawData);
        /*fs.writeFile('test1.json', jsont, function (err) {
          if (err) throw err;
        });*/
        var json = JSON.parse(jsont);
        json.feed.entry.forEach(e => {
          var author = blog.author;
          // console.log(e.title.$t)
          var res = '';
          res = res + '+++\n'
          var d = moment(e.published);
          res = res + 'date = "' + d.format('YYYY-MM-DD') + '"\n'
          res = res + 'title = "' + author + ' published a new Blog Post: ' + e.title.$t + '"\n'
          res = res + 'summary = "' + author + ' published a new Blog Post: ' + e.title.$t + '"\n'
          res = res + 'image_preview = "' + '"\n'
          res = res + 'tags = ['
          if (e.category != null) {
            e.category.forEach(e1 => {
              res = res + '"' + e1.term + '",'
            })
            res = res.slice(0, -1);
          }
          res = res + ']\n'
          res = res + 'external_link = "' + e.link.href + '"\n'
          res = res + 'math = false' + '\n'
          res = res + '[header]' + '\n'
          res = res + 'image = ""' + '\n'
          res = res + 'caption = ""' + '\n'
          res = res + '+++\n'
          res = res + '\n\n'
          res = res + author + ' published a [new blog post](' + e.link.href + ') on "**' + e.title.$t + '**"\n'
          fs.writeFile(d.format('YYYYMMDD') + '-' + author + '.md', res, function (err) {
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


})

var fs = require('fs');
var moment = require('moment');

var data = require('./wpevent.json');
var htmlToText = require('html-to-text');


var items = data.rss.channel.item;

items.forEach(item => {
  
  res = '+++\n';
  var metas = item['wp:postmeta']
  var d = moment()
  metas.forEach(meta=> {
    if (meta['wp:meta_key'] === '_EventStartDate'){
      var d = moment(meta['wp:meta_value'])
     // console.log( d.format('YYYY-MM-DD HH:mm:ss'))
      res = res+ 'date = "' +d.format('YYYY-MM-DD HH:mm:ss') + '"\n'

    }
  })
  //2015-10-22 13:00:00
  
//  res = res+ 'date = "' + moment(item['wp:postmeta'][4]['wp:meta_value'])
  res = res + 'title = "' + item['title'].replace(/\"/g, '') + '"\n'
  
  res = res + 'abstract = "' +  htmlToText.fromString(item['content:encoded']).toString().replace(/\n/g, '').replace(/\"/g, '').replace(/\\o\//g, 'o ') + '"\n'
  res = res + 'abstract_short = "' +  htmlToText.fromString(item['content:encoded']).toString().replace(/\n/g, '').replace(/\"/g, '').replace(/\\o\//g, 'o ') + '"\n'
  res = res + 'event = "DiverSE coffee"\n'
  res = res + 'event_url = ""\n'
  res = res + 'location = "Rennes, France"\n'
  res = res + 'selected = false\n'
  res = res + 'math = false\n'
  res = res + 'url_pdf = ""\n'
  res = res + 'url_slides = ""\n'
  res = res + 'url_video = ""\n'
  res = res + '\n\n[header]\n\n'
  res = res + '#image = "talks/20171012.png"\n'
  res = res + 'caption = "French :fr:"\n'
  res = res + '+++\n'

  res = res + "\n\n" + item['content:encoded'].toString() + "\n"
  //  console.log(res);
  fs.writeFile(d.format('YYYYMMDD') + '-'+item['wp:post_name']+'.md', res, function(err) {
    if (err) throw err;
  });

/*
  date = "2018-06-21T18:30:00"
title = "Mutation Testing for Java"
abstract = "This talk introduces and illustrates the benefits of mutation testing to assess the quality of test suites. The intuition of this technique is simple: to determine if a test suite can detect bugs in a program, simply inject bugs in this program and check if the tests can detect them."
abstract_short = "This talk introduces and illustrates the benefits of mutation testing to assess the quality of test suites"
event = "breizhjug"
event_url = "http://www.breizhjug.org/#/events?q=Mutation%20Testing%20for%20Java/"
location = "Rennes, France"

selected = false
math = false

url_pdf = ""
url_slides = ""
url_video = "https://youtu.be/cxDiBOXLU84"

# Optional featured image (relative to `static/img/` folder).
[header]
#image = "talks/20171012.png"
caption = "French :fr:"
+++
*/
  
});

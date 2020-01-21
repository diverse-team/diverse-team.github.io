var parse = require("bibtex-parser")
var https = require('https');
var fs = require('fs');
var moment = require('moment');

https.get('https://haltools.inria.fr/Public/exportPubli.php?format_export=bibtex&annee_publideb=2014&labos_exp=diverse;triskell&CB_auteur=oui&CB_titre=oui&CB_article=oui&langue=Anglais&tri_exp=typdoc&tri_exp2=auteur_exp&tri_exp3=titre&ordre_aff=TA', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } 
  if (error) {
    console.error(error.message);
    // consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
        var pubs = parse((rawData.toString()));
        //console.log(pubs)
        var keys = Object.keys(pubs);
        keys.forEach(e => {

          var res = 'abstract = ""\n'
          res = res + 'authors = ["'+pubs[e].AUTHOR+'"]\n';
         
          if (pubs[e].MONTH != null)
            res = res + 'date = "'+moment(pubs[e].MONTH + ' ' +pubs[e].YEAR,"MMMM YYYY",'en').format('YYYY-MM-DD')+  '"\n'
          else{
            res = res + 'date = "'+moment(pubs[e].YEAR ,"YYYY",'en').format('YYYY-MM-DD')+  '"\n'
          }
//          console.log('janvier 2017',moment("MMM YYYY"))
//2016-10-03
          res = res + 'image_preview = ""\n'
          res = res + 'math = true\n'

//          # -1: Any
//          #  0: Uncategorized
//          #  1: Conference proceedings
//          #  2: Journal
//          #  3: Work in progress
//          #  4: Technical report
//          #  5: Book
//          #  6: Book chapter
//          res = res + 'publication_types = ["2"]\n'

          if (pubs[e].entryType==='ARTICLE'){
            res = res + 'publication_types = ["2"]\n'
          res = res + 'publication = "'+pubs[e].JOURNAL.replace(/\{/g, '').replace(/\}/g, '') + ', ' +pubs[e].PUBLISHER.replace(/\{/g, '').replace(/\}/g, '') +'"\n'
            res = res + 'publication_short = "In *'+pubs[e].JOURNAL.replace(/\{/g, '').replace(/\}/g, '') + ', ' +pubs[e].PUBLISHER.replace(/\{/g, '').replace(/\}/g, '')+'*"\n'
          }else if(pubs[e].entryType==='INPROCEEDINGS'){
            res = res + 'publication_types = ["1"]\n'

            res = res + 'publication = "'+pubs[e].BOOKTITLE.replace(/\{/g, '').replace(/\}/g, '')
            if (pubs[e].PUBLISHER!= null)
              res = res + ', '+ pubs[e].PUBLISHER.replace(/\{/g, '').replace(/\}/g, '')  
            res = res +'"\n'
            res = res + 'publication_short = "In *'+pubs[e].BOOKTITLE.replace(/\{/g, '').replace(/\}/g, '')
            if (pubs[e].PUBLISHER!= null)
              res = res + ', '+ pubs[e].PUBLISHER.replace(/\{/g, '').replace(/\}/g, '')              
            res = res +'*"\n'

          }else if(pubs[e].entryType==='INCOLLECTION'){
            res = res + 'publication_types = ["6"]\n'

            res = res + 'publication = "'+pubs[e].BOOKTITLE.replace(/\{/g, '').replace(/\}/g, '')
            if (pubs[e].PUBLISHER!= null)
              res = res + ', '+ pubs[e].PUBLISHER.replace(/\{/g, '').replace(/\}/g, '')  
            res = res +'"\n'
            res = res + 'publication_short = "In *'+pubs[e].BOOKTITLE.replace(/\{/g, '').replace(/\}/g, '')
            if (pubs[e].PUBLISHER!= null)
              res = res + ', '+ pubs[e].PUBLISHER.replace(/\{/g, '').replace(/\}/g, '')              
            res = res +'*"\n'

          }else if(pubs[e].entryType==='PROCEEDINGS'){
            res = res + 'publication_types = ["5"]\n'

            res = res + 'publication = "'+pubs[e].BOOKTITLE.replace(/\{/g, '').replace(/\}/g, '')
            if (pubs[e].PUBLISHER!= null)
              res = res + ', '+ pubs[e].PUBLISHER.replace(/\{/g, '').replace(/\}/g, '')  
            if (pubs[e].EDITOR!= null)
              res = res + ', '+ pubs[e].EDITOR.replace(/\{/g, '').replace(/\}/g, '')  
            if (pubs[e].SERIES!= null)
              res = res + ', '+ pubs[e].SERIES.replace(/\{/g, '').replace(/\}/g, '')  
            res = res +'"\n'
            res = res + 'publication_short = "In *'+pubs[e].BOOKTITLE.replace(/\{/g, '').replace(/\}/g, '')
            if (pubs[e].PUBLISHER!= null)
              res = res + ', '+ pubs[e].PUBLISHER.replace(/\{/g, '').replace(/\}/g, '');
            if (pubs[e].EDITOR!= null)
              res = res + ', '+ pubs[e].EDITOR.replace(/\{/g, '').replace(/\}/g, '')  
            if (pubs[e].SERIES!= null)
              res = res + ', '+ pubs[e].SERIES.replace(/\{/g, '').replace(/\}/g, '')                
            res = res +'*"\n'


          }else if(pubs[e].entryType==='BOOK'){
            res = res + 'publication_types = ["5"]\n'
            res = res + 'publication = "'
            if (pubs[e].PUBLISHER!= null)
              res = res + ', '+ pubs[e].PUBLISHER.replace(/\{/g, '').replace(/\}/g, '')  
            if (pubs[e].EDITOR!= null)
              res = res + ', '+ pubs[e].EDITOR.replace(/\{/g, '').replace(/\}/g, '')  
            if (pubs[e].SERIES!= null)
              res = res + ', '+ pubs[e].SERIES.replace(/\{/g, '').replace(/\}/g, '')  
            res = res +'"\n'
            res = res + 'publication_short = "In Book:'
            if (pubs[e].PUBLISHER!= null)
              res = res + ', '+ pubs[e].PUBLISHER.replace(/\{/g, '').replace(/\}/g, '');
            if (pubs[e].EDITOR!= null)
              res = res + ', '+ pubs[e].EDITOR.replace(/\{/g, '').replace(/\}/g, '')  
            if (pubs[e].SERIES!= null)
              res = res + ', '+ pubs[e].SERIES.replace(/\{/g, '').replace(/\}/g, '')                
            res = res +'*"\n'
          }else if(pubs[e].entryType==='PHDTHESIS'){
            res = res + 'publication_types = ["0"]\n'

            res = res + 'publication = "PhD: '+pubs[e].SCHOOL.replace(/\{/g, '').replace(/\}/g, '')+'"\n'
            res = res + 'publication_short = "In *'+pubs[e].SCHOOL.replace(/\{/g, '').replace(/\}/g, '') + '*"\n'
          }
          else if(pubs[e].entryType==='MISC'){
            res = res + 'publication_types = ["0"]\n'

            res = res + 'publication = "'+pubs[e].NOTE.replace(/\{/g, '').replace(/\}/g, '')
            if (pubs[e].HOWPUBLISHED!= null)
              res = res + ', '+ pubs[e].HOWPUBLISHED.replace(/\{/g, '').replace(/\}/g, '')  
            res = res +'"\n'
            res = res + 'publication_short = "In *'+pubs[e].NOTE.replace(/\{/g, '').replace(/\}/g, '')
            if (pubs[e].HOWPUBLISHED!= null)
              res = res + ', '+ pubs[e].HOWPUBLISHED.replace(/\{/g, '').replace(/\}/g, '')              
            res = res +'*"\n'
          }
          else if(pubs[e].entryType==='TECHREPORT'){
            res = res + 'publication_types = ["4"]\n'

            res = res + 'publication = "Report: '+pubs[e].INSTITUTION.replace(/\{/g, '').replace(/\}/g, '')+'"\n'
            res = res + 'publication_short = "In *'+pubs[e].INSTITUTION.replace(/\{/g, '').replace(/\}/g, '') + '*"\n'
          }
          else if(pubs[e].entryType==='UNPUBLISHED'){
            res = res + 'publication_types = ["3"]\n'

            res = res + 'publication = "'+pubs[e].NOTE.replace(/\{/g, '').replace(/\}/g, '')
            res = res +'"\n'
            res = res + 'publication_short = "In *'+pubs[e].NOTE.replace(/\{/g, '').replace(/\}/g, '') 
            res = res +'*"\n'
          }
          res = res + 'selected = false\n'
          res = res + 'title = "'+pubs[e].TITLE.replace(/\"/g, '').replace(/\{/g, '').replace(/\}/g, '')+'"\n'
          res = res + 'url_code = "'+pubs[e].URL+'"\n'
          res = res + 'url_dataset = ""\n'
          res = res + 'url_pdf = "'+pubs[e].PDF+'"\n'
          res = res + 'url_project = ""\n'
          res = res + 'url_slides = ""\n'
          res = res + 'url_video = ""\n'

          fs.writeFile(e.substring(e.indexOf(":") + 1)+'.md', '+++\n'+ res.replace(/\\\&/g, '&')+'\n+++\n', function(err) {
            if (err) throw err;
          });
            //console.log(res)
        });


    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});







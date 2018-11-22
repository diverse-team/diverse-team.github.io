const fs = require('fs');
const canvasModule = require("canvas");
const D3Node = require('d3-node')
const d3n = new D3Node({
    canvasModule
}); // pass it node-canvas
//const canvas = d3n.createCanvas(960, 500);
const d3 = d3n.d3
const d3scale = require('d3-scale')
const keyword_extractor = require("keyword-extractor");
var cloud = require("d3-cloud");

var parse = require("bibtex-parser")
var https = require('https');

function fill(n) {
    var colores_g = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];
    return colores_g[n % colores_g.length];
}

//var canvas = new canvasModule(1000,600);

/*function getWords(words) {
    function unique(value, index, self) {
        return value && self.indexOf(value) === index;
    }

    return words
        .replace(/[!\.,:;\?\]\[\(\)]/g, ' ')
        .split(' ')
        .filter(unique)
        .map(function (d) {
            return {
                text: d,
                size: 10 + Math.random() * 40,
                rotate: 60
            };
        })
}*/

function getWords(words) {
    var keys = Object.keys(words);
    var res = [];
    var common = ['le', 'la', 'les', 'dans', 'des', 'present', 'de', 'du', 'en', 'à', 'qui', 'sont', 'cet', 'cette', 'notre', 'un', 'une', 'est', 'ces', 'd\'un', 'avec', 'et', 'pour', 'par', 'los', 'sistemas', 'para', 'ce', 'sur', 'modelos', 'nous', 'je', 'tu', 'il', 'elle', 'ils', 'elles', 'vous', 'el', 'se']
    keys.forEach(key => {
        if (!common.includes(key)) {
            res.push({
                text: key,
                size: 10 + (words[key] - 10) * 3
            });
        }
    })
    return res;
}

https.get('https://haltools.inria.fr/Public/exportPubli.php?format_export=bibtex&annee_publideb=2016&annee_publifin=2018&labos_exp=diverse;triskell&CB_auteur=oui&CB_aff_abstract=oui&CB_titre=oui&CB_article=oui&langue=Anglais&tri_exp=typdoc&tri_exp2=auteur_exp&tri_exp3=titre&ordre_aff=TA', (res) => {
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
        // consume response data to free up memory
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
            var sentence = '';
            var pubs = parse((rawData.toString()));
            //console.log(pubs)
            var keys = Object.keys(pubs);
            keys.forEach(e => {
                if (pubs[e].KEYWORDS != null) {
                    sentence = sentence + ' ' + pubs[e].KEYWORDS;
                };
                if (pubs[e].ABSTRACT != null) {
                    sentence = sentence + ' ' + pubs[e].ABSTRACT;
                }
            });




            var extraction_result = keyword_extractor.extract(sentence, {
                language: "english",
                remove_digits: true,
                return_changed_case: true,
                remove_duplicates: false

            });
            var counts = {};
            var fcounts = {};
            extraction_result.forEach(function (x) {
                counts[x] = (counts[x] || 0) + 1;
            });
            var keys = Object.keys(counts);
            keys.forEach(key => {
                if (counts[key] > 10)
                    fcounts[key] = counts[key];
            });
            //console.log(Object.keys(fcounts).length);

            var layout = cloud().canvas(function () {
                    return new canvasModule(1,1);
                })

                .size([1000, 600])
                .words(getWords(fcounts)
                    /*.map(function(d) {
                          return {text: d, size: 10 + Math.random() * 90, test: "haha"};
                        })*/
                )
                .padding(2).spiral('archimedean')
                .rotate(function () {
                    return ~~((Math.random() * 12) * 15) - 90;
                })
                .font("Impact")

                .fontSize(function (d) {
                    return d.size;
                })
                .on("end", draw);

            layout.start();

            function draw(words) {
                //console.log('toto ' + JSON.stringify(words));
                d3n.createSVG(1000,600).append('g')
                    //    console.log( d3n.svgString());
                    //    console.log( d3n.document);
                    /*    d3.select("body").append("svg")
                     */
                    .attr("width", layout.size()[0])
                    .attr("height", layout.size()[1])
                    .append("g")
                    .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
                    .selectAll("text")
                    .data(words)
                    .enter().append("text")
                    .style("font-size", function (d) {
                        return d.size + "px";
                    })
                    .style("font-family", "Impact")
                    .style("fill", function (d, i) {
                        return fill(i);
                    })
                    .attr('font-size', 1)
                    .attr("text-anchor", "middle")
                    .attr("transform", function (d) {
                        // console.log(d);
                        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                    })
                    .text(function (d) {
                        return d.text;
                    });
                //canvas.pngStream().pipe(fs.createWriteStream('output.png'));
                console.log( d3n.svgString());
            }
        } catch (e) {
            console.error(e.message);
        }
    });
});

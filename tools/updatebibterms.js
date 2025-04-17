const {URL, URLSearchParams} = require('url');
const fetchbib = require('./fetchbib')
const fs = require('fs');

const generateWordCloud = require('./gencloud.js');

const HALTOOLS_EXPORT_URL =  'https://haltools.inria.fr/Public/exportPubli.php';

const EXPORT_PARAMETERS = {
    format_export: 'bibtex',
    annee_publideb: 2014,
    labos_exp: 'diverse',
    CB_article: 'oui',
    CB_auteur: 'oui',
    CB_titre: 'oui',
    ordre_aff: 'TA',
};

const PUBLICATIONS_PATH = '../data/publications.json'
const WORDCLOUD_PATH = '../static/images';


async function updatebib() {
    const url = new URL(HALTOOLS_EXPORT_URL);
    url.search = new URLSearchParams(EXPORT_PARAMETERS);
    
    console.log("Obtaining the list of publications from HAL");
    //Request publications
    const publications = await fetchbib(url.toString());

    console.log("Saving publications to " + PUBLICATIONS_PATH);
    //Save publications
    fs.writeFileSync(PUBLICATIONS_PATH, JSON.stringify(publications));

    console.log('Generating word clouds');
    generateWordCloud(publications, WORDCLOUD_PATH);
}



module.exports = updatebib;

const parse_bibtex = require('bibtex-parser');
const fetch = require('node-fetch');
const moment = require('moment');

async function fetchbib(url) {
    const response = await fetch(url);
    const bibtex = await response.text();
    const publications = parse_bibtex(bibtex);
    return process_publications(publications);
}

function process_publications(publications) {
    return Object.entries(publications).map(process_publication_entry);
}

function process_publication_entry([key, data], index) {
    return Object.assign({
        id: data.HAL_ID,
        authors: data.AUTHOR, //TODO: Convert to a list?
        abstract: bib`${data.ABSTRACT}`,
        keywords:  bib`${data.KEYWORDS}`.split(';').map(x => x.trim()),
        title: bib`${data.TITLE}`,
        date: extract_date(data),
        url_hal: data.URL,
        url_pdf: data.PDF
    },extract_publishing_details(data));
}

function extract_date(data) {
    let format = "YYYY";
    let input = data.YEAR;
    if(data.MONTH) {
        format = `"MMMM YYYY`;
        input = `${data.MONTH} ${data.YEAR}`
    }
    return moment(input, format, 'en').format('YYYY-MM-DD');
}

function extract_publishing_details(data) {
    //TODO: Handle the case when the entryType is not recognized
    return PUBLISHING_DETAILS[data.entryType](data);
}

function bib(strings, ...expressions) {
    //TODO: Verify if there is no need to deal with accents and alike
    let raw = interpolate(strings, expressions);
    return raw.replace(/\{/g, '').replace(/\}/g, '').replace(/\\\&/g, '&');
}

//Adapted from https://flaviocopes.com/javascript-template-literals/
function interpolate(literals, ...expressions) {
    let string = "";
    for (const [i, val] of expressions.entries()) {
        if(val === null) continue; // Skip null values and separators
        string += literals[i] + val;
    }
    string += literals[literals.length - 1];
    return string;
}

PUBLISHING_DETAILS = {
    ARTICLE: (data) => { return {
        publication_type: 'Journal', 
        publication: bib`${data.JOURNAL}, ${data.PUBLISHER}`,
    }},
    INPROCEEDINGS: (data) => { return {
        publication_type: 'Conference proceedings',
        publication: bib`${data.BOOKTITLE}, ${data.PUBLISHER}`, 
    }},
    INCOLLECTION: (data) => { return {
        publication_type: 'Book chapter',
        publication: bib`${data.BOOKTITLE}, ${data.PUBLISHER}`,
    }},
    PROCEEDINGS: (data) => { return {
        publication_type: 'Book',
        publication: bib`${data.BOOKTITLE}, ${data.PUBLISHER}, ${data.EDITOR}, ${data.SERIES}`
    }},
    BOOK: (data) => { return {
        publication_type: 'Book',
        publication: bib`${data.PUBLISHER}, ${data.EDITOR}, ${data.SERIES}`
    }},
    PHDTHESIS: (data) => { return {
        publication_type: 'PhD Thesis', 
        publication: bib`PhD: ${data.SCHOOL}`
    }},
    MISC: (data) => { return {
        publication_type: 'Uncategorized',
        publication: bib`PhD: ${data.NOTE}, ${data.HOWPUBLISHED}`
    }},
    TECHREPORT: (data) => { return  {
        publication_type: 'Technical report',
        publication: bib`${data.INSTITUTION}`
    }},
    UNPUBLISHED: (data) => { return {
        publication_type: 'Work in progress',
        publication: bib`${data.NOTE}`
    }}

}
 
module.exports = fetchbib;

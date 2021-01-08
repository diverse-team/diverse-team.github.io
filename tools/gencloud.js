const { Canvas } = require('canvas');
const cloud = require('d3-cloud');
const fs = require('fs');

const STOP_WORDS = new Set([
    // FR
    'le', 'la', 'les', 'dans', 'des', 'present', 'de', 'du', 'en', 'à', 'qui',
    'sont', 'cet', 'cette', 'notre', 'un', 'une', 'est', 'ces', 'd\'un', 'avec',
    'et', 'pour', 'par', 'los', 'sistemas', 'para', 'ce', 'sur', 'modelos',
    'nous', 'je', 'tu', 'il', 'elle', 'ils', 'elles', 'vous', 'el', 'se', 'au',
    'aux', 'afin', 'leur', 'partir', 'comme', 'peuvent', 'deux', 'pas', 'ainsi',
    'proposons', 'être', 'son',
    // EN https://gist.github.com/sebleier/554280
    "a", "about", "above", "after", "again", "against", "ain", "all", "am",
    "an", "and", "any", "are", "aren", "aren't", "as", "at", "be", "because",
    "been", "before", "being", "below", "between", "both", "but", "by", "can",
    "couldn", "couldn't", "d", "did", "didn", "didn't", "do", "does", "doesn",
    "doesn't", "doing", "don", "don't", "down", "during", "each", "few", "for",
    "from", "further", "had", "hadn", "hadn't", "has", "hasn", "hasn't", "have",
    "haven", "haven't", "having", "he", "her", "here", "hers", "herself", "him",
    "himself", "his", "how", "i", "if", "in", "into", "is", "isn", "isn't", 
    "it", "it's", "its", "itself", "just", "ll", "m", "ma", "me", "mightn",
    "mightn't", "more", "most", "mustn", "mustn't", "my", "myself", "needn",
    "needn't", "no", "nor", "not", "now", "o", "of", "off", "on", "once",
    "only", "or", "other", "our", "ours", "ourselves", "out", "over", "own",
    "re", "s", "same", "shan", "shan't", "she", "she's", "should", "should've",
    "shouldn", "shouldn't", "so", "some", "such", "t", "than", "that",
    "that'll", "the", "their", "theirs", "them", "themselves", "then", "there",
    "these", "they", "this", "those", "through", "to", "too", "under", "until",
    "up", "ve", "very", "was", "wasn", "wasn't", "we", "were", "weren",
    "weren't", "what", "when", "where", "which", "while", "who", "whom", "why",
    "will", "with", "won", "won't", "wouldn", "wouldn't", "y", "you", "you'd",
    "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves",
    "could", "he'd", "he'll", "he's", "here's", "how's", "i'd", "i'll", "i'm",
    "i've", "let's", "ought", "she'd", "she'll", "that's", "there's", "they'd",
    "they'll", "they're", "they've", "we'd", "we'll", "we're", "we've",
    "what's", "when's", "where's", "who's", "why's", "would"
]);

// Extracted from logo.svg
const DIVERSE_COLOR_SCALE = [
    '#ef2727', '#b92b32', '#b63138', '#b23440', '#af3845', '#9f4e66', '#9f4e66',
    '#9a4f69', '#9d536c', '#8e6488', '#986b92', '#a2729c', '#636f94', '#6b789f',
    '#5c80aa', '#587e8c', '#55769e', '#7581ab', '#6fa39c', '#689993', '#6ba083',
    '#6ca47a', '#6ea874', '#70ac6f', '#73ae72', '#618e88', '#5a847e', '#659b6b',
    '#5e9063', '#78c05f', '#71b258', '#74ba46', '#76c135', '#78c92b', '#7bc039',
    '#81d32f', '#7ac52c', '#82c131', '#81c130', '#8ec23e', '#91bb3c', '#93bb3e',
    '#adc14a', '#adc14a', '#bdb954', '#b1ad4e', '#a5a14a', '#cdb25f', '#c1a85a',
    '#d9ae63', '#cba15d', '#ddaa5c', '#e1a853', '#d19f4f', '#c39249', '#c39249',
    '#b58842', '#b48742', '#e0a852', '#d49c4a', '#c59145', '#e5a549', '#d8a04c',
    '#e8a444', '#d8993f', '#d89940', '#ca8e38', '#bc8433', '#eaa23b', '#da983a',
    '#cc8d34', '#bd8332', '#eaa23b', '#dd9735', '#cc8c34', '#ec9637', '#ec9637',
    '#dc8e37', '#cc812f', '#ea8a37', '#da8335', '#cb782f', '#e98135', '#da7931',
    '#cb702d', '#e87733', '#e87733', '#d9702f', '#e76f31', '#d8682f', '#e9713e',
    '#e76635', '#e76032', '#e02424', '#d12323', '#a04b62', '#7d89b7', '#c42020',
    '#bf262a', '#a84152', '#ab3d4b', '#a3495e', '#a4465a', '#a74356', '#ab3c4b'
];

//TODO: Word stemming to avoid having language and languages

const MODES = {
    LARGE: { width: 1000, height: 300, size_factor: 1.5, },
    MEDIUM: { width: 700,  height: 200, size_factor: 1.2, },
    SMALL: { width: 500,  height: 150, size_factor: 1, },
}
;

const FONT = "Impact";

const TERM_COUNT = 20;

function* terms(publications) {
    for(let pub of publications) {
        for(let kw of pub.keywords) {
            for(let part of kw.split(/\s+/).filter(x => x && ! STOP_WORDS.has(x))) {
                yield part.toLowerCase();
            }
        }
    }
}


function termCount(publications) {
    let histogram = new Map();

    for(let term of terms(publications)) {
        histogram.set(term, (histogram.has(term)?histogram.get(term):0) + 1);
    }

    let result = Array.from(histogram, ([key, value]) => { return  { term: key, count: value }; });
    result.sort((x, y) => y.count - x.count);
    return result;
}

function render(words, width, height) {
    let dom = 
    `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(${width/2}, ${height/2})">
    `;

    const rndcolor = () => DIVERSE_COLOR_SCALE[~~(Math.random() * DIVERSE_COLOR_SCALE.length)];

    Math.random()

    for(let item of words) {
        dom += 
        `
        <text  text-anchor="middle"
                style="font-family: ${item.font}; font-size: ${item.size}px; fill: ${rndcolor()}" 
                transform="translate(${item.x},${item.y})rotate(${item.rotate})">${item.term}</text>
        `
        ;
    }
    return dom +`</g></svg>`;
}

function wordcloud(terms, options, path) {
    const { width, height } = options;
    cloud()
        .canvas(() => new Canvas(width, height))
        .size([width, height])
        .words(terms)
        .text(t => t.term)
        .font(FONT)
        .padding(3)
        .fontSize(t => options.size_factor*t.count)
        .rotate(0)
        .on("end", (words) => fs.writeFileSync(path, render(words, width, height)))
        .start();
}

function generateWordCloud(publications, path) {
    let terms = termCount(publications).slice(0, TERM_COUNT);
    for(let mode in MODES) {
        wordcloud(terms, MODES[mode], `${path}/wordcloud-${mode.toLowerCase()}.svg`);
    }
}


module.exports = generateWordCloud;
const Parser = require('rss-parser');
const fs = require('fs');


const FEED_SOURCES = [
    { url: "https://mleduc.xyz/feed.xml", author: "Manuel Leduc" },
    { url: "http://olivier.barais.fr/feed.xml", author: "Olivier Barais" },
    { url: "https://torgen-engineering.blogspot.com/feeds/posts/default", author: "Arnaud Blouin" },
    { url: "http://blog.mathieuacher.com/feed.xml",  author: "Mathieu Acher" },
    { url: "https://varyvary.github.io/feed.xml", author: "VaryVary" }
]

const POSTS_PATH = '../data/posts.json';

async function fetchFeeds() {
    const parser = new Parser();
    let posts = [];
    for (let source of FEED_SOURCES) {
        let feed = await parser.parseURL(source.url);
        posts = posts.concat(feed.items.map( item => { item.author = item.author || source.author; return item; } ));
    }
    fs.writeFileSync(POSTS_PATH, JSON.stringify(posts));
}

fetchFeeds();

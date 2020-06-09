const { google } = require('googleapis');
const fs = require('fs');


const VIDEOS_PATH = '../data/videos.json'

const SEARCH_PARAMS = {
    channelId: 'UCIJQNB3HXuq3_Tl6u_tUeBA', //TODO: Remove duplicates by reading this from the config.yml file
    part: 'snippet',
    maxResults: 100,
    pageToken: undefined
};

async function updatevideos() {

    const youtube = google.youtube({ version: 'v3', auth: process.env.YOUTUBE_API_KEY });
    let videos = [];

    do {
        const response = await youtube.search.list(SEARCH_PARAMS);
        if(response.status !== 200) {
            console.log('Error retrieving list of videos');
            return;
        }
        let items = response.data.items;
        if(!items) { return; }
        items.forEach( item => videos.push({ 
            id: item.id.videoId, 
            title: item.snippet.title, 
            thumbnail: item.snippet.thumbnails.medium.url,
            published: item.snippet.publishedAt
        }));
        SEARCH_PARAMS.pageToken = response.pageToken;
    }
    while( SEARCH_PARAMS.pageToken );
    fs.writeFileSync(VIDEOS_PATH, JSON.stringify(videos));
}

module.exports = updatevideos;

updatevideos();

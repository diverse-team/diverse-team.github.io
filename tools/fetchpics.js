const {URL, URLSearchParams} = require('url');
const fetch = require('node-fetch');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const IMAGE_SIZE = 400;
const PROFILE_DIR = '../content/team';
const IMAGE_DIR = '../static/images/team';
const GITHUB_ID_REO = /\s*github\s*:\s*(?<id>\S+)/;


function get_filenames(directory, extension) {
    return new Set( glob.sync(`${directory}/*.${extension}`).map(item => path.basename(item, `.${extension}`)));
}

function get_profiles() {
    let result = get_filenames(PROFILE_DIR, 'md');
    result.delete('index');
    return result;
}

function get_images() {
    let jpgs = get_filenames(IMAGE_DIR, 'jpg');
    let pngs = get_filenames(IMAGE_DIR, 'png');
    return new Set([...jpgs, ...pngs]);
}

function get_profiles_with_no_image() {
    let profiles = get_profiles();
    let images = get_images();
    return new Set([...profiles].filter(item => !images.has(item)));
}

function get_github_id(profile) {
    const content = fs.readFileSync(`${PROFILE_DIR}/${profile}.md`, 'utf8');
    let match = GITHUB_ID_REO.exec(content);
    return match ? match.groups.id : null;
}

async function retrieve_github_image(profile) {
    const id = get_github_id(profile);
    if(!id) {
        return Promise.reject(new Error(`No Github id found for: ${profile}`));
    }
    //https://stackoverflow.com/questions/37614649/how-can-i-download-and-save-a-file-using-the-fetch-api-node-js
    const response = await fetch(`https://github.com/${id}.png?size=${IMAGE_SIZE}`);
    const stream = fs.createWriteStream(`${IMAGE_DIR}/${profile}.png`);
    return new Promise((resolve, reject) => {
        response.body.pipe(stream);
        response.body.on('error', reject);
        stream.on('finish', resolve);
    });
}


async function updateimages() {
    let profiles = get_profiles_with_no_image();
    console.log(`Profiles without image: ${profiles.size}`);
    for(let prof of profiles) {
        console.log(`Retrieving image for ${prof}`);
        await retrieve_github_image(prof)
            .catch((err) => `[ERROR] Could not retrieve image for ${prof}: ${err.message}`);
    }
}

updateimages();

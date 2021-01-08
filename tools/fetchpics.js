const fetch = require('node-fetch');
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const colors = require('colors');

const IMAGE_SIZE = 400;
const PROFILE_DIR = '../content/team';
const IMAGE_DIR = '../static/images/team';
const GITHUB_ID_REO = /\s*github\s*:\s*(?<id>\S+)/;
const CATEGORY_REO = /\s*category\s*:\s*(?<category>\S+)/;

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


function get_profile_info(profile) {
    const content = fs.readFileSync(`${PROFILE_DIR}/${profile}.md`, 'utf8');
    let githubMatch = GITHUB_ID_REO.exec(content);
    let categoryMatch = CATEGORY_REO.exec(content);
    return {
        category: categoryMatch ? categoryMatch.groups.category : null,
        github: githubMatch? githubMatch.groups.id : null,
        name: profile
    }
}

async function retrieve_github_image(info) {
    //https://stackoverflow.com/questions/37614649/how-can-i-download-and-save-a-file-using-the-fetch-api-node-js
    const response = await fetch(`https://github.com/${info.github}.png?size=${IMAGE_SIZE}`);
    const stream = fs.createWriteStream(`${IMAGE_DIR}/${info.name}.png`);
    return new Promise((resolve, reject) => {
        response.body.pipe(stream);
        response.body.on('error', reject);
        stream.on('finish', resolve);
    });
}


async function updateimages() {

    console.log("Finding missing profile images")
    let profiles = get_profiles_with_no_image();
    const isCurrentMember = (info) => !info.category || info.category === 'member';
    let currentMembers = [...profiles].map(get_profile_info).filter(isCurrentMember);

    console.log(`Profiles without image: ${currentMembers.length}`);

    for(let info of currentMembers) {
        if(!info.github) {
            console.warn(`${'[WARNING]'.yellow} No Github id for ${info.name}. Site will use default image.`);
            continue;
        }
        console.log(`Retrieving image for ${info.name}`);
        await retrieve_github_image(info)
            .catch((err) => console.error(`[ERROR] Could not retrieve image for ${info.name}: ${err.message}`.red));
    }
}

module.exports = updateimages;
const colors = require('colors');
const updatebib = require('./updatebibterms.js');
const updatevideos = require('./fetchvideos.js');
const fetchfeed = require('./fetchposts.js');
const updateimages = require('./fetchpics.js');


async function main() {

    const steps = [
        { title: "Updating bibliography items", command: updatebib    },
        { title: "Updating blog posts",         command: fetchfeed    },
        { title: "Updating profile images",     command: updateimages },
        { title: "Updating YouTube videos",     command: updatevideos }
    ];

    for (let step of steps) {
        console.log(step.title.green);
        try {
            await  step.command.call();
        }
        catch(err) {
            console.error(`[ERROR] ${err}\n`.red);
            console.error( err.stack )
            continue;
        }
        console.log('Done\n'.green);
    }

}

main();

// csvReader.js
const fs = require('fs');
const csv = require('csv-parser');

function readCSV(filename) {
    return new Promise((resolve, reject) => {
        const results = [];

        fs.createReadStream(filename)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

module.exports = readCSV ;

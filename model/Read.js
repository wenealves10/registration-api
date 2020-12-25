const fs = require('fs');
const path = require('path');

class Read{
    static Reading(pathName){
        const pathFile = path.resolve('databases',pathName);
        return fs.readFileSync(pathFile,{encoding:'utf-8'});
    }

    static ReadParse(dataFile){
        const data = JSON.parse(dataFile);
        return data;
    }
}

module.exports = Read;
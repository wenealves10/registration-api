const fs = require('fs').promises;
const path = require('path');

class Read{
    static async Reading(pathName){
        const pathFile = path.resolve('databases',pathName);
        return await fs.readFile(pathFile,{encoding:'utf-8'});
    }

    static ReadParse(dataFile){
        const data = JSON.parse(dataFile);
        return data;
    }
}

module.exports = Read;
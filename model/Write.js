const fs = require('fs').promises;
const path = require('path');

class Write{

    static async Writing(pathName, dataFile){
        this.pathFile = path.resolve('databases',pathName);
        this.dataFile = JSON.stringify(dataFile,' ',2);
        await fs.writeFile(this.pathFile, this.dataFile, {flag: 'w', encoding: 'utf-8'});
    }
}

module.exports = Write;
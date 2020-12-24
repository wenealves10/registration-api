const Read = require('../model/Read');

module.exports = (req, res) => {

    Read.Reading('data.json').then(dat => {
        res.statusCode = 200;
        res.json(Read.ReadParse(dat));
    }).catch(err => {
        res.statusCode = 404
        res.json({
            err: 'Erro Reading the file!!!'
        });
    })

}
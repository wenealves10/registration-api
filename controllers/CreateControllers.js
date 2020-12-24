const Write = require('../model/Write');
const Read = require('../model/Read');

module.exports = (req, res) => {
    const name = req.body.name;
    const year = req.body.year;
    Read.Reading('data.json').then(data =>{
        const datas = Read.ReadParse(data);
        datas.push({name, year});
        const people = new Write('data.json',datas);
        people.Writing().then(() =>{
            res.statusCode = 200;
            res.json({status:'Salve'});
        }).catch(err =>{
            res.statusCode = 400;
            res.json({err: 'Erro salve'});
        })
    }).catch(err => {
        res.statusCode = 404;
        res.json({err:'Erro crete'});
    })
}
require('dotenv/config');
const Read = require('./Read');
const Write = require('./Write');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class Login {

    constructor() {
        try {
            this.users = Read.ReadParse(Read.Reading('login.json'));
        } catch (err) {
            this.users = [];
        }
    }

    loginCreate(datas) {
        try {
            this.users = Read.ReadParse(Read.Reading('login.json'));
        } catch (err) {
            this.users = [];
        }

        let {
            name,
            email,
            password
        } = datas;

        if (name != undefined && name != '' &&
            email != undefined && email != '' &&
            password != undefined && password != '') {
            let user = this.users.find(usr => usr.email == email);
            if ((user == undefined)) {
                let salt = bcrypt.genSaltSync(10);
                let hash = bcrypt.hashSync(password, salt);
                this.users.push({
                    id: (this.users.length + 1) > 2 ? this.users[this.users.length - 1].id + 1 : this.users.length + 1,
                    name,
                    email,
                    password: hash,
                    date: Date.now()
                })
                try {
                    Write.Writing('login.json', this.users);
                    return true;
                } catch (err) {
                    return false;
                }

            } else {
                return false;
            }
        } else {
            return false;
        }

    }

   async loginUser(datas){
        let tokenUser = '';
        try {
            this.users = Read.ReadParse(Read.Reading('login.json'));
        } catch (err) {
            return false;
        }

        let {
            email,
            password
        } = datas;

        if(email != undefined && password != undefined && email != '' && password != ''){
            let user = this.users.find(usr => usr.email == email);
            if(user != undefined){
                let compare = bcrypt.compareSync(password, user.password);
                if(compare){
                    await jwt.sign({
                        id: user.id,
                        name: user.name
                    },process.env.SECRET,{
                        expiresIn: '48h'
                    },(err, token) =>{
                        if(!err){
                            tokenUser = token;
                        }else{
                            tokenUser = undefined;
                        }
                    });
                    return tokenUser;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }

    }

}

module.exports = Login;

// const login = new Login();
// // const log = login.loginCreate({
// //     name: 'Wene Alves de Oliveira',
// //     email:'weneplay5@gmail.com',
// //     password:'wenealves'
// // });
// // console.log(log);

// // const logn = login.loginUser({
// //     email:'wene@acad.com',
// //     password:'wenealves'

// // }).then((dt) =>{

// //     console.log(dt);
// // })


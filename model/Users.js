const Read = require('./Read');
const Write = require('./Write');

class Users {
    constructor() {
        try {
            this.users = Read.ReadParse(Read.Reading('data.json'));
        } catch (err) {
            this.users = [];
        }
    }

    get getsUsers() {
        return this.users
    }

    getUser(id) {
        let isNumber = !isNaN(parseInt(id));
        if (isNumber) {
            let idUser = parseInt(id) - 1;

            if (idUser >= 0 && idUser <= this.users.length - 1) {
                return this.users[idUser];
            } else {
                return -1
            }

        } else {
            return -1
        }
    }

    createUser(datas) {
        let {
            name,
            year
        } = datas;
        if (name != undefined && year != undefined) {
            if (name != '' && !isNaN(year)) {
                this.users.push({
                    name,
                    year,
                    id: (this.users.length + 1) > 2 ? this.users[this.users.length - 1].id + 1 : this.users.length + 1,
                    create: Date.now()
                });
                try {
                    Write.Writing('data.json', this.users)
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

    deleteUser(id) {
        let isNumber = !isNaN(parseInt(id));
        if (isNumber) {
            let idUser = parseInt(id);
            let index = this.users.findIndex(i => i.id == idUser);
            if (!(index == -1)) {
                this.users.splice(index, 1);
                try {
                    Write.Writing('data.json', this.users);
                    return true;
                } catch (err) {
                    return false;
                }

            }
        } else {
            return false
        }
    }

    putUser(id, body) {
        let { name, year } = body;
        let isNumber = !isNaN(parseInt(id));
        if (isNumber) {
            let idUser = parseInt(id);
            let user = this.users.find(usr => usr.id == idUser);
            console.log(user)
            if(user != undefined){
                let index = this.users.findIndex(i => i.id == user.id);
                console.log(index)
                if(!(index == -1)){
                    if (name != undefined) {
                        user.name = name;
                    }
        
                    if (year != undefined) {
                        user.year = year;
                    }
        
                    this.users.splice(index, 1, user);
                    try{
                        Write.Writing('data.json', this.users);
                        return true;
                    }catch(err){
                        return false
                    }

                }else{
                    return false;
                }
            }else{
                return false;
            }

        } else {
            return false
        }
    }



}

module.exports = Users;


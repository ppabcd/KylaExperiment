export class Banned {
    listBanned = []
    addOrUpdate(key, value){
        this.listBanned[key] = value
    }
    delete(key){
        delete this.listBanned[key]
    }
}

module.exports = {Banned}
const validator = require('validator')

export class Promotion{
    checkLink(text){
        const exp =
            // eslint-disable-next-line no-useless-escape
            /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
        const re = new RegExp(exp)
        const match = text.match(re)
        for (const m in match) {
            if (validator.isURL(match[m])) {
                return true
            }
        }
        return false
    }
    checkTag(text){
        return text.indexOf("@") !== -1
    }
    check(text){
        return this.checkLink(text) || this.checkTag(text)
    }
}
module.exports = {Promotion}
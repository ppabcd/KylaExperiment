export class Spam {
    listPotentialSpam = []

    check(userId, message) {
        if (!this.listPotentialSpam[userId]) {
            this.listPotentialSpam[userId] = {
                message: message,
                count: 0
            }
            return false
        }
        if (this.listPotentialSpam[userId].message === message) {
            this.listPotentialSpam[userId].count++
        }
        if(this.listPotentialSpam[userId] > 5){
            return true
        }
        return false
    }
}
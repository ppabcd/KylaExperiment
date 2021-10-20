export class SafeMode{
    listUsers = []
    set(userId, type){
        if(!this.listUsers[userId]){
            this.listUsers[userId] = {
                isSafeMode: type,
                totalChanges: 0
            }
            return
        }
        this.listUsers[userId] = {
            isSafeMode: type,
            totalChanges: this.listUsers[userId].totalChanges++
        }
    }
}
module.exports = {SafeMode}
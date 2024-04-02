const UserModel = require("./user.model")

class UserDAL {
    constructor(userName){
        this.userName = userName
        console.log(userName)
    }
    async getAllData(){
        try {
        //    const user = await UserModel.find({})
        //    return user
            return UserModel.find({})
        } catch (error) {
            console.log("An error has come about at user.dal.js Line 9")
            throw error
        }
    }
    createUser(){
        try {
            const users = this.userName
            const createdUser = UserModel.create(users)
            return createdUser
        } catch (error) {
            console.log("An error has come about at user.dal.js Line 18")
            throw error
        }
    }
}

module.exports = UserDAL
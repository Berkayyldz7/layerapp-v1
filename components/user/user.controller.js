const UserDAL = require("./user.dal")
const UserService = require("./user.service")

const UserModel = require("./user.model")



postUser = async(req,res)=>{
    try {
        const {name} = req.body
        const users = await new UserDAL({name}).createUser()
        res.status(201).send({users})
        
    } catch (error) {
        res.status(500).send({"msg":error})
        console.log("anaskm")
    }
}


const getUser = async (req,res)=>{
    const users = new UserDAL()
    const user = await users.getAllData()
    res.status(200).send({user})
}

module.exports = {
    getUser,
    postUser
}


// export default class UserController {
//     constructor() {
//         this.userService = new UserService();
//     }
//    async getUser (req,res) {
//         try {
//             const {id} = req.param;
//             return this.userService.findById(id);
//         } catch (error) {
//             res.status(500).send({"msg":error})
//         }
//     }
       
// }



// const postUsers = async (req,res)=>{
//     try {
//         const {name} = req.body
//         console.log({name})
//         const users =  await UserModel.create({name})
//         res.status(201).send({users})
//     } catch (error) {
//         res.status(500).send({"msg":error})
//         console.log("anaskm")
//     }
// }


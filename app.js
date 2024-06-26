const express = require("express")
const app = express();

const config = require("./components/config/index");
const connectDB = require("./components/data-access/db-connect/connect")
const {userRouter} = require("./components/user/user.api.index")

config()

app.use(express.json());

app.use("/api/v2",userRouter)

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
})

const start = async()=>{
    try {
        await connectDB()
    } catch (error) {
        console.log(error)
    }
    app.listen(process.env.PORT, ()=>{
        console.log(`the server listening on ${process.env.PORT}`);
    })
}

start()




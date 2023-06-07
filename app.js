const express = require('express');
const expressServer = express();
const cors = require('cors');
const PORT= 4000;
expressServer.use(cors());
expressServer.use(express.json());
const employeeController=require('./controllers/employee_controller/employee-controller');
//http://localhost:4000/api/employees
expressServer.use("/api/employees", employeeController);
expressServer.use("*",(req,res)=>{
    res.json("Not found!!!!!!!");
});
expressServer.listen(PORT,()=>{
    const MILi_SECONDS=3000;
    setInterval(()=>{
        console.log("app is upp and listen to PORT= 4000");
    },MILi_SECONDS);
});
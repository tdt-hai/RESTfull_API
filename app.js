const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('dev'))
app.use(express.json());
const PORT = 3000;

//API actors
const actorRouter = require("./routers/actors");
app.use("/api/actors/",actorRouter);
//API customer
const customerRouter = require("./routers/customers");
app.use("/api/customers/",customerRouter);

app.listen(PORT,function(){
    console.log(`Server is listening on ${PORT}`);
})

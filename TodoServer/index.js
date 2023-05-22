import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()

import todoRoutes from "./routes/todos.js"
import userRoutes from "./routes/users.js"

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/todos", todoRoutes );
app.use("/users", userRoutes)


 const url = process.env.URL;
 const PORT = process.env.PORT|| 2000;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);



// app.get("/api", function(req, res){
//   res.json({message: "Hello world from Server."})
// });

// app.get("/", function(req, res){
//   res.send("This is the server Home page");
// });

// app.post("/addInput", function(req, res){
//   const newInput = req.body
//   console.log(newInput)
//   res.send("This is the server Home page");
// });





// "scripts": {
//   "start": "node server/index.js"
// }

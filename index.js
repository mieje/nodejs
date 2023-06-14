import  express  from "express";
import mongoose  from 'mongoose';
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import postRoutes from "./routes/posts";
import likeRoutes from "./routes/likes";
import commentRoutes from "./routes/comments";

const app = express()

//middlewares
app.use(express.json())

//connect to mongodb
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);
app.use("/api/comments",commentRoutes);
app.use("/api/likes",likeRoutes);


app.listen(8800,()=>{
 console.log("backend working!")
})
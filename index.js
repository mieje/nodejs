const  express  = require("express") ;
const mongoose  = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const likeRoutes = require("./routes/likes");
const commentRoutes = require("./routes/comments");

const app = express();

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

// connect to mongodb
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/social-db');
}

app.use("/api/auth",authRoutes);
// app.use("/api/users",userRoutes);
// app.use("/api/posts",postRoutes);
// app.use("/api/comments",commentRoutes);
// app.use("/api/likes",likeRoutes);


app.listen(8800,()=>{
 console.log("backend working!")
})
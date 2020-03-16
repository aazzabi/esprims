const express = require("express");
const connectDB = require("./config/db")
const app = express();


//Connect To Data Base
connectDB();

app.get("/", (req, res) => res.send("api running"));

//Init Middleware
//bodyParser // elle doit etre avant les routes 
app.use(express.json({
    extended: false
}));

//Define Routes 
app.use('/api/users', require('./routes/api/users'))
app.use('/api/comment', require('./routes/api/commentApi'))
app.use('/api/Event', require('./routes/api/eventApi'))

app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/profile', require('./routes/api/profile'))






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
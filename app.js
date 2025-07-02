require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 5001;
const jobs_routes = require("./routes/jobs")


app.get('/', (req, res) => {
res.send("Hi, I am suraj and live from mac studio");
});

// middleware to set routers
app.use("/api/jobs", jobs_routes);


const start = async () => {
try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
        console.log(`${PORT} is live from mac studio`);
    });
}catch (error) {
    console.log(error);
}
};

start();
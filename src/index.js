import express from "express";
import rootRoute from "./routers/rootRoute.js";

const app = express();

app.use(express.json());
app.use(express.static('.'));

app.listen(8080);

app.use('/api', rootRoute)

app.get('/', (req, res) => {
    res.send('Hello world!')
})
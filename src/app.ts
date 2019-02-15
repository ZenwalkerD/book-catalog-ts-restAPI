import express from "express";
import * as bookController from "./Controllers/bookController";
import * as bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.set("port", 3000);
app.get("/books", bookController.allbooks);
app.get("/books/:id", bookController.getBook);

app.listen(app.get("port"),() => {
    console.log("app is running.." ,app.get("port"))
});
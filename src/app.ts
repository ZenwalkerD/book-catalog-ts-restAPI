import express from "express";

const app = express();
app.set("port", 3000);
app.get("/",(req: any, res: any)=>{
res.send("world world");
});

app.listen(app.get("port"),() => {
    console.log("app is running.." ,app.get("port"))
});
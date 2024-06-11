import "dotenv/config";
import express from "express";

if (!process.env.PORT) {
    console.error("Please define the PORT environment variable inside .env");
    process.exit(1);
}

const app = express();

app.get("/", (req, res) => res.send("<h1>Nothing to see here!</h1>"));
app.use(express.static("public"));
app.get("*", (req, res) => {
    const path = req.path.split("/")[1];
    
    res.sendFile(`./public/${path}/index.html`, { root: "."});
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});

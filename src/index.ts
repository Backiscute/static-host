import "dotenv/config";
import express from "express";

if (!process.env.PORT) {
    console.error("Please define the PORT environment variable inside .env");
    process.exit(1);
}

const app = express();

app.use(express.static("public"));

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});

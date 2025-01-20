import express from "express";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`server listening http:locahost:${PORT}`);


app.listen(PORT, handleListening);
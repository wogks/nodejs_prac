import "./db";
import "./models/video";
import app from "./server";




const PORT = 4000;
const handleListening = () => console.log(`server listening http://localhost:${PORT}`);


app.listen(PORT, handleListening);
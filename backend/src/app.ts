import express from express //importing express framework
import cors from cors //importing CORS middleware (HTTP)

const app = express(); //creating an express app instance 

app.use(cors()); //enabling CORS 
app.use(express.json()); //middleware to parse the incoming JSON request bodies

app.get("/healthcheck", (_req, res) => { //health checking endpoint
    res.json({status: "ok"}); //JSON response
}); 


export default app; //exporting the app into server.ts 

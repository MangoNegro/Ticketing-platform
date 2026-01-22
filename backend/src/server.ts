//SERVER CONFIGURATION 

import app from "./app"; //importing the past configured express app.ts 

const PORT = process.env.PORT || 4000; //defining the current port number/default to 4000

app.listen (PORT, () => { //initializating the HTTP server to listen on the defined port 
    console.log('server is currently running on port', PORT); //server running log message (lmao FINALLY)
});
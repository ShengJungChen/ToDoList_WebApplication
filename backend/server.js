import app from './api/app.js';

// use any port
const port = 9000;

// binds the application server to a port in the local and start listening to message on that port
app.listen(port, () => {
    console.log(`Server running at ${port}.`)
});
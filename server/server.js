const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: ["http://localhost:5173"],
};
const {PythonShell} = require('python-shell');

app.use(cors(corsOptions));

app.get("/api", (req, res, next)=> {
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], 
        args: ['./python/blackSilver_workflow.json'],
    };
    PythonShell.run('./python/api_call.py', options).then(messages=>{
        console.log('finished');
        res.send('finished');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
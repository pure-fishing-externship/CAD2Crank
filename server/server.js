const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: ["http://localhost:5173"],
};
const PythonShell = require('python-shell').PythonShell;

app.use(cors(corsOptions));

app.get("/api", python_call)

function python_call(req, res, next) {
    let options = {
        mode: 'text',
        args: ['./python/blackSilver_workflow.json'],
    };
    PythonShell.run('./python/api_call.py', options, function (err) {
        if (err) throw err;
        res.send('finished');
    });
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
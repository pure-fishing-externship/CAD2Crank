const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: ["http://localhost:5173"],
};
const PythonShell = require('python-shell').PythonShell;
const fs = require('fs')

//const multer = require('multure');
//const upload = multer({ dest: 'uploads/' });

app.use(cors(corsOptions));

//app.use(express.json());

//python api build 
//console.log('Data sent to python script:', undefined);
//const python_process = spawner('python3', ['./python/api_call.py', undefined]);

//app.get("/api", (req, res) =>{
//    res.json({"fruits": ["apple", "strawberry", "banana"]});
//});

app.post("/api", python_call)

function python_call(req, res) {
    PythonShell.run('./api_call.py', null, function (err) {
        if (err) throw err;
        res.send('finished');
    });
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
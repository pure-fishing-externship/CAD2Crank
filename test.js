const PythonShell = require('python-shell').PythonShell;

PythonShell.run('api_call.py', null, function (err) {
  if (err) throw err;
  console.log('finished');
});
const { spawn } = require('child_process');

// Print Working Directory
const pwd = spawn('pwd');
pwd.stdout.pipe(process.stdout);

// Read content of a file
const { HOME } = process.env;
const cat = spawn('cat', [`${HOME}/.bash_profile`]);
cat.stdout.pipe(process.stdout);

// List files
const ls = spawn('ls', ['-l', '.']);
ls.stdout.pipe(process.stdout);

// Use Shell Syntax
const shell = spawn('ls -al ~ | wc -l', { shell: true });
shell.stdout.pipe(process.stdout);

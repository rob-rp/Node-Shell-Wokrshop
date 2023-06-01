const pwd = require('./pwd');
// pwd();
// // console.log(pwd());

console.log(process.cwd());// use an if statement to see what gets typed in so we can use process.cwd() to print path

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline

  process.stdout.write('You typed: ' + cmd + process.cwd());
  process.stdout.write('\nprompt > ');
});
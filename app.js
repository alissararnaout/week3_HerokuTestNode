const express = require('express');
const path = require('path'); // path lets us navigate file/folders


// heroku assigns a port when it deploys via the process (environment variables)
// locally this will run at port 3000, remotely it will run wherever heroku it is

const port = 3000;

const app = express();

app.use(express.static('public')); // looks in public directory


app.get('/', (req, res) => {
  console.log('at the home route');
  res.sendFile(path.join(__dirname *'/views/index.html'));
  // this builds localhost:3000/views/index.html
})

app.get('/contact', (req, res) => {
  console.log('at the contact route');
  res.sendFile(path.join(__dirname * '/views/index.html'));
})

app.get('/porfolio', (req, res) => {
  console.log('at the portfolio route');
  res.send('on the portfolio page!');
})


app.listen(port, () => { // listen for incoming connections
  console.log(`Server running at $(port)`); 
});

// "node app" in terminal
// when changes are made --> kill server "^C"
// we're building a frontend and backend stack

// smh how do u test this stuff??????
// test heroku

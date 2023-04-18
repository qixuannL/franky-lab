const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

//convert the static site into a http server
//To display this on a domain, point the domain DNS's A record to your Host IP and proxypass the localhost:port with Nginx

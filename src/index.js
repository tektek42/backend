const express = require("express");

const { port } = require("./configs")();

const db = require('./services/mongodb');

const app = express();

require("./services/express")(app);

async function start() {
   console.log('listen on', port);
   try {
     await db.connect();
   } catch (err) {
     console.log(err);
     setTimeout(start, 3000);
   }
 }

app.listen(port, start);
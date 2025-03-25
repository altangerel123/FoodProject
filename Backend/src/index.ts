import { connect } from "./database";

import app from "./app";
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3003;

connect();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const dotenv = require("dotenv");
dotenv.config({ path: "./src/config/.env" });
dotenv.config({ path: "./api/config.env" });
const app = require("./src/app");
const db = require("./src/config/db");


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

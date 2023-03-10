const mongoose = require("mongoose");

const database = async () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      process.env.NODE_ENV == "Development"
        ? process.env.DB_URL_DEV
        : process.env.DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = database;

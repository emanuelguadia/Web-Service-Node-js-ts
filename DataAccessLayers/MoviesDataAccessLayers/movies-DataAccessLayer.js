const mongoose = require("mongoose");
function connect() {
  const connectionString = "mongodb://localhost:27017/IMDBMoviesDatabase";
  const options = { useNewUrlParser: true, useUnifiedTopology: true };
  return new Promise((resolve, reject) => {
    mongoose.connect("mongodb://localhost:27017/IMDBMoviesDatabase", options, (err, db) => {
      if (err) {
        reject(err);
        return;
      }
      // Create a new database
      db.createDatabase("IMDBMoviesDatabase", function (err) {
        if (err) throw err;
        console.log("Database created!");
      });

      // Create a new collection
      db.createCollection("Movies", function (err) {
        if (err) throw err;
        console.log("Collection created!");
      });
      resolve(db);
    });
  });
}
(async () => {
  try {
    const db = await connect();
    console.log("connected to IMDBMoviesDatabase");
  } catch (err) {
    console.error(err);
  }
})();

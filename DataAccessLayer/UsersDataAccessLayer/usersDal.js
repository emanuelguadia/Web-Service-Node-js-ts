const mongoose = require("mongoose");
function connectingToMongooseDb() {
  return new promises((resolve, reject) => {
    const connectingString1 ="mongodb://localhost:27017/ chatAndBackGammonDb"
    const connectingString = "mongooseDb://${config.mongooseDb.host}:${config.mongooseDb.Port}/${config.mongooseDb.database}";
    const options = {UseNewUrlParser:true,useUnifiedTopology:true};
    mongoose.connect(connectingString1,options,(err, db) => {
      if (err) {
        reject(err);
      }
      resolve(db);
    });
  });
}
//----------------------------------------------------------------------------------------
(async () => {
  try {
    const db = await connectingToMongooseDb();
    console.log(
      "We are connecting to db.database" + db.name + "database on mongoDb"
    );
  } catch (err) {
    console.log(err);
  }
})();

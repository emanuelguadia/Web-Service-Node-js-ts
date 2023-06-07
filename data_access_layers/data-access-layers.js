const mysql = require("mysql");
let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employeeSystem",
});
db.connect((error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(
    "The Connection with to employeeSystem in mysql db connected successful "
  );
});
function sendQueryMysqlWithNodeJs(sql,values) {
  return new Promise((resolve,reject) => {
    db.query(sql,values, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}
module.exports = {
  sendQueryMysqlWithNodeJs,
};

import mysql from "mysql";

const connection = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "8qoLl0YA1oTE1w0j",
  database: "webwat"
});
export default connection;

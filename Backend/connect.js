const mysql = require("mysql");

const db = mysql.createConnection({
    host: "bbs2gueasalvxqvbsztj-mysql.services.clever-cloud.com",
    user: "uxbggo27etyox17k",
    password: "KVJ84ezkIFEn9rdWscth",
    database: "bbs2gueasalvxqvbsztj"
});
db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

module.exports = db;

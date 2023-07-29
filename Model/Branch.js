const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./MasterDB.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS BRANCH (
      Branch_name TEXT,
      Branch_code TEXT PRIMARY KEY,
      Opening_date TEXT,
      Ifsc_code TEXT,
      Address TEXT,
      Galli TEXT,
      Street TEXT,
      Landmark TEXT,
      Taluka TEXT,
      District TEXT,
      State TEXT,
      Country TEXT,
      City TEXT,
      Pincode TEXT,
      Phone_no TEXT,
      Telephone_no TEXT,
      Email_id TEXT
    )
  `);
});


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./MasterDB.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS DIRECTOR (
      Director_id INTEGER PRIMARY KEY,
      Designation TEXT,
      Appointment_date DATE,
      Resignation_date DATE,
      Member_id INTEGER,
      Director_Name TEXT,
      Din_no TEXT,
      Capital_invested REAL,
      FOREIGN KEY (Member_id) REFERENCES MEMBERS(Member_id)
    )
  `);
});

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./MasterDB.db');

function generateNextMemberId() {
  return new Promise((resolve, reject) => {
    db.get('SELECT MAX(Member_id) AS maxId FROM MEMBERS', (err, row) => {
      if (err) {
        reject(err);
        return;
      }

      let nextMemberId = 'M00001';
      if (row && row.maxId) {
        const lastMemberId = row.maxId;
        if (typeof lastMemberId === 'string') {
          const numericPart = parseInt(lastMemberId.substring(1), 10);
          const nextNumericPart = numericPart + 1;
          nextMemberId = 'M' + nextNumericPart.toString().padStart(5, '0');
        }
      }

      resolve(nextMemberId);
    });
  });
}

module.exports = generateNextMemberId;

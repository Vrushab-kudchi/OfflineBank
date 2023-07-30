const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./MasterDB.db');

const directorController = {
  getAdd: (req, res) => {
    db.all(`SELECT * FROM MEMBERS`,  (err, member) => {
      if (err)
      {
        res.send("error while Fetching Members");
      }
      else
      {
        res.render('Director/addDirector', { member });
      }
    })

  },

    postAdd: (req, res) => {
    const { designation, appointment_date, resignation_date, member_id, director_name, din_no, capital_invested } = req.body;

    // Perform any data processing or validation here

    // Insert data into the DIRECTOR table
    db.all(
      `INSERT INTO DIRECTOR (Designation, Appointment_date, Resignation_date, Member_id, Director_Name, Din_no, Capital_invested)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [designation, appointment_date, resignation_date, member_id, director_name, din_no, capital_invested],
      (err) => {
        if (err) {
          res.send('Error while inserting data into the DIRECTOR table');
        } else {
          // Successfully inserted data, you can redirect or send a success response
          res.redirect('/director'); // Redirect to a directors listing page or any other appropriate route
        }
      }
    );
  },
  director: (req, res) => {
    res.render('Director/Director');
  }

};

module.exports = directorController;

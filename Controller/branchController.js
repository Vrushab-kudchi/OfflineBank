const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./MasterDB.db');

const branchController = {
  add: (req, res) => {
    res.render('Branch/addBranch');
  },
edit: (req, res) => {
    const id = req.params.id;
    db.all(`SELECT * FROM BRANCH WHERE Branch_code = ?`, [id], (err, data) => {
        if (err)
        {
            res.send("Error while finding the branch");
        }
        else
        {
            res.render('Branch/editBranch' ,{data: data[0]});
        }
    })

  // You can now use the id to fetch the data of the specific branch from the database and pass it to the editBranch template for editing.
},


   branch: (req, res) => {
  db.all(`SELECT * FROM BRANCH`, (err, branch) => {
    if (err) {
      res.send("Error while fetching the data");
    } else {
      // Pass the branch data to the EJS template
      res.render('Branch/branch', { branch: branch });
    }
  });
},


  addPost: (req, res) => {
    const {
      Branch_name,
      Opening_date,
      Branch_code,
      Address,
      Ifsc_code,
      Street,
      Galli,
      Taluka,
      Landmark,
      State,
      District,
      City,
      Country,
      Phone_no,
      Pincode,
      Telephone_no,
      Email_id
    } = req.body;

    db.run(
      `INSERT INTO BRANCH (
        Branch_name,
        Opening_date,
        Branch_code,
        Address,
        Ifsc_code,
        Street,
        Galli,
        Taluka,
        Landmark,
        State,
        District,
        City,
        Country,
        Phone_no,
        Pincode,
        Telephone_no,
        Email_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        Branch_name,
        Opening_date,
        Branch_code,
        Address,
        Ifsc_code,
        Street,
        Galli,
        Taluka,
        Landmark,
        State,
        District,
        City,
        Country,
        Phone_no,
        Pincode,
        Telephone_no,
        Email_id
      ],
      (err) => {
        if (err) {
          res.send("Error while inserting");
        } else {
            res.redirect('/branch');
        }
      }
    );
    },
    postedit: (req, res) => {
        const {
            Branch_name,
            Opening_date,
            Branch_code,
            Address,
            Ifsc_code,
            Street,
            Galli,
            Taluka,
            Landmark,
            State,
            District,
            City,
            Country,
            Phone_no,
            Pincode,
            Telephone_no,
            Email_id
        } = req.body;

        db.run(
            `
    UPDATE BRANCH
    SET Branch_name = ?,
        Opening_date = ?,
        Address = ?,
        Ifsc_code = ?,
        Street = ?,
        Galli = ?,
        Taluka = ?,
        Landmark = ?,
        State = ?,
        District = ?,
        City = ?,
        Country = ?,
        Phone_no = ?,
        Pincode = ?,
        Telephone_no = ?,
        Email_id = ?
    WHERE Branch_code = ?
    `,
            [
                Branch_name,
                Opening_date,
                Address,
                Ifsc_code,
                Street,
                Galli,
                Taluka,
                Landmark,
                State,
                District,
                City,
                Country,
                Phone_no,
                Pincode,
                Telephone_no,
                Email_id,
                Branch_code // Don't forget to include the Branch_code for the WHERE clause
            ],
            (err) => {
                if (err) {
                    res.send("Error while updating the branch");
                } else {
                    res.redirect('/branch'); // Redirect to the home page or any other appropriate page after successful update
                }
            }
        )
    }
}

module.exports = branchController;

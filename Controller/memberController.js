const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./MasterDB.db');

const memberController = {

  getAdd: (req, res) => {
    db.all(`SELECT * FROM BRANCH`, (err, branch) => {
      if (err)
      {
        res.send("failed to Fetch Branch")
      }
      else
      {
       res.render('./members/addMember' ,{branch});
        }
        })

    },

        getEdit: (req, res) => {
        const id = req.params.id;
        db.all(`SELECT * FROM MEMBERS WHERE Member_id = ?`, [id], (err, data) => {
            if (err) {
                res.send("Failed to fetch the member");
            } else {
                db.all(`SELECT * FROM BRANCH`, (err, branch) => {
                    if (err) {
                        res.send("Failed to fetch data from the BRANCH table");
                    } else {
                        res.render('./members/editMember', {
                            data: data[0],
                            branch: branch // Pass the branch data to the template
                        });
                    }
                });
            }
        });
    },

postAdd: (req, res) => {
    const {
      Branch_code,
      Joining_date,
      Prefix,
      First_name,
      Middle_name,
      Last_name,
      Gender,
      Date_of_birth,
      Education,
      Occupation,
      Marital_status,
      Religion,
      Category,
      If_other,
      Aadhar_no,
      Pan_no,
      Voter_no,
      Ration_no,
      Electricity_bill_no,
      Driving_license_no,
      Passport_no,
      Other_kyc,
      Father_name,
      Father_occupation,
      Father_age,
      Mother_name,
      Mother_occupation,
      Mother_age,
      Spouse_name,
      Spouse_occupation,
      Spouse_age,
      Member_name_list,
      House_no,
      Galli,
      Street,
      Landmark,
      District,
      Taluka,
      State,
      Country,
      City,
      Pincode,
      Full_address,
      Phone_no,
      Telephone_no,
      Email_id,
      Nominee_full_name,
      Nominee_relation,
      Nominee_phone_no,
      Nominee_aadhar_no,
      Nominee_pan_no,
      Nominee_voter_no,
      Nominee_ration_no,
      Nominee_driving_license_no,
      Nominee_other_kyc,
      Nominee_full_address,
      Photo_image,
      Signature_image,
      Aadhar_image,
      Pan_image,
      Other_kyc_image,
    } = req.body;

    db.run(`
  INSERT INTO MEMBERS (
    Branch_code, Joining_date, Prefix, First_name, Middle_name, Last_name, Gender, Date_of_birth, Education,
    Occupation, Marital_status, Religion, Category, If_other, Aadhar_no, Pan_no, Voter_no, Ration_no,
    Electricity_bill_no, Driving_license_no, Passport_no, Other_kyc, Father_name, Father_occupation,
    Father_age, Mother_name, Mother_occupation, Mother_age, Spouse_name, Spouse_occupation, Spouse_age,
    Member_name_list, House_no, Galli, Street, Landmark, District, Taluka, State, Country, City, Pincode,
    Full_address, Phone_no, Telephone_no, Email_id, Nominee_full_name, Nominee_relation, Nominee_phone_no,
    Nominee_aadhar_no, Nominee_pan_no, Nominee_voter_no, Nominee_ration_no, Nominee_driving_license_no,
    Nominee_other_kyc, Nominee_full_address, Photo_image, Signature_image, Aadhar_image, Pan_image,
    Other_kyc_image
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`, [Branch_code, Joining_date, Prefix, First_name, Middle_name, Last_name, Gender, Date_of_birth, Education,
    Occupation, Marital_status, Religion, Category, If_other, Aadhar_no, Pan_no, Voter_no, Ration_no,
    Electricity_bill_no, Driving_license_no, Passport_no, Other_kyc, Father_name, Father_occupation,
    Father_age, Mother_name, Mother_occupation, Mother_age, Spouse_name, Spouse_occupation, Spouse_age,
    Member_name_list, House_no, Galli, Street, Landmark, District, Taluka, State, Country, City, Pincode,
    Full_address, Phone_no, Telephone_no, Email_id, Nominee_full_name, Nominee_relation, Nominee_phone_no,
    Nominee_aadhar_no, Nominee_pan_no, Nominee_voter_no, Nominee_ration_no, Nominee_driving_license_no,
    Nominee_other_kyc, Nominee_full_address, Photo_image, Signature_image, Aadhar_image, Pan_image,
    Other_kyc_image
],(err) => {
      if (err) {
        console.error('Error inserting member:', err);
        res.status(500).send('Error inserting member');
        return;
      }

      console.log('New member inserted successfully!');
      res.redirect('/member'); // Redirect to the home page or any other appropriate page
    });
  },

  Members: (req, res) => {
      db.all('SELECT * FROM MEMBERS', (err, members) => {
    if (err) {
      console.error('Error fetching members:', err);
      // Handle the error and send an appropriate response to the client.
      res.status(500).json({ error: 'Error fetching members' });
    } else {
      // Send the list of members as the response.
      res.render('./members/members' ,{members})
    }
  });
  },
   postEdit: (req, res) => {
        const {
            Member_id,
            Branch_code,
            Joining_date,
            Prefix,
            First_name,
            Middle_name,
            Last_name,
            Gender,
            Date_of_birth,
            Education,
            Occupation,
            Marital_status,
            Religion,
            Category,
            If_other,
            Aadhar_no,
            Pan_no,
            Voter_no,
            Ration_no,
            Electricity_bill_no,
            Driving_license_no,
            Passport_no,
            Other_kyc,
            Father_name,
            Father_occupation,
            Father_age,
            Mother_name,
            Mother_occupation,
            Mother_age,
            Spouse_name,
            Spouse_occupation,
            Spouse_age,
            Member_name_list,
            House_no,
            Galli,
            Street,
            Landmark,
            District,
            Taluka,
            State,
            Country,
            City,
            Pincode,
            Full_address,
            Phone_no,
            Telephone_no,
            Email_id,
            Nominee_full_name,
            Nominee_relation,
            Nominee_phone_no,
            Nominee_aadhar_no,
            Nominee_pan_no,
            Nominee_voter_no,
            Nominee_ration_no,
            Nominee_driving_license_no,
            Nominee_other_kyc,
            Nominee_full_address,
            Photo_image,
            Signature_image,
            Aadhar_image,
            Pan_image,
            Other_kyc_image,
        } = req.body;

        db.run(
            `UPDATE MEMBERS SET
                Branch_code = ?,
                Joining_date = ?,
                Prefix = ?,
                First_name = ?,
                Middle_name = ?,
                Last_name = ?,
                Gender = ?,
                Date_of_birth = ?,
                Education = ?,
                Occupation = ?,
                Marital_status = ?,
                Religion = ?,
                Category = ?,
                If_other = ?,
                Aadhar_no = ?,
                Pan_no = ?,
                Voter_no = ?,
                Ration_no = ?,
                Electricity_bill_no = ?,
                Driving_license_no = ?,
                Passport_no = ?,
                Other_kyc = ?,
                Father_name = ?,
                Father_occupation = ?,
                Father_age = ?,
                Mother_name = ?,
                Mother_occupation = ?,
                Mother_age = ?,
                Spouse_name = ?,
                Spouse_occupation = ?,
                Spouse_age = ?,
                Member_name_list = ?,
                House_no = ?,
                Galli = ?,
                Street = ?,
                Landmark = ?,
                District = ?,
                Taluka = ?,
                State = ?,
                Country = ?,
                City = ?,
                Pincode = ?,
                Full_address = ?,
                Phone_no = ?,
                Telephone_no = ?,
                Email_id = ?,
                Nominee_full_name = ?,
                Nominee_relation = ?,
                Nominee_phone_no = ?,
                Nominee_aadhar_no = ?,
                Nominee_pan_no = ?,
                Nominee_voter_no = ?,
                Nominee_ration_no = ?,
                Nominee_driving_license_no = ?,
                Nominee_other_kyc = ?,
                Nominee_full_address = ?,
                Photo_image = ?,
                Signature_image = ?,
                Aadhar_image = ?,
                Pan_image = ?,
                Other_kyc_image = ?
            WHERE Member_id = ?`,
            [
                Branch_code,
                Joining_date,
                Prefix,
                First_name,
                Middle_name,
                Last_name,
                Gender,
                Date_of_birth,
                Education,
                Occupation,
                Marital_status,
                Religion,
                Category,
                If_other,
                Aadhar_no,
                Pan_no,
                Voter_no,
                Ration_no,
                Electricity_bill_no,
                Driving_license_no,
                Passport_no,
                Other_kyc,
                Father_name,
                Father_occupation,
                Father_age,
                Mother_name,
                Mother_occupation,
                Mother_age,
                Spouse_name,
                Spouse_occupation,
                Spouse_age,
                Member_name_list,
                House_no,
                Galli,
                Street,
                Landmark,
                District,
                Taluka,
                State,
                Country,
                City,
                Pincode,
                Full_address,
                Phone_no,
                Telephone_no,
                Email_id,
                Nominee_full_name,
                Nominee_relation,
                Nominee_phone_no,
                Nominee_aadhar_no,
                Nominee_pan_no,
                Nominee_voter_no,
                Nominee_ration_no,
                Nominee_driving_license_no,
                Nominee_other_kyc,
                Nominee_full_address,
                Photo_image,
                Signature_image,
                Aadhar_image,
                Pan_image,
                Other_kyc_image,
                Member_id, // Member_id to specify which member's information to update
            ],
            (err) => {
                if (err) {
                    res.send("Error while updating member");
                } else {
                    res.redirect('/member'); // Redirect to a specific page after successful update
                }
            }
        );
    }


}



module.exports = memberController;

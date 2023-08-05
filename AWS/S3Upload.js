const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3({
  region: 'us-east-1',
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey
});

function s3Upload(file, filename) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: 'demo831',
    Key: filename,
    Body: fileStream
  };

  return new Promise((resolve, reject) => {
    s3.putObject(uploadParams, (err, data) => {
      if (err) {
        console.error('Error uploading image to S3:', err);
        reject(err);
      } else {
        const imageUrl = `https://demo831.s3.amazonaws.com/${filename}`;
        console.log("Image URL:", imageUrl);
        resolve(imageUrl);
      }
    });
  });
}

module.exports = {
  s3Upload
};

const fs = require("fs");
const path = require("path");
const { S3 } = require("aws-sdk");

const REGION = process.env.AWS_REGION;
const s3Client = new S3({ region: REGION });

async function uploadImage (filePath) {
    const buffer = fs.readFileSync(filePath);
    const data = await s3Client.putObject({
        Bucket: process.env.AWS_BUCKET,
        Key: `uploads/${path.basename(filePath)}`,
        Body: buffer
    }).promise();
    return data;
}

async function downloadImage (filename) {
    const data = await s3Client.getObject({
        Bucket: process.env.AWS_BUCKET,
        Key: `uploads/${filename}`
    }).promise();
    return data.Body;
}

module.exports = { uploadImage, downloadImage };

import AWS from 'aws-sdk';

const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION,
});

export async function uploadToS3(buffer, bucketName, key) {
	const params = {
		Bucket: bucketName,
		Key: key,
		Body: buffer,
		ContentType: 'image/jpeg',
	};

	const result = await s3.upload(params).promise();
	return result.Location; // S3 URL
}

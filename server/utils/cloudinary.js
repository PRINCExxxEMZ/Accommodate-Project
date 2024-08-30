const cloudinary = require('cloudinary').v2

cloudinary.config({
    // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    // api_key: process.env.CLOUDINARY_API_KEY,
    // api_secret: process.env.CLOUDINARY_SECRET_KET
 
    cloud_name: 'dqz58sdx2',
    api_key: '422762242387172',
    api_secret: 'F-ff2LqdFq0KkSv3XYaua8LtptA'

});

module.exports = cloudinary;
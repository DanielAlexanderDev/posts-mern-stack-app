const { v2 } = require("cloudinary");
const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = require("../config");

v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadImage = async (filePath) => {
  return await v2.uploader.upload(filePath, {
    folder: "post-images",
  });
};
const deleteImage = async (id) => {
  return await v2.uploader.destroy(id);
};

module.exports = { uploadImage, deleteImage };

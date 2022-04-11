const { v2 } = require("cloudinary");

v2.config({
  cloud_name: "dgilljit4",
  api_key: "226911253277868",
  api_secret: "4_Jgdv1a11pH9BgSw39-WxfTxeo",
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

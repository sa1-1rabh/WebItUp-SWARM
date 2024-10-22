const url = "https://api.cloudinary.com/v1_1/dbvmq5rze/image/upload";

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "fullstack_products");
  const dataResponse = await fetch(url, {
    method: "POST",
    body: formData,
  });

  return dataResponse.json();
};

export default uploadImage;

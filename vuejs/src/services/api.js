import axios from "axios";

// register  a user
export const sendEmail = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/send-mail",
      formData
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

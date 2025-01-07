const axios = require ("axios");
const API_URL = "http://172.30.176.1:8080/api/auth/local/register";
const API_TOKEN = "Bearer e980eb73704e01ea7d77bf0b629149073cbbe1451b77cecbe4a80ab51348f567cee80b12415cf92b86417df9b008c72e57ba6c1c5c7b86c42cd451a428dfdfe4452818afce33a3bc862442a2aac31e0a09338f04c727bce2c4675804ea0ed39b5c6a95746f7bda1d586094d75ae532e09a1ea27d0917049bf5cafc9bd0d3db6d";
const payload = {
    username : "Chiraphat",
    email :  "chiraphatphengphit@gmail.com",
    password : "Chiraphat220544",
};
axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("ส่ง API สําเร็จ", response.data);
  })
  .catch((err) => {
    console.log("ส่งไม่ผ่าน ", err);
  });
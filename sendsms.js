const url = "https://api.umeskiasoftwares.com/api/v1/sms";
const data = {
  api_key: "XXXXXXXXXXXXXXXXXX=", // Replace with your API key
  email: "example@gmail.com", // Replace with your email
  Sender_Id: "23107", // If you have a custom sender id, use it here OR Use the default sender id: 23107
  message: "UMS SMS Api Test Message",
  phone: "0768XXXXX60", // Phone number should be in the format: 0768XXXXX60 OR 254768XXXXX60 OR 254168XXXXX60
};

fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const success = data.success;
    if (success === "200") {
      const request_id = data.request_id;
      const message = data.message;
      console.log(`Sms sent successfully, with request_id: ${request_id} and message: ${message}`);
    } else {
      const resultCode = data.ResultCode;
      const errorMessage = data.errorMessage;
      console.log(`Sms not sent, with ResultCode: ${resultCode} and errorMessage: ${errorMessage}`);
    }
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });

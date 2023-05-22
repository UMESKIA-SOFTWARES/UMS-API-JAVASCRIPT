const url = "https://api.umeskiasoftwares.com/api/v1/smsbalance";
const data = {
  api_key: "XXXXXXXXXXXXXXXXXX=", // Replace with your API key
  email: "example@gmail.com", // Replace with your email
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
      const creditBalance = data.creditBalance;
      console.log(`Sms Balance retrieved successfully, with creditBalance: ${creditBalance}`);
    } else {
      const resultCode = data.ResultCode;
      const errorMessage = data.errorMessage;
      console.log(`Sms not sent, with ResultCode: ${resultCode} and errorMessage: ${errorMessage}`);
    }
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });

const request = require("request");
const dbParams = require("../lib/db");

exports.dataController = (req, res) => {
  // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
  
  let url =
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=FAGS590EYBXES5QC";

  const smack = request.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" },
    },
    (err, res, data) => {
      if (err) {
        console.log("Error:", err);
      } else if (res.statusCode !== 200) {
        console.log("Status:", res.statusCode);
      } else {
        // data is successfully parsed as a JSON object:
        console.log(data);
      }
    }
  );
  return res.json({smack})
};

const insertStock = (stock) => {
//write a few seeds to test with
//iterate through the object (very similar to selectors from schedulers)

  
}



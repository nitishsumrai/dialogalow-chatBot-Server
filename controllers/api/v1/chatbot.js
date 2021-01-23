const runSample = require("../../../config/dialogflow");
module.exports.queryChatBot = (req, res) => {
  let msg = req.body.userQuery;
  console.log(msg);
  runSample(msg).then(
    (data) => {
      const result = data[0].queryResult;

      return res.status(200).json({
        message: "successfully queried",
        data: {
          msg: result.fulfillmentText,
          intent: result.intent.displayName,
        },
      });
    },
    (rejected) => {
      console.log("data", rejected);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  );
};

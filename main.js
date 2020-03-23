require("dotenv").config();

var VisualRecognitionV3 = require("watson-developer-cloud/visual-recognition/v3");

const apiKey = String(process.env.API_KEY);

var visualRecognition = new VisualRecognitionV3({
  version: "v3",
  iam_apikey: apiKey
});

var VisualRecognitionV3 = require("watson-developer-cloud/visual-recognition/v3");
var fs = require("fs");

var visualRecognition = new VisualRecognitionV3({
  version: "2018-03-19",
  iam_apikey: apiKey
});

var images_file = fs.createReadStream("./images/causa.jpg");
var classifier_ids = ["default"];
var threshold = 0.6;

var params = {
  images_file: images_file,
  classifier_ids: classifier_ids,
  threshold: threshold
};

visualRecognition.classify(params, function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(response, null, 2));
  }
});

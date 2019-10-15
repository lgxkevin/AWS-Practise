const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

var pages = 0;

let params = {
  TableName: 'td_notes',
  Limit: 3
};

docClient.scan(params, function scanUntilDone(err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    // do something with data

    if (data.LastEvaluatedKey) {
      params.ExclusiveStartKey = data.LastEvaluatedKey;

      docClient.scan(params, scanUntilDone);
      console.log('data: ',data.Items);
    } else {
      console.log('data1: ',data.Items);
      // all results scanned.
      console.log('Done');
    }
  }
});


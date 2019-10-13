const aws = require("aws-sdk");
aws.config.update({region: 'us-east-2'});

const docClient = new aws.DynamoDB.DocumentClient();

// docClient.put({
//   TableName: 'td_notes',
//   Item: {
//     user_id: 'bb',
//     timestamp: 1,
//     title: 'title',
//     content: 'content'
//   }
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

// docClient.update({
//   TableName: 'td_notes',
//   Key: {
//     user_id: 'bb',
//     timestamp: 1,
//   },
//   UpdateExpression: 'set #t = :t',
//   ExpressionAttributeNames: {
//     '#t': 'title'
//   },
//   ExpressionAttributeValues: {
//     ':t' : 'New Title'
//   }
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

// docClient.delete({
//   TableName: 'td_notes',
//   Key: {
//     user_id: 'bb',
//     timestamp: 1,
//   },
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

docClient.batchWrite({
  RequestItems: {
    'td_notes': [
      {
        DeleteRequest: {
          Key: {
            user_id: '89jij23d',
            timestamp: 1559879126
          }
        }
      },
      {
        PutRequest: {
          Item: {
            user_id: 'asd1dazxc',
            timestamp: 1559879526,
            title: 'batchTitle',
            content: 'batchContent'
          }
        }
      }
    ]
  }
}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})
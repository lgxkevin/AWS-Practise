const aws = require("aws-sdk");
aws.config.update({region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

// https://docs.aws.amazon.com/en_pv/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html

// docClient.put({
//     TableName: 'td_notes',
//     Item: {
//         user_id: 'ABC',
//         timestamp: 1,
//         title: 'New Title',
//         content: 'New Content'
//     },
//     ConditionExpression: '#t <> :t',
//     ExpressionAttributeNames: {
//         '#t': 'timestamp'
//     },
//     ExpressionAttributeValues: {
//         ':t': 1
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

docClient.update({
  TableName: 'td_notes',
  Key: {
      user_id: 'ABC',
      timestamp: 1
  },
  UpdateExpression: 'set #v = #v + :incr',
  ExpressionAttributeNames: {
      '#v': 'views'
  },
  ExpressionAttributeValues: {
      ':incr': 1
  }
}, (err, data)=> {
  if(err) {
      console.log(err);
  } else {
      console.log(data);
  }
});
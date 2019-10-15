const aws = require("aws-sdk");
aws.config.update({region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.get({
//     TableName: 'td_notes',
//     Key: {
//         user_id: 'A',
//         timestamp: 1
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

//* Directly access items from a table by primary key or a secondary index.

// docClient.query({
//     TableName: 'td_notes',
//     KeyConditionExpression: "user_id = :uid",
//     ExpressionAttributeValues: {
//         ":uid": "A"
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


//* If you perform scan operation it fetches all items in that table 
//* and filter out data after it takes that data.
//* Don't perform scan operation it exceeds your RCU.

// docClient.scan({
//     TableName: 'td_notes',
//     FilterExpression: "cat = :cat",
//     ExpressionAttributeValues: {
//         ":cat": "general"
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

//* Returns the attributes of one or more items from one or more tables
docClient.batchGet({
    RequestItems: {
        'td_notes': {
          Keys: [
            {
               user_id: 'A',
               timestamp: 1
            },
            {
                user_id: 'B',
                timestamp: 2
            }
          ]
        },
        'td_notes_sdk': {
          Keys: [
            { 
                user_id: '11',
                timestamp: 1
            }
          ]
        }
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});
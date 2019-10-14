const aws = require("aws-sdk");
aws.config.update({region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.put({
    TableName: 'td_notes',
    Item: {
        user_id: 'ABC',
        timestamp: 1,
        title: 'New Title',
        content: 'New Content'
    },
    // https://docs.aws.amazon.com/en_pv/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html
    ConditionExpression: '#t <> :t',
    ExpressionAttributeNames: {
        '#t': 'timestamp'
    },
    ExpressionAttributeValues: {
        ':t': 1
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
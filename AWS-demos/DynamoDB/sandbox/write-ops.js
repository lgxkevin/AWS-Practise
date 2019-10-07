const aws = require("aws-sdk");
aws.config.update({region: 'us-east-2'});

const docClient = new aws.DynamoDB.DocumentClient();


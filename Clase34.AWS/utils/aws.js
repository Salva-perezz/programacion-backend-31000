import AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1",
});

const sns = new AWS.SNS();
const dynamodb = new AWS.DynamoDB.DocumentClient();

const scanDynamoRecords = async (scanParams) => {
  try {
    let dynamoData = await dynamodb.scan(scanParams).promise();
    const items = dynamoData.Items;

    while (dynamoData.LastEvaluatedKey) {
      scanParams.ExclusiveStartKey = dynamoData.LastEvaluatedKey;

      dynamoData = await dynamodb.scan(scanParams).promise();

      items.push(...dynamoData.Items);
    }

    return items;
  } catch (error) {
    throw { error };
  }
};

export const awsService = { scanDynamoRecords, sns, dynamodb };

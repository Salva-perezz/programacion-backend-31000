import { awsService } from "../utils/aws.js";

const TABLE_NAME = "product-inventory";
const SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:495702199171:notification";

const getProducts = async (req, res) => {
  const params = {
    TableName: TABLE_NAME,
  };

  try {
    const products = await awsService.scanDynamoRecords(params);

    res.json(products);
  } catch (error) {
    throw { error };
  }
};

const addProduct = async (req, res) => {
  const params = {
    TableName: TABLE_NAME,
    Item: req.body,
  };
  try {
    await awsService.dynamodb.put(params).promise();

    const product = JSON.stringify(req.body);

    await awsService.sns
      .publish({
        Message: `New product added: ${product}`,
        Subject: "New product",
        TopicArn: SNS_TOPIC_ARN,
      })
      .promise();

    const body = {
      Operation: "SAVE",
      Message: "SUCCESS",
      Item: req.body,
    };

    res.json(body);
  } catch (error) {
    console.log("Error", error);
    res.sendStatus(500);
  }
};

const updateProduct = async (req, res) => {
  try {
    const item = {
      ...req.body,
      productId: req.params.id,
    };

    const params = {
      TableName: TABLE_NAME,
      Item: item,
    };

    await awsService.dynamodb.put(params).promise();

    await awsService.sns
      .publish({
        Message: `Product updated: ${req.params.id}`,
        Subject: "Update product",
        TopicArn: SNS_TOPIC_ARN,
      })
      .promise();

    const body = {
      Operation: "UPDATE",
      Message: "SUCCESS",
      Item: item,
    };

    res.json(body);
  } catch (error) {
    console.log("Error", error);
    res.sendStatus(500);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        productId: req.params.id,
      },
      ReturnValues: "ALL_OLD",
    };

    const dynamodbResponse = await awsService.dynamodb.delete(params).promise();

    await awsService.sns
      .publish({
        Message: `Product deleted: ${JSON.stringify(dynamodbResponse)}`,
        Subject: "Delete product",
        TopicArn: SNS_TOPIC_ARN,
      })
      .promise();

    const body = {
      Operation: "DELETE",
      Message: "SUCCESS",
      Item: dynamodbResponse,
    };

    res.json(body);
  } catch (error) {
    console.log("Error", error);
    res.sendStatus(500);
  }
};

export const productController = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};

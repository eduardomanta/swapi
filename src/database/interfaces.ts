import { DynamoDB } from "aws-sdk";

export interface IDynamoDb {
    db(): DynamoDB.DocumentClient;
}
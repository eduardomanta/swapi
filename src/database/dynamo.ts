
import { DynamoDB } from 'aws-sdk';
import { injectable } from 'inversify';
import { IDynamoDb } from './interfaces';

@injectable()
export class DynamoDb implements IDynamoDb {
  db(): DynamoDB.DocumentClient {
    return new DynamoDB.DocumentClient({
      region: process.env.DYNAMO_AWS_REGION || 'us-east-1',
      maxRetries: 10
    });
  }
}
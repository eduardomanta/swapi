import { Vehiculo } from "../dto/vehiculo";
import { RespuestaGenerica } from "../dto/respuestaGenerica";
import { DynamoDb } from "../database/dynamo";
import { inject, injectable } from "inversify";
import TYPES from "../types";
import { IVehiculoModel } from "./interfaces";
import { v4 as uuidv4 } from 'uuid';


const VEHICULOS_TABLE = process.env.DYNAMO_TABLE_VEHICULOS || 'dev-api-vehiculos';

@injectable()
export class VehiculoModel implements IVehiculoModel {

  @inject(TYPES.IDynamoDb)
  dynamo: DynamoDb;

  async listar(): Promise<Array<Vehiculo>> {
    const db = this.dynamo.db();
    let data = await db.scan({
      TableName: VEHICULOS_TABLE,
    }).promise();
    return data.Items as any;
  }

  async guardar(vehiculo: Vehiculo): Promise<any> {
    const db = this.dynamo.db();

    await db.put({
      TableName: VEHICULOS_TABLE,
      Item: {
        ...vehiculo,
        id: uuidv4(),
      }
    }).promise();
  }

}

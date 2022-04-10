
import "reflect-metadata";
import { Container } from "inversify";
import { DynamoDb } from "./database/dynamo";
import { IDynamoDb } from "./database/interfaces";
import { IVehiculoModel } from "./model/interfaces";
import { VehiculoModel } from "./model/vehiculoModel";
import { IVehiculoService } from "./services/interfaces";
import { VehiculoService } from "./services/vehiculoService";
import TYPES from "./types";
const container = new Container({ autoBindInjectable: true });

// Services
container.bind<IDynamoDb>(TYPES.IDynamoDb).to(DynamoDb).inSingletonScope();
container.bind<IVehiculoModel>(TYPES.IVehiculoModel).to(VehiculoModel).inSingletonScope();
container.bind<IVehiculoService>(TYPES.IVehiculoService).to(VehiculoService).inSingletonScope();

export default container;

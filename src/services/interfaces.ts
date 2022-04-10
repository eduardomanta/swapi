import { RespuestaGenerica } from "../dto/respuestaGenerica";
import { Vehiculo } from "../dto/vehiculo";

export interface IVehiculoService {
    listar(): Promise<Array<Vehiculo>>;
    guardar(parametros: Vehiculo): Promise<RespuestaGenerica>;
}
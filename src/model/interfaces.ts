import { Vehiculo } from "../dto/vehiculo";

export interface IVehiculoModel{
    listar(): Promise<Array<Vehiculo>>;
    guardar(vehiculo: Vehiculo): Promise<any>;

}
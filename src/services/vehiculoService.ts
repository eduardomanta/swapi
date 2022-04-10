import { inject, injectable } from "inversify";
import { RespuestaGenerica } from "../dto/respuestaGenerica";
import { Vehiculo } from "../dto/vehiculo";
import { IVehiculoService } from "./interfaces";
import * as axios from "axios";
import TYPES from "../types";
import { IVehiculoModel } from "../model/interfaces";

@injectable()
export class VehiculoService implements IVehiculoService {

    @inject(TYPES.IVehiculoModel)
    vehiculoModel: IVehiculoModel;

    async listar(): Promise<Vehiculo[]> {
        const dataDynamo = await this.vehiculoModel.listar();
        dataDynamo.forEach((x:any)=> delete x.id);

        const { data } = await axios.default.get(`${process.env.SWAPI_BASE}vehicles/`);
        const dataServicio = data.results.map(x => ({
            clase: x.vehicle_class,
            capacidadPasajeros: x.passengers,
            enlacePilotos: x.pilots,
            nombre: x.name,
            fechaCreacion: x.created,
            enlace: x.url,
            capacidadTransporteKg: x.cargo_capacity,
            fechaEdicion: x.edited,
            tiempoDuracionAlimentos: x.consumables,
            maximaVelocidadAtm: x.max_atmosphering_speed,
            numeroPersonal: x.crew,
            longitudMtr: x.length,
            enlacePeliculasDondeAparecio: x.films,
            nombreOficial: x.model,
            costoCreditosGalacticos: x.cost_in_credits,
            fabricante: x.manufacturer
        }));

        dataDynamo.push(dataServicio);

        return dataDynamo;
    }

    async guardar(parametros: Vehiculo): Promise<RespuestaGenerica> {
        await this.vehiculoModel.guardar(parametros);
        return {
            respuesta: true
        }
    }


}
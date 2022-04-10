import { inject, injectable } from "inversify";
import { IVehiculoService } from "../services/interfaces";
import TYPES from "../types";
import { api, apiController, apiOperation, apiRequest, ApiRequest, apiResponse, body, Controller, GET, noAuth, POST } from "ts-lambda-api";
import { Vehiculo } from "../dto/vehiculo";
import { RespuestaGenerica } from "../dto/respuestaGenerica";
import { BaseController } from "./baseController";
import validator from "validator";

@apiController("/swapi")
@api("SWAPI API", "Api integrar los servicios del SWAPI")
@injectable()
export class SwapiController extends BaseController {

    @inject(TYPES.IVehiculoService)
    private readonly vehiculoService: IVehiculoService;

    public constructor() {
        super();
    }

    @GET("/vehiculos")
    @apiOperation({ name: "vehiculos", description: "obtener los vehiculos que aparecieron en star wars" })
    @apiResponse(200, {
        type: "object-array",
        class: Vehiculo,

    })
    @noAuth
    public async listar() {
        try {
            return await this.vehiculoService.listar();
        } catch (err) {
            console.log(err);
        }
    }

    @POST("/vehiculos")
    @apiOperation({ name: "vehiculos", description: "guardar vehiculos que aparecieron en star wars" })
    @apiRequest({
        class: Vehiculo,
        description: "atributos del objecto vehículo"
    })
    @apiResponse(200, {
        class: RespuestaGenerica,
    })
    @noAuth
    public async guardar(@body vehiculo: Vehiculo) {
        try {


            if (
                validator.isEmpty(vehiculo.clase || '') ||
                validator.isEmpty(vehiculo.capacidadPasajeros || '') ||
                !Array.isArray(vehiculo.enlacePilotos) ||
                validator.isEmpty(vehiculo.nombre || '') ||
                validator.isEmpty(vehiculo.tiempoDuracionAlimentos || '') ||
                validator.isEmpty(vehiculo.capacidadTransporteKg || '') ||
                validator.isEmpty(vehiculo.longitudMtr || '') ||
                validator.isEmpty(vehiculo.enlace || '') ||
                validator.isEmpty(vehiculo.maximaVelocidadAtm || '') ||
                validator.isEmpty(vehiculo.numeroPersonal || '') ||
                validator.isEmpty(vehiculo.fechaCreacion || '') ||
                validator.isEmpty(vehiculo.fechaEdicion || '') ||
                !Array.isArray(vehiculo.enlacePeliculasDondeAparecio) ||
                validator.isEmpty(vehiculo.nombreOficial || '') ||
                validator.isEmpty(vehiculo.fabricante || '') ||
                validator.isEmpty(vehiculo.costoCreditosGalacticos || '')) {
                return this.response.status(400).json(null);

            }

            return await this.vehiculoService.guardar({
                clase: vehiculo.clase,
                capacidadPasajeros: vehiculo.capacidadPasajeros,
                enlacePilotos: vehiculo.enlacePilotos,
                nombre: vehiculo.nombre,
                tiempoDuracionAlimentos: vehiculo.tiempoDuracionAlimentos,
                capacidadTransporteKg: vehiculo.capacidadTransporteKg,
                longitudMtr: vehiculo.longitudMtr,
                enlace: vehiculo.enlace,
                maximaVelocidadAtm: vehiculo.maximaVelocidadAtm,
                numeroPersonal: vehiculo.numeroPersonal,
                fechaCreacion: vehiculo.fechaCreacion,
                fechaEdicion: vehiculo.fechaEdicion,
                enlacePeliculasDondeAparecio: vehiculo.enlacePeliculasDondeAparecio,
                nombreOficial: vehiculo.nombreOficial,
                fabricante: vehiculo.fabricante,
                costoCreditosGalacticos: vehiculo.costoCreditosGalacticos,
            });
        } catch (err) {
            console.log(err);
        }
    }
}

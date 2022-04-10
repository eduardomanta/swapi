
import TYPES from '../src/types';
import container from '../src/inversify.config';
import { expect } from 'chai';
import { IVehiculoService } from '../src/services/interfaces';


describe('vehiculoService', () => {
    const vehiculoService = container.get<IVehiculoService>(TYPES.IVehiculoService);
    it('listarTest', async () => {
        const response = await vehiculoService.listar();
        expect(response.length).to.greaterThan(0);
    });

    it('guardarTest', async () => {
        const response = await vehiculoService.guardar(
            {
                "clase": "prueba", 
                "capacidadPasajeros": "30", 
                "enlacePilotos": [], 
                "nombre": "prueba", 
                "fechaCreacion": "2014-12-10T15:36:25.724000Z", 
                "enlace": "https://swapi.py4e.com/api/vehicles/4/", 
                "capacidadTransporteKg": "50000", 
                "fechaEdicion": "2014-12-20T21:30:21.661000Z", 
                "tiempoDuracionAlimentos": "2 months", 
                "maximaVelocidadAtm": "30", 
                "numeroPersonal": "46", 
                "longitudMtr": "36.8 ",
                 "enlacePeliculasDondeAparecio": ["https://swapi.py4e.com/api/films/1/", "https://swapi.py4e.com/api/films/5/"], 
                 "nombreOficial": "prueba", 
                 "costoCreditosGalacticos": "150000", 
                 "fabricante": "Corellia Mining Corporation",
            }
        );
        expect(response.respuesta).to.equal(true);
    });
});

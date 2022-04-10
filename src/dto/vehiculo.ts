export class Vehiculo {
    id?:string;
    clase: string;
    capacidadPasajeros: string;
    enlacePilotos: Array<string>;
    nombre: string;
    tiempoDuracionAlimentos: string;
    capacidadTransporteKg: string;
    longitudMtr: string;
    enlace: string;
    maximaVelocidadAtm: string;
    numeroPersonal: string;
    fechaCreacion: string;
    fechaEdicion: string;
    enlacePeliculasDondeAparecio: Array<string>;
    nombreOficial: string;
    fabricante: string;
    costoCreditosGalacticos:string;

    public static example() {
        let vehiculo = new Vehiculo()

        vehiculo.clase = "wheeled";
        vehiculo.capacidadPasajeros = "12";
        vehiculo.enlacePilotos = ["www.google.com"];
        vehiculo.nombre = "R2D2";
        vehiculo.tiempoDuracionAlimentos = "2 month";
        vehiculo.capacidadTransporteKg = "15";
        vehiculo.longitudMtr = "10";
        vehiculo.enlace = "";
        vehiculo.maximaVelocidadAtm = "";
        vehiculo.numeroPersonal = "";
        vehiculo.fechaCreacion = "";
        vehiculo.fechaEdicion = "";
        vehiculo.enlacePeliculasDondeAparecio = [];
        vehiculo.nombreOficial = "";
        vehiculo.fabricante = "";
        vehiculo.costoCreditosGalacticos="";
        return vehiculo
    }
 
}
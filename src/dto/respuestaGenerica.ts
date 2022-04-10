export class RespuestaGenerica{
    respuesta:boolean;
    mensaje?:string;
    codigoError?:string;

    public static example() {
        let respuestaGenerica = new RespuestaGenerica();
        respuestaGenerica.respuesta=true;
        respuestaGenerica.mensaje="registro guardado correctamente";
        respuestaGenerica.codigoError="ERROR_SAVED"
        return respuestaGenerica;
    }
}
import{Tramite} from './tramite-regulatorio'
export class SolicitudDEI {
    idSolicitud!:number;
    nombreDelSolicitante!:string;
    fechaDeSolicitud!:Date;
    descripcionDelProducto!:string;
    tipoDeProducto!:string;
    documentacionTecnica!:string;
    tipoDeRegistro!:string;
    tramiteRegulatorio!:Tramite;
}

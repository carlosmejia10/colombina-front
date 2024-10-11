import{Tramite} from './tramite-regulatorio'
export class SeuimientoDelTramite {
    idSeguimiento!:number;
    fechaDeSeguimiento!:Date;
    estadoActual!:string;
    accionesRealizadas!:string;
    comentarios!:string;
    tramiteRegulatorio!:Tramite;
}

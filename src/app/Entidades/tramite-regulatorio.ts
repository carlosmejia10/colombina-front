import{ExpedienteRegulatorio}from './expediente-regulatorio'
import{SeuimientoDelTramite} from'./seuimiento-del-tramite'
import{EntidadSanitaria} from'./entidad-sanitaria'
import{ArchivosDeControlDeTramites} from './archivos-de-control-de-tramites'
import{AsuntosRegulatorios} from'./asuntos-regulatorios'
import{SolicitudDEI} from'./solicitud-dei'
export class Tramite {
    idTramite!:number;
    numeroDeRegistro!:number;
    tipoDeTramite!:string;
    estadoDelTramite!:boolean;
    fechaDeRadicacion!:Date;
    fechaDeAprobacionRechazo!:Date;
    descripcionDelTramite!:string;
    plazoDeRespuesta!:Date;
    ExpedienteRegulatorio!:ExpedienteRegulatorio;
    seuimientoDelTramite!:SeuimientoDelTramite;
    EntidadSanitaria!:EntidadSanitaria;
    ArchivosDeControlDeTramites!:ArchivosDeControlDeTramites;
    AsuntosRegulatorios!:AsuntosRegulatorios;
    SolicitudDEI!:SolicitudDEI;
}

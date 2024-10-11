import {Tramite} from'./tramite-regulatorio'
export class ArchivosDeControlDeTramites {
    idRegistro!:number;
    fechaDeCreacion!:Date;
    estadoTramite!:boolean;
    historialDeModificaciones!:string;
    tramiteRegulatorio!:Tramite;
}

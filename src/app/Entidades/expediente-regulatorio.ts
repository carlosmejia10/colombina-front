import {Tramite} from './tramite-regulatorio'
import{Usuario} from './usuario'
import {Documento} from'./documentacion-tecnica'
export class ExpedienteRegulatorio {
    idExpediente!:number;
    numeroDeExpediente!:number;
    FechaDeCreacion!:Date;
    EstadoDelExpediente!:boolean;
    DescripcionExpediente!:String;
    Usuario!:Usuario;
    TramiteRegulatorio!:Tramite;
    DocumentacionTecnica!:Documento;
}

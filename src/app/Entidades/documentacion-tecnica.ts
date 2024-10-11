import {ExpedienteRegulatorio} from './expediente-regulatorio'
export class Documento {
    idDocumento!:number;
    tipoDeDocumento!:string;
    fechaDeAdjuncion!:Date;
    descripcion!:string;
    estadoDelDocumento!:boolean;
    expedienteRegulatorio!:ExpedienteRegulatorio;
}

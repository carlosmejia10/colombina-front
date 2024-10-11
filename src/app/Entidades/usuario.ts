import {ExpedienteRegulatorio} from './expediente-regulatorio'
export class Usuario {
    id!:number;
    nombre!:string;
    rol!:string;
    correoElectronico!:string;
    ExpedienteRegulatorio!:ExpedienteRegulatorio;
}

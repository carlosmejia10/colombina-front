import {Tramite} from './tramite-regulatorio'
export class PagoPSE {
    idPago!:number;
    monto!:number;
    fechaDePago!:Date;
    metodoDePago!:string;
    referenciaDePago!:string;
    tramiteRegulatorio!:Tramite;
}

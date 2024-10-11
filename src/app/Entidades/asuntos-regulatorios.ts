import{Tramite} from'./tramite-regulatorio'
export class AsuntosRegulatorios {
    idAsunto!:number;
    responsable!:string;
    estadoDelAsunto!:boolean;
    fechaDeRecepcion!:Date;
    fechaDeEnvioAInvima!:Date;
    tramiteRegulatorio!:Tramite;
}

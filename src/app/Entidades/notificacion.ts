import { Tramite } from "./tramite-regulatorio";

export class Notificacion {
    public  idNotificacion!:number;
    public  mensaje!:String;
    public  estado!:boolean;
    public  tipoNotificacion!:String;
    public  tramite!:Tramite;

}

// tabla-tramite.component.ts
import{Tramite} from'../Entidades/tramite-regulatorio';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import{LateralComponent} from'../Layout/lateral/lateral.component'
import{HeaderComponent} from'../Layout/header/header.component'
import{BarraOpcComponent}from'../Layout/barra-opc/barra-opc.component'
import { RouterModule } from '@angular/router';
import { SeuimientoDelTramite } from '../Entidades/seuimiento-del-tramite';
import { TramiteService } from '../Servicios/tramite-regulatorio.service';
import {ExpedienteRegulatorio} from '../Entidades/expediente-regulatorio'
import{EntidadSanitaria} from '../Entidades/entidad-sanitaria'
import{ArchivosDeControlDeTramites} from '../Entidades/archivos-de-control-de-tramites'
import{AsuntosRegulatorios} from '../Entidades/asuntos-regulatorios'
import{SolicitudDEI} from'../Entidades/solicitud-dei'

@Component({
  selector: 'app-tabla-tramite',
  standalone: true,
  imports: [CommonModule,LateralComponent,HeaderComponent,BarraOpcComponent,RouterModule],
  templateUrl: './tabla-tramite.component.html',
  styleUrls: ['./tabla-tramite.component.css']
})
export class TablaTramiteComponent {
  tramites!:Tramite[];
  tramiteService!: TramiteService;
  
  mostrarTabla1: boolean = true;
  mostrarTabla2: boolean = true;

  toggleTabla(tabla: string) {
    if (tabla === 'tabla1') {
      this.mostrarTabla1 = !this.mostrarTabla1;
    } else if (tabla === 'tabla2') {
      this.mostrarTabla2 = !this.mostrarTabla2;
    }
  }
  ngOnInit():void{
    //this.getTramites();
    
    
    this.tramites=[
     {
        "idTramite": 1,
        "numeroDeRegistro": 12345,
        "tipoDeTramite": "a",
        "estadoDelTramite":true,
        "fechaDeRadicacion":new Date("15-10-2024"),
        "fechaDeAprobacionRechazo":new Date("10-08-2024"),
        "descripcionDelTramite": "Le informamos que su tramite con el numero 12345 no ha sido respondido",
        "plazoDeRespuesta":new Date("31-12-2024"),
        ExpedienteRegulatorio: new ExpedienteRegulatorio,
        seuimientoDelTramite: new SeuimientoDelTramite,
        EntidadSanitaria: new EntidadSanitaria,
        ArchivosDeControlDeTramites: new ArchivosDeControlDeTramites,
        AsuntosRegulatorios: new AsuntosRegulatorios,
        SolicitudDEI: new SolicitudDEI
      },
    {
      "idTramite": 2,
        "numeroDeRegistro": 44545,
        "tipoDeTramite": "a",
        "estadoDelTramite":false,
        "fechaDeRadicacion":new Date("15-10-2024"),
        "fechaDeAprobacionRechazo":new Date("10-08-2024"),
        "descripcionDelTramite": "Le informamos que su tramite con el numero 44545 no ha sido respondido",
        "plazoDeRespuesta":new Date("31-12-2024"),
        ExpedienteRegulatorio: new ExpedienteRegulatorio,
        seuimientoDelTramite: new SeuimientoDelTramite,
        EntidadSanitaria: new EntidadSanitaria,
        ArchivosDeControlDeTramites: new ArchivosDeControlDeTramites,
        AsuntosRegulatorios: new AsuntosRegulatorios,
        SolicitudDEI: new SolicitudDEI
    },
    {
      "idTramite": 3,
        "numeroDeRegistro": 444,
        "tipoDeTramite": "b",
        "estadoDelTramite":true,
        "fechaDeRadicacion":new Date("15-10-2024"),
        "fechaDeAprobacionRechazo":new Date("10-08-2024"),
        "descripcionDelTramite": "Le informamos que su tramite con el numero 444 no ha sido respondido",
        "plazoDeRespuesta":new Date("31-12-2024"),
        ExpedienteRegulatorio: new ExpedienteRegulatorio,
        seuimientoDelTramite: new SeuimientoDelTramite,
        EntidadSanitaria: new EntidadSanitaria,
        ArchivosDeControlDeTramites: new ArchivosDeControlDeTramites,
        AsuntosRegulatorios: new AsuntosRegulatorios,
        SolicitudDEI: new SolicitudDEI
    },
    {
        "idTramite": 1,
        "numeroDeRegistro": 4848,
        "tipoDeTramite": "b",
        "estadoDelTramite":false,
        "fechaDeRadicacion":new Date("15-10-2024"),
        "fechaDeAprobacionRechazo":new Date("10-08-2024"),
        "descripcionDelTramite": "Le informamos que su tramite con el numero 4848 no ha sido respondido",
        "plazoDeRespuesta":new Date("31-12-2024"),
        ExpedienteRegulatorio: new ExpedienteRegulatorio,
        seuimientoDelTramite: new SeuimientoDelTramite,
        EntidadSanitaria: new EntidadSanitaria,
        ArchivosDeControlDeTramites: new ArchivosDeControlDeTramites,
        AsuntosRegulatorios: new AsuntosRegulatorios,
        SolicitudDEI: new SolicitudDEI
    }
  ];
  
  }
  getTramites(): void {
    this.tramiteService.findAll().subscribe({
      next: (data) => {
        this.tramites = data;
      },
      error: (err) => {
        console.error('Error fetching tramites', err);
      }
    });
  }
}

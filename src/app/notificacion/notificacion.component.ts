import { Component } from '@angular/core';
import{LateralComponent} from'../Layout/lateral/lateral.component'
import{HeaderComponent} from'../Layout/header/header.component'
import{BarraOpcComponent}from'../Layout/barra-opc/barra-opc.component'
import { RouterModule } from '@angular/router';
import { Notificacion } from '../Entidades/notificacion';
import { Tramite } from '../Entidades/tramite-regulatorio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notificacion',
  standalone: true,
  imports: [LateralComponent,HeaderComponent,BarraOpcComponent,RouterModule,CommonModule],
  templateUrl: './notificacion.component.html',
  styleUrl: './notificacion.component.css'
})
export class NotificacionComponent {
  notificaciones:Notificacion[]=[{
    idNotificacion:1,
    mensaje:"Creacion de tramite",
    estado:false,
    tipoNotificacion:"Algo",
    tramite:new Tramite
  },
  {
    idNotificacion:1,
    mensaje:"Creacion de tramite",
    estado:false,
    tipoNotificacion:"Algo",
    tramite:new Tramite
  }
]

}

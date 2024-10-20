import { Component } from '@angular/core';
import{LateralComponent} from'../Layout/lateral/lateral.component'
import{HeaderComponent} from'../Layout/header/header.component'
import{BarraOpcComponent}from'../Layout/barra-opc/barra-opc.component'
import { RouterModule } from '@angular/router';
import { Notificacion } from '../Entidades/notificacion';
import { Tramite } from '../Entidades/tramite';
import { CommonModule } from '@angular/common';
import { Usuario } from '../Entidades/usuario';

@Component({
  selector: 'app-notificacion',
  standalone: true,
  imports: [LateralComponent,HeaderComponent,BarraOpcComponent,RouterModule,CommonModule],
  templateUrl: './notificacion.component.html',
  styleUrl: './notificacion.component.css'
})
export class NotificacionComponent {
  notificaciones:Notificacion[]=[{
    id:1,
    mensaje:"Creacion de tramite",
    fecha: new Date('15-08-2023'),
    destinatario:new Usuario
  },
  {
    id:1,
    mensaje:"Creacion de tramite",
    fecha: new Date('15-08-2023'),
    destinatario:new Usuario
  }
]

}

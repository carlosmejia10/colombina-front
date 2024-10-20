import { Component, OnInit } from '@angular/core';
import { LateralComponent } from '../Layout/lateral/lateral.component';
import { HeaderComponent } from '../Layout/header/header.component';
import { BarraOpcComponent } from '../Layout/barra-opc/barra-opc.component';
import { Tramite, EstadoTramite } from '../Entidades/tramite';
import { EntidadSanitaria } from '../Entidades/entidad-sanitaria';
import { Solicitud } from '../Entidades/solicitud';
import { Usuario } from '../Entidades/usuario';
import { Documento } from '../Entidades/documento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-tramite',
  standalone: true,
  imports: [LateralComponent, HeaderComponent, BarraOpcComponent,CommonModule],
  templateUrl: './info-tramite.component.html',
  styleUrls: ['./info-tramite.component.css']
})
export class InfoTramiteComponent implements OnInit {
  mostrarBoton:boolean=true;
  tramite!: Tramite;
  entidadSanitaria!: EntidadSanitaria;
  solicitud!: Solicitud;
  solicitante!: Usuario;
  documentos!: Documento[];

  ngOnInit(): void {
    // Datos falsos para mostrar en la pantalla
    this.solicitante = {
      id: 1,
      nombre: 'Juan Pérez',
      contrasena: '1234',
      rol: { id: 1, tipoRol: 'Administrador' },
      correoElectronico: 'juan.perez@example.com'
    };

    this.solicitud = new Solicitud(
      1,
      'Galletas',
      'Comida',
      new Date('2024-09-01'),
      'Nacional'
    );

    this.entidadSanitaria = {
      id: 1,
      nombre: 'INVIMA',
      pais: 'Colombia'
    };

    this.documentos = [
      { id: 1, tipo: 'Envío de documentación adicional', aprobado: true, tempUrl: 'http://accioneduca.org/admin/archivos/modulos/ayudanos/prueba.pdf' },
      { id: 2, tipo: 'Recepción de documentos', aprobado: false, tempUrl: 'http://accioneduca.org/admin/archivos/modulos/ayudanos/prueba.pdf' }
    ];

    this.tramite = new Tramite(
      1,
      'AR-0001-2024',
      EstadoTramite.RECHAZADO,
      new Date('2024-09-15'),
      new Date('2024-10-26'),
      this.entidadSanitaria,
      this.documentos,
      [],
      [],
      [],
      this.solicitud,
      'A'
    );
  }

  escalarTramite() {
    /*
    this.tramiteService.escalarTramite(this.tramite.id).subscribe({
      next: () => {
        alert(`El trámite con número de radicado ${this.tramite.numeroRadicado} ha sido escalado.`);
      },
      error: (err) => {
        console.error('Error al escalar el trámite', err);
        alert('Error al escalar el trámite.');
      }
    });
    */
   //eliminar despues
    alert(`El trámite con número de radicado ${this.tramite.numeroRadicado} ha sido escalado.`);
    this.mostrarBoton=false;
  }
}

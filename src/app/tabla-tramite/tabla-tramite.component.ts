import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralComponent } from '../Layout/lateral/lateral.component';
import { HeaderComponent } from '../Layout/header/header.component';
import { BarraOpcComponent } from '../Layout/barra-opc/barra-opc.component';
import { RouterModule } from '@angular/router';
import { TramiteService } from '../Servicios/tramite-regulatorio.service';
import { Tramite, EstadoTramite } from '../Entidades/tramite';
import { EntidadSanitaria } from '../Entidades/entidad-sanitaria';
import { Solicitud } from '../Entidades/solicitud';
import { Documento } from '../Entidades/documento';

@Component({
  selector: 'app-tabla-tramite',
  standalone: true,
  imports: [CommonModule, LateralComponent, HeaderComponent, BarraOpcComponent, RouterModule],
  templateUrl: './tabla-tramite.component.html',
  styleUrls: ['./tabla-tramite.component.css']
})
export class TablaTramiteComponent implements OnInit {
  tramites!: Tramite[];
  searchTerm: string = '';
  mostrarTabla1: boolean = true;
  mostrarTabla2: boolean = true;
  tramitesMostrados: Tramite[] = [];

  toggleTabla() {
    this.mostrarTabla1 = !this.mostrarTabla1;
    console.log('Tabla 1:', this.mostrarTabla1);
  }

  toggleTabla2() {
    this.mostrarTabla2 = !this.mostrarTabla2;
    console.log('Tabla 2:', this.mostrarTabla2);
  }

  ngOnInit(): void {
    // Cargar datos de prueba
    this.tramites = [
      new Tramite(
        1,
        'AR-0001-2024',
        EstadoTramite.APROBADO,
        new Date('2024-10-15'),
        new Date('2024-10-25'),
        new EntidadSanitaria(),
        [new Documento()],
        [],
        [],
        [],
        new Solicitud(1, 'Galletas', 'Comida', new Date(), 'A'),
        'A'
      ),
      new Tramite(
        2,
        'AR-0002-2024',
        EstadoTramite.PENDIENTE,
        new Date('2024-10-15'),
        new Date('2024-10-18'),
        new EntidadSanitaria(),
        [new Documento()],
        [],
        [],
        [],
        new Solicitud(1, 'Galletas', 'Comida', new Date(), 'A'),
        'A'
      ),
      new Tramite(
        3,
        'AR-0003-2024',
        EstadoTramite.RECHAZADO,
        new Date('2024-10-15'),
        new Date('2024-10-26'),
        new EntidadSanitaria(),
        [new Documento()],
        [],
        [],
        [],
        new Solicitud(1, 'Galletas', 'Comida', new Date(), 'A'),
        'A'
      ),
      new Tramite(
        4,
        'AR-0004-2024',
        EstadoTramite.RECHAZADO,
        new Date('2024-10-15'),
        new Date('2024-10-21'),
        new EntidadSanitaria(),
        [new Documento()],
        [],
        [],
        [],
        new Solicitud(1, 'Galletas', 'Comida', new Date(), 'B'),
        'B'
      ),
      new Tramite(
        5,
        'AR-0005-2024',
        EstadoTramite.APROBADO,
        new Date('2024-10-15'),
        new Date('2024-10-20'),
        new EntidadSanitaria(),
        [new Documento()],
        [],
        [],
        [],
        new Solicitud(1, 'Galletas', 'Comida', new Date(), 'B'),
        'B'
      ),
      new Tramite(
        6,
        'AR-0006-2024',
        EstadoTramite.APROBADO,
        new Date('2024-10-15'),
        new Date('2024-10-23'),
        new EntidadSanitaria(),
        [new Documento()],
        [],
        [],
        [],
        new Solicitud(1, 'Galletas', 'Comida', new Date(), 'B'),
        'B'
      )
    ];

    // Inicializar tramitesMostrados con todos los trámites al inicio
    this.tramitesMostrados = [...this.tramites];
  }

  getTramites(): void {
    // Aquí puedes llamar al servicio cuando conectes con el backend
  }

  private filterTratamientos() {
    if (this.searchTerm.trim() === '') {
      this.tramitesMostrados = this.tramites;
    } else {
      this.tramitesMostrados = this.tramites.filter(tramite =>
        tramite.numeroRadicado.includes(this.searchTerm)
      );
    }
  }
}

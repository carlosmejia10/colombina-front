// tramite.model.ts
import { Documento } from './documento';
import { Pago } from './pago';
import { Seguimiento } from './seguimiento';
import { HistorialCambio } from './historial-cambio';
import { Solicitud } from './solicitud';
import { EntidadSanitaria } from './entidad-sanitaria';

export class Tramite {
  id: number;
  numeroRadicado: string;
  estado: EstadoTramite;
  fechaRadicacion: Date;
  fechaRespuesta: Date;
  entidadSanitaria?: EntidadSanitaria;
  documentos?: Documento[];
  pagos: Pago[];
  seguimientos: Seguimiento[];
  historialCambios: HistorialCambio[];
  solicitud: Solicitud;
  tipoTramite: string;

  constructor(
    id: number,
    numeroRadicado: string,
    estado: EstadoTramite,
    fechaRadicacion: Date,
    fechaRespuesta: Date,
    entidadSanitaria: EntidadSanitaria,
    documentos: Documento[],
    pagos: Pago[],
    seguimientos: Seguimiento[],
    historialCambios: HistorialCambio[],
    solicitud: Solicitud,
    tipoTramite: string
  ) {
    this.id = id;
    this.numeroRadicado = numeroRadicado;
    this.estado = estado;
    this.fechaRespuesta =fechaRespuesta,
    this.fechaRadicacion = fechaRadicacion;
    this.entidadSanitaria = entidadSanitaria;
    this.documentos = documentos;
    this.pagos = pagos;
    this.seguimientos = seguimientos;
    this.historialCambios = historialCambios;
    this.solicitud = solicitud;
    this.tipoTramite = tipoTramite;
  }
}

// Enum para el estado del trámite
export enum EstadoTramite {
  EN_REVISION = 'EN_REVISION',
  APROBADO = 'APROBADO',
  RECHAZADO = 'RECHAZADO',
  PENDIENTE = 'PENDIENTE',
}
